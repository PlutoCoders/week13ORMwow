const { Product, Category } = require('../models');

const productData = [
    { product_name: 'Crimson Gladiator', 
    product_price: 9.99, 
    stock: 25, 
    category_id: 1},

    { product_name: 'How to Rule the World - For Dummies', 
    product_price: 15,
    stock: 10, 
    category_id: 2},

    { product_name: 'Wolf-Grey Jordan 5', 
    product_price: 349.99,
    stock: 3, 
    category_id: 3},
];
// ('Crimson Gladiator', 9.99, 25, 1),
// ('How to Rule the World - For Dummies', 15, 10, 2),
// ('Wolf-Grey Jordan 5', 349.99, 3, 3);

Product.bulkCreate(productData, {
    include: [{ model: Category }],
});

module.exports = productData;