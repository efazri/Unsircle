const { Policy } = require ('../models')

function authorization (req, res, next){
    const id = req.adminDecoded.serviceDecoded.PolicyId

    Policy
        .findByPk(id)
        .then( data => {
            if (!data){
                throw {
                    name : `unauthorized access`
                }
            }
            else {
                if ( data.roleName.toLowerCase() === "admin" || data.roleName.toLowerCase() === "super admin" ){
                    next()
                }
                else {
                    throw {
                        name : `unauthorized access`
                    }
                }
            }
    })
    .catch (err => {
        next (err)
    })

}

module.exports = authorization