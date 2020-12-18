const { Product } = require ('../models')

class ProductController {

    static getProducts (req, res, next) {
        Product
            .findAll()
            .then( products => {
                res.status(200).json(products)
            })
            .catch( err => {
                next(err)
            })
    } 

    static addProduct (req, res, next) {
        if (!req.decodedData){
            throw {
                name: 'unauthorized access'
            }
        } else {
            const { serviceDecoded, decoded } = req.decodedData
            const { name, image_url, price, stock } = decoded.payload
            const UserId = serviceDecoded.id
            Product
                .create({
                    name, 
                    image_url, 
                    price, 
                    stock, 
                    UserId
                })
                .then( product => {
                    res.status(201).json(product)
                })
                .catch( err => {
                    next(err)
                })
        }
    }

    static updateProduct (req, res, next) {
        const { name, image_url, price, stock } = req.body
        const id = req.params.productId
        Product
            .update({
                name,
                image_url,
                price,
                stock
            }, {
                where: { id }
            })
            .then( product => {
                res.status(200).json('product updated')
            })
            .catch( err => {
                next(err)
            })
    }

    static deleteProduct (req, res, next) {
        const id = req.params.productId
        Product
            .destroy({
                where: { id }
            })
            .then( product => {
                res.status(200).json('product deleted')
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ProductController