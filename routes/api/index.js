const express = require('express');
const router = express.Router();

const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const productTagRoutes = require('./product-tag-routes');

const { 
    getTags, 
    getCategories, 
    getProductTags, 
    getProducts, 
    getCategoriesById 
} = require('../../helper');

// Our /api call gets redirected here, and this is where our main routes are
// Because we tell our router to re-direct everyone who types in /api to this file, we need to define our routes HERE, for them to actually take effect
router.get('/api', async ( req, res ) => res.json({
    status: 200,
    name: 'Index API Call',
    date: new Date().toLocaleString(),
    response: 'It worked out for ya this time bud!',
}));

router.use('/api/categories', categoryRoutes, async ( req, res ) => getCategories(req, res));

router.use('/api/categories/:id', categoryRoutes, async ( req, res ) => getCategoriesById(req, res));

router.use('/api/products', productRoutes, async ( req, res) => getProducts(req, res));

router.use('/api/tags', tagRoutes, async ( req, res ) => getTags(req, res));

router.use('/api/product-tags', productTagRoutes, async ( req, res ) => getProductTags(req, res));

module.exports = router;
