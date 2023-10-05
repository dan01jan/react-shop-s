
const express = require('express');
const router = express.Router();

const {newProduct, getProducts, getSingleProduct, updateProduct,deleteProduct} = require('../controllers/productController');


router.post('/product/new', newProduct);
router.get('/products', getProducts);
router.get('/product/:id', getSingleProduct);
router.route('/admin/product/:id').put(updateProduct).delete(deleteProduct);


module.exports = router;