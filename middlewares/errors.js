import ErrorHandler from "../utils/erroHandler";

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    let error = {...err};

    error.message = err.message;

    res.status(err.statusCode).json({
        sucess : false,
        error,
        message : err.message,
        stack : error.stack
    })
}