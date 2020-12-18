
module.exports = function (err, req, res, next) {
    console.log(err.name)
    if(err.name === `SequelizeValidationError`){
        res.status(400).json({
            error_msg: err.errors[0].message
        })
    }else if(err.name === `email/password is wrong`){
        res.status(400).json({
            error_msg: err.name
        })
    }else if(err.name === `unauthorized access`){
        res.status(400).json({
            error_msg: err.name
        })
    }else if(err.name === `connection refused`){
        res.status(400).json({
            error_msg: err.name
        })
    }else if (err.errors[0].message === `email must be unique`) {
        res.status(400).json({error_msg: err.errors[0].message})
    }else {
        res.status(500).json(err)
    }
}