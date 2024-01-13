const { Tag, ProductTag, Product } = require(`../models`);

const tagData = [
    { tag_name: 'Medieval'},
    { tag_name: 'Self-Help'},
    { tag_name: 'Fashion'},
];
// ('Medieval'),
// ('Self-Help'),
// ('Fashion');

const productTagData = [
    { product_id: 1, tag_id: 1 },
    { product_id: 2, tag_id: 2 },
    { product_id: 3, tag_id: 3 },
  ];

Tag.bulkCreate(tagData);
ProductTag.bulkCreate(productTagData, {
    include: [{ model: Product }]
});

module.exports = tagData;