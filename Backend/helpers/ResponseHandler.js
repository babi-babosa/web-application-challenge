module.exports = class ResponseHandler {
    /**
     * ResponseHandler constructor
     */
    constructor() {
    }

    /**
     * errorResponseFormatter - Function to return a response that will be used to construct server error response
     * 
     * @param {string} message - default is an unknown error 
     * @param {number} errorStatus - default is an internal server error (HTTP 500)
     */
    errorResponseFormatter (message = "Unkown error", errorStatus = 500) {
        return {
            errorStatus: errorStatus,
            response: {
                error_message: message
            }
        };
    }

    /**
     * successResponseFormatter - Function to return a response that will be used to construct server success response in some cases
     * 
     * @param {string} message - default is success 
     */
    successResponseFormatter (message = "Success") {
        return {
            response: {
                success_message: message
            }
        };
    }
}