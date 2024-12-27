const { sendOTP, sendEmail } = require("../lib/notify");
const { checkMandatoryFields } = require("../lib/validations");
const { success, badRequest, serverError } = require("../lib/response");
const {generateUserToken} = require("../lib/generateToken");
const {compareHash ,generateHash} = require("../lib/salting");
const User = require("../models/User");

// send otp to user
const sendUserOtp = async (req, res) => {
    const mandatoryFields = ["phoneNumber"];
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {
        const { phoneNumber } = req.body;

        try {
            const otp = Math.floor(1000 + Math.random() * 9000);
            sendOTP(phoneNumber, otp);
            success(res, "OTP sent successfully");
        }
        catch (error) {
            console.error(error.message);
            serverError(res);
        }
    }
}

const userRegister = async (req, res) => {
    const mandatoryFields = ["name", "phone", "email", "password"];
    console.log(req.body);
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {
        const { name, phone, email, password } = req.body;
        try {
            // check if user is already registered with email or phone
            const userExists = await User.findOne({ $or: [{ email }, { phone }] });
            if (userExists) {
                badRequest(res, "User already exists");
            } else {
                const hashedPassword = await generateHash(password);
                const user = new User({ name, phone, email, password: hashedPassword });
                await user.save();
                success(res, "User registered successfully");

            }
        } catch (error) {
            console.error("server error",error.message);
            serverError(res);
        }
    }
}

const userLogin = async (req, res) => {
    const mandatoryFields = ["username", "password"];
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {
        const { username, password } = req.body;
        try {
            // check if user exists with phone or email
            const user = await User.findOne({ $or: [{ phone: username }, { email: username }] });
            if (user) {
                const passwordMatch = await compareHash(password, user.password);
                console.log(" pass match",passwordMatch);
                if (passwordMatch) {
                    const token = generateUserToken(user.email);
                    success(res, "User logged in successfully", { token });
                } else {
                    badRequest(res, "Invalid email or password");
                }
            } else {
                badRequest(res, "Invalid email or password");
            }
        } catch (error) {
            console.error(error.message);
            serverError(res);
        }
    }
}

const sendEmailForPass = async (req, res) => {
    const mandatoryFields = ["email"];
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {
        const { email } = req.body;
        try {
            const user = await User.findOne({ email });
            if (user) {
                const otp = Math.floor(1000 + Math.random() * 9000);
                sendEmail(email, "Password Reset OTP", `Your OTP is ${otp}`);
                const hashedOtp = await generateHash(otp.toString());
                success(res, "OTP sent successfully", {
                    otptoken: hashedOtp,
                    email: user.email
                });
            } else {
                badRequest(res, "User not found");
            }
        } catch (error) {
            console.error(error.message);
            serverError(res);
        }
    }
}

const verifyOtpForPass = async (req, res) => {
    const mandatoryFields = ["otp","email"];
    if (checkMandatoryFields(res, req.body, mandatoryFields)) {

        const otpToken = req.headers.otptoken;
        const { otp ,email} = req.body;

        if (!otpToken) {
            badRequest(res, "Token not found");
        } else {
            try {
                const isValid = await compareHash(otp, otpToken);

                if (isValid) {
                    const token = generateUserToken( email );
                    success(res, "OTP verified successfully", { token });
                } else {
                    badRequest(res, "Invalid OTP");
                }
            } catch (error) {
                console.error(error.message);
                serverError(res);
            }
        }
    }
}

const userProfile = async (req, res) => {
    const email = req.email;
    try {
        const user = await User.findOne( { email : email} ).select("-password");
        success(res, "User profile fetched successfully", user);
    } catch (error) {
        console.error(error.message);
        serverError(res);
    }
}

module.exports = { sendUserOtp, userRegister, userLogin, sendEmailForPass, verifyOtpForPass,userProfile };

