import QRCode from 'qrcode'
import { getAllQrCodesService, saveQrCodeService } from '../model/generateQrService.js'


const generateQR = async text => {
    try {
        return await QRCode.toDataURL(text)
    } catch (err) {
        console.error(err)
    }
}

const generateNumber = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000);
}

export const QrCodeGeneratorController = async (req, res) => {
    const number = generateNumber();
    const qr = await generateQR(`${number}`);
    const expiryDate = new Date(Date.now() + 1000 * 60 * 60 * 24);
    const createdAt = new Date();
    const result = await saveQrCodeService(qr, number, expiryDate, createdAt);
    res.send(result);
};

export const getAllQrCodesController = async (req, res) => {
    const result = await getAllQrCodesService();
    res.send(result);
};



// export  { QrCodeGeneratorController, getAllQrCodesController };


// ○ Generate a 10 - digit random number.
// ○ Create a QR code using the qrcode package.
// ○ Insert the QR code details(number, generated date, expiry date) into the
// database.
// ○ Display a success message. 