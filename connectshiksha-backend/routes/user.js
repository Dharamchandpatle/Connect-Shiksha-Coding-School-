const express = require('express');
const router = express.Router();
const { sendUserOtp ,userRegister,userLogin,sendEmailForPass,verifyOtpForPass,userProfile
} = require('../controller/user');
const {verifyUserToken} = require('../middleware/tokenverification');

router.post('/send-otp', sendUserOtp);
router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/fp-sendmail', sendEmailForPass);
router.post('/fp-verifyotp', verifyOtpForPass);
router.get('/profile', verifyUserToken, userProfile);

module.exports = router;