export interface ErrorWithStatus extends Error {
    statusCode: number | 500;
    status: 'fail' | 'error';
}