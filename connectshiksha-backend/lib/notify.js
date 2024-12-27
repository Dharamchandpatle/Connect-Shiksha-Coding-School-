const axios = require("axios");
const nodemailer = require('nodemailer');

class Notify {
    constructor() { }

    async sendOTP(phoneNumber, otp) {
      
        try {
            const countryCode = "91"; // Replace with the appropriate country code
            const fullPhoneNumber = countryCode + phoneNumber;

            const response = await axios.post(
                "https://api.msg91.com/api/v5/flow/",
                {
                    flow_id: process.env.MSG91_FLOW_ID,
                    sender: process.env.MSG91_SENDER_ID,
                    mobiles: fullPhoneNumber,
                    otp: otp,
                    VAR2: "VALUE 2",
                },
                {
                    headers: {
                        authkey: process.env.MSG91_AUTH_KEY , // Replace with your Msg91 API key
                        "content-type": "application/JSON",
                    },
                }
            );

            return "ok";
        } catch (error) {
            console.error("Error sending OTP:", error.message);
            throw error;
        }
    }

    async sendEmail(email, subject, text) {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: subject,
                text: text
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.error("Error sending email:", error.message);
                    throw error;
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
        } catch (error) {
            console.error("Error sending email:", error.message);
            throw error;
        }
    }
}

module.exports = new Notify();
