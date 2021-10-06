import ErrorHandler from "../utils/erroHandler";

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    let error = {...err};

    error.message = err.message;

    // Wrong Mongoose Object Id Error
    if(err.name === 'CastError'){
        const newErrorMessage = `Resource not found. Invalid : ${err.path}`;
        console.log(error)
        error = new ErrorHandler(newErrorMessage, 400);   
        console.log(error)
    }


    res.status(err.statusCode).json({
        success : false,
        error,
        message : error.message,
        stack : error.stack
    })
}