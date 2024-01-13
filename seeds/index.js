const seedTags = require(`./tag-seeds`);
const seedProducts = require(`./product-seeds`);
const sequelize = require(`../config/connection`);
const seedCategories = require(`./category-seeds`);
const seedProductTags = require(`./product-tag-seeds`);

const seedDataBase = async () => {
    await sequelize.sync({ force: true });
    await seedCategories();
    await seedProducts();
    await seedProductTags();
    await seedTags();
    // Force: TRUE
};

seedDataBase();
