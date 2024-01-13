const Tag = require('./tag');
const Product = require('./product');
const Category = require('./category');
const ProductTag = require('./productTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
});

module.exports = { Category, Product, Tag, ProductTag };