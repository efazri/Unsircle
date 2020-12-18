const axios = require('axios')
const baseUrl = `http://localhost:`
const jwt = require('jsonwebtoken')

class AppController {
    static register(req, res, next) {
        const { firstName, lastName, email, password, phoneNumber } = req.body
        const access_key = jwt.sign({
            payload: {
                firstName,
                lastName,
                email,
                password,
                phoneNumber
            }
        }, "IPSecret")
        axios({
            method: 'POST',
            url: baseUrl + `3000/register`,
            headers: {
                access_key
            }
        })
        .then( ({ data }) => {
            res.status(201).json(data)
        })
        .catch( err => {
            res.send(err)
        })
    }

    static login(req, res, next) {
        const { email, password } = req.body
        const access_key = jwt.sign({
            payload: {
                email,
                password,
            }
        }, "IPSecret")

        axios({
            method: 'POST',
            url: baseUrl + `3000/login`,
            headers: {
                access_key
            }
        })
        .then( ({ data }) => {
            res.status(201).json(data)
        })
        .catch( err => {
            res.send(err)
        })
    }

    static getProducts (req, res, next) {
        const access_token = req.headers.access_token
        const access_key = jwt.sign({
            payload: {
                access_token
            }
        }, "IPSecret")
        axios({
            method: 'GET',
            url: baseUrl + `3000/products`,
            headers: {
                access_key
            }
        })
        .then( ({ data }) => {
            res.status(201).json(data)
        })
        .catch( err => {
            res.send(err)
        })
    }


    static addProduct (req, res, next) {
        const { name, image_url, stock, price } = req.body
        const access_token = req.headers.access_token
        const access_key = jwt.sign({
            payload: {
                name,
                image_url,
                price,
                stock
            },
            access_token
        }, "IPSecret")
        axios({
            method: 'POST',
            url: baseUrl + `3000/products`,
            headers: {
                access_key
            }
        })
        .then( ({ data }) => {
            res.status(201).json(data)
        })
        .catch( err => {
            res.send(err)
        })
    }


    static updateProduct(req, res, next) {
        const access_token = req.headers.access_token
        const { productId } = req.params
        const { name, image_url, stock, price } = req.body
        const access_key = jwt.sign({
            payload: {
                name,
                image_url,
                price,
                stock,
                productId
            },
            access_token
        }, "IPSecret")
        axios({
            method: 'PUT',
            url: baseUrl + `3000/products/${productId}`,
            headers: {
                access_key
            }
        })
        .then( ({ data }) => {
            res.status(201).json(data)
        })
        .catch( err => {
            res.send(err)
        }) 
    }

    static deleteProduct(req, res, next) {
        const access_token = req.headers.access_token
        const { productId } = req.params
        console.log(req.params)
        const access_key = jwt.sign({
            productId,
            access_token

        }, "IPSecret")
        axios({
            method: 'delete',
            url: baseUrl + `3000/products/${productId}`,
            headers: {
                access_key
            }
        })
        .then( ({ data }) => {
            res.status(201).json(data)
        })
        .catch( err => {
            res.send(err)
        }) 
    }
}

module.exports = AppController