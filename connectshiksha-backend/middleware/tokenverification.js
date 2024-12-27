const jwt = require("jsonwebtoken");


class TokenVerification {
    constructor() {
        this.secret = process.env.JWT_SECRET;
    }

    verifyAdminToken(req, res, next) {
        const token = req.headers.authorization?.split(" ")[1];        
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized access"
            });
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err ) {
                return res.status(401).json({
                    message: "Unauthorized access"
                });
            }
            if (decoded.role !== "ADMIN") {
                return res.status(401).json({
                    message: "Unauthorized access"
                });
            }
            next();
        });
    }

    verifyUserToken(req, res, next) {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                message: "Token not found"
            });
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err ) {
                return res.status(401).json({
                    message: "Unauthorized access"
                });
            }

            if (decoded.role !== "USER") {
                return res.status(401).json({
                    message: "Unauthorized access"
                });
            }
            req.email = decoded.data;
            next();
        });
    }


}

module.exports = new TokenVerification();