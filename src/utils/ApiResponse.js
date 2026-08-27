class ApiResponse {
    constructor(data, statusCode, success, message="Success") {
        this.data = data;
        this.statusCode = statusCode;
        this.success = statusCode < 400;
        this.message = message;
        this.errors = errors;
    }
}
export default ApiResponse;