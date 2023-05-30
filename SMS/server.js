require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// Generate a random verification code
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Twilio client
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Send SMS verification code
app.post('/send-verification', (req, res) => {
  const phoneNumber = req.body.phoneNumber;

  if (!phoneNumber) {
    return res.status(400).send('Phone number is required');
  }

  const verificationCode = generateVerificationCode();
  const message = `Your verification code is: ${verificationCode}`;

  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber
    })
    .then(() => {
      res.send('Verification code sent successfully');
    })
    .catch((err) => {
      console.error('Error sending SMS', err);
      res.status(500).send('Error sending SMS');
    });
});

// Verify the received code
app.post('/verify-code', (req, res) => {
  const receivedCode = req.body.code;
  const expectedCode = req.body.expectedCode;

  if (receivedCode === expectedCode) {
    res.send('Verification successful');
  } else {
    res.status(400).send('Invalid verification code');
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
