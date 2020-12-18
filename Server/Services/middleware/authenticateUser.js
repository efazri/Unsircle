const jwt = require('jsonwebtoken')

function authenticationUser (req, res, next) {
    const decoded = jwt.verify(req.headers.access_key, 'IPSecret')

    if (decoded) {
        req.decodedData = decoded.payload
        next()
    } else {
        throw {
            name: `connection refused`
        }
    }
}

module.exports = authenticationUser