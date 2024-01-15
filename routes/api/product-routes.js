// The Tree of Code!
const express = require('express');
const router = express.Router();
const { getProducts } = require('../../helper');
const { Product, Category } = require(`../../models`);

router.get(`/products`, async ( req, res ) => getProducts(req, res));

router.get(`/products/:id`, async ( req, res ) => {
    try{
        const productID = req.params.id;
        const product = await Product.findOne({
            where: { id: productID }, include: [Category],
        });

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: `Product wasnt found` });
        }
    } catch (error) {
        console.log(`Error getting product by ID:`, error);
        res.status(500).json({ error: `server error` });
    }
});

router.post(`/products`, async ( req, res ) => {
    try{
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(`error creating new product`, error);
        res.status(400).json({ error: `invalid data input` });
    }
});

router.put(`/products/:id`, async ( req, res ) => {
    try{
        const productID = req.params.id;
        const updatedProduct = await Product.update(req.body, {
            where: { id: productID },
        });
        res.status(200).json( updatedProduct );
    } catch (error) {
        console.log(`error updating product via id:`, error);
        res.status(400).json({ error: `invalid data provided or product does not exist` });
    }
});

router.delete(`/products/:id`, async ( req, res ) => {
    try{
        const productID = req.params.id;
        const deletedProduct = await Product.destroy({
            where: { id: productID },
        });
        res.status(200).json( deletedProduct );
    } catch (error) {
        console.log(`error deleting product by its ID:`, error);
        res.status(400).json({ error: `invalid request / product not found` });
    }
});

module.exports = router;