import ErrorHandler from "../utils/erroHandler";

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    let error = {...err};

    error.message = err.message;

    // Wrong Mongoose Object Id Error
    if(err.name === 'CastError'){
        const newErrorMessage = `Resource not found. Invalid : ${err.path}`;
        error = new ErrorHandler(newErrorMessage, 400);   
    }

    // Handling mogoose Validation Error
    if(err.name === 'ValidationError'){
        const newErrorMessage = Object.values(err.errors).map(value => value.message);
        error = new ErrorHandler(newErrorMessage, 400);
    }


    res.status(err.statusCode).json({
        success : false,
        error,
        message : error.message,
        stack : error.stack
    })
}