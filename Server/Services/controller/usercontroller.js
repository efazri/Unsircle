const { User } = require ('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
    static register (req, res, next) {
        const { firstName, lastName, email, password, phoneNumber } = req.decodedData
        User
            .create({
                firstName,
                lastName,
                email,
                password,
                phoneNumber
            })
            .then(user => {
                res.status(201).json({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    phoneNumber: user.phoneNumber
                })
            })
            .catch( err => {
                next (err)
            })
    }


    static login (req, res, next) {
        const { email, password } = req.decodedData
        User
            .findOne({
                where: {
                    email
                }
            })
            .then( user => {
                if ( !user ) {
                    throw {
                        name: `email/password is wrong`
                    }
                } else {
                    const verifiedEmail  = bcrypt.compareSync(password, user.password)
                    if (verifiedEmail) {
                        const access_token = jwt.sign({
                            id: user.id,
                            email: user.email,
                            PolicyId: user.PolicyId
                        }, 'jwt_secret')
                        res.status(200).json({
                            access_token
                        })
                    } else {
                        throw {
                            name: `email/password is wrong`
                        }
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController