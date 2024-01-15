const express = require(`express`);
const router = express.Router();
const { Category, Product } = require(`../../models`);
const { getCategories, getCategoriesById } = require("../../helper");

router.get(`/categories`, async ( req, res ) => getCategories(req, res));
router.get(`/categories/:id`, async ( req, res ) => getCategoriesById(req, res));

router.post(`/categories`, async ( req, res ) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    } catch ( error ) {
        console.log(`Error creating new Category:`, error);
        res.status(400).json({ error: `data is not valid` });
    }
});

router.delete(`/categories/:id`, async (req, res) => {
  try {
    const categoryID = req.params.id;

    const deletedRows = await Category.destroy({
      where: { category_id: categoryID },
    });

    if (deletedRows > 0) {
      res.status(200).json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    console.log(`Error deleting category:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
