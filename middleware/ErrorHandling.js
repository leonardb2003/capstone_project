function errorHandling(err, req, res, next){
    if(err){
        console.log(err)
        const status = err.status || 500;
        res.status(status).json (
            {
                status:status,
                err: 'An erro has occurred. Please try again later.'
            }
        )
    }
    next();
}
module.exports = {errorHandling};