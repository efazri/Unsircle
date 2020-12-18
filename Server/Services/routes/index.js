const router = require('express').Router()
const authenticationUser = require ('../middleware/authenticateUser')
const authenticationItem = require ('../middleware/authenticationItem')
const authorization = require ('../middleware/authorization')
const UserController = require ('../controller/usercontroller')
const ProductController = require ('../controller/productController')

router.post('/register', authenticationUser, UserController.register)
router.post('/login', authenticationUser, UserController.login)
router.get('/products', authenticationUser, ProductController.getProducts)
router.post('/products', authenticationItem, ProductController.addProduct)
router.put('/products/:productId', authenticationItem, authorization, ProductController.updateProduct)
router.delete('/products/:productId', authenticationItem, authorization, ProductController.deleteProduct)

module.exports = router