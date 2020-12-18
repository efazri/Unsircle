const router = require('express').Router()
const AppController = require('../controller/index')


router.post('/unsircle2020/register', AppController.register)
router.post('/unsircle2020/login', AppController.login)
router.get('/unsircle2020/products', AppController.getProducts)
router.post('/unsircle2020/products', AppController.addProduct)
router.put('/unsircle2020/products/:productId', AppController.updateProduct)
router.delete('/unsircle2020/products/:productId', AppController.deleteProduct)

module.exports = router