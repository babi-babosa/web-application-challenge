module.exports = class ErrorResponse {
    constructor(message, errorStatus) {
        return {
            message: message != "" ? message : "Unkown error",
            errorStatus: errorStatus || 400
        };
    }
}