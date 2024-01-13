//We want to seed data in our database by associating products with tags using the ProductTag model and bulk insertion. 
// The exported productTagData array so that we can use it elsewhere.

const { ProductTag, Product, Tag } = require(`../models`);

const productTagData = [
    {product_id: 1, tag_id: 1, },
    {product_id: 2, tag_id: 2, },
    {product_id: 3, tag_id: 3, },
];

ProductTag.bulkCreate(productTagData, {
    include: [{ model: Product }],
    include: [{ model: Tag }],
});

module.exports = productTagData;