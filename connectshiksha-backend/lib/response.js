
class Response {

    constructor() {

    }

    success(res, message, data = null) {

        res.status(200).json({
            status: true,
            message,
            data
        });
    }

    badRequest(res, message) {
        res.status(200).json({
            status: false,
            message,
            data: null
        });
    }
    serverError(res) {
        res.status(200).json({
            status: false,
            message: "Internal Server Error",
            data: null
        });
    }

}

module.exports = new Response();