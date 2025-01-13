import { jsPDF } from "jspdf";
import { getQrCodeByNumberService } from "../model/generateQrService.js";

export const generatePdfController = async (req, res) => {
    const { number } = req.body;
    const qrCode = await getQrCodeByNumberService(number);
    if (!qrCode) {
        res.send({ message: "qr code not found" });
    }

    const title = "Voucher";
    const expiry_date = `${qrCode.expiry_date}`;
    const created_at = `${qrCode.created_at}`;

    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    // Define image dimensions
    const imageWidth = 100;  // in mm
    const imageHeight = 100; // in mm

    // Get page dimensions
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Calculate centered coordinates
    const x = (pageWidth - imageWidth) / 2;
    const y = (pageHeight - imageHeight) / 2;

    doc.setFontSize(16);
    doc.text(title, pageWidth / 2, y - 10, { align: 'center' });
    doc.addImage(qrCode.url, "PNG", x, y, imageWidth, imageHeight);
    doc.text(expiry_date, pageWidth / 2, y + 10, { align: 'center' });
    doc.text(created_at, pageWidth / 2, y + 20, { align: 'center' });
    doc.save("a4.pdf");
    res.send({ message: "pdf generated" });
};