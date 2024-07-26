class CustomError extends Error {
    readonly statusCode: number;
    readonly status: 'fail' | 'error';

    constructor(errMsg: string, statusCode: number) {
        super(errMsg);
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
    }
};

export default CustomError;