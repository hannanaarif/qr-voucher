CREATE TABLE qrCode (
    id SERIAL PRIMARY KEY,
    qr_code VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expiry_date TIMESTAMP
);


-- When the button is clicked: 
-- ○ Generate a 10-digit random number. 
-- ○ Create a QR code using the qrcode package. 
-- ○ Insert the QR code details (number, generated date, expiry date) into the 
-- database. 
-- ○ Display a success message.