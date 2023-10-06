
const express = require('express');
const router = express.Router();

const { newProduct, getProducts, getSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { isAuthenticatedUser } = require('../middlewares/auth');

router.post('/product/new',isAuthenticatedUser, newProduct);
router.get('/products', getProducts);
router.get('/product/:id', getSingleProduct);
router.route('/admin/product/:id',isAuthenticatedUser).put(updateProduct).delete(deleteProduct);


module.exports = router;