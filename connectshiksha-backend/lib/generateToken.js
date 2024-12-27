const jwt = require("jsonwebtoken");

class GenerateToken {
    constructor() {
        this.secret = process.env.JWT_SECRET;
    }

    generateUserToken(data, expiresIn = null) {
        const payload = {
            role :"USER",
            data
        };

        return jwt.sign(payload, process.env.JWT_SECRET);
    }

    generateAdminToken(data, expiresIn = null) {
        const payload = {
            role :"ADMIN",
            data
        };

        return jwt.sign(payload, process.env.JWT_SECRET);
    }
}

module.exports = new GenerateToken();