const jwt = require('jsonwebtoken')
const { User, Policy } = require ('../models')

function authenticationItem (req, res, next) {
    const decoded = jwt.verify(req.headers.access_key, 'IPSecret')
    if (decoded) {
        const serviceDecoded = jwt.verify(decoded.access_token, 'jwt_secret')
        User
            .findOne({
                where: {
                    email: serviceDecoded.email
                }
            })
            .then( user => {
                if (!user) {
                    throw {
                        name: `unauthorized access`
                    }
                } else {
                    return Policy.findOne({
                        where: {
                            id : user.PolicyId
                        }
                    })
                }
            })
            .then( data => {
                if (data.roleName.toLowerCase() === 'admin' || data.roleName.toLowerCase() === 'super admin') {
                    req.adminDecoded = { decoded, serviceDecoded }
                    next()
                } else {
                    req.decodedData = { decoded, serviceDecoded }
                    next()
                }
            })
            .catch( err => {
                next(err)
            })
    } else {
        throw {
            name: `connection refused`
        }
    }
}

module.exports = authenticationItem