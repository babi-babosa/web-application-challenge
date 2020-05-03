module.exports = class ResponseHandler {
    constructor() {
    }

    errorResponseFormatter (message = "Unkown error", errorStatus = 400) {
        return {
            errorStatus: errorStatus,
            response: {
                error_message: message
            }
        };
    }

    successResponseFormatter (message = "Success") {
        return {
            response: {
                success_message: message
            }
        };
    }
}