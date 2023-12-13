// Unsuported (404) routes
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404);
    next(error);
}


// Middleware to handle Erros
const errorHandler = (error, req, res, nex) => {
    if(res.headerSent) {
        return next(error)
    }

    res.status(error.code || 500).json({
        message: error.message || "An unkown error occured"
    })
}

module.exports = {notFound, errorHandler}