const router = express.Router();
const express = require('express');
const { getTags } = require('../../helper');
const { Tag, ProductTag, Product } = require(`../../models`);

router.get(`/tags`, async ( req, res ) => getTags(req, res));

router.get(`/tags/:id`, async ( req, res ) => {
    try{
        const tagID = req.params.id;
        const tag = await Tag.findOne({ 
            where: { id: tagID }, 
            include: [{model: Product, through: ProductTag }], 
        });
        if (tag) {
            res.json(tag);
        } else {
            res.status(404).json({ error: `tag not found` });
        }
    } catch (error) {
        console.log(`error getting tag by ID`. error);
        res.status(500).json({ error: `server error` });
    }
});

router.post(`/tags`, async ( req, res ) => {
    try{
        const newTag = await Tag.create(  req.body );
        res.status(201).json(newTag);
    } catch (error) {
        console.log(`error creating new tag`, error);
        res.status(400).json({ error: `invalid data input` });
    }
});

router.delete(`/tags/:id`, async (req, res) => {
    try {
      const tagID = req.params.id;
      const deletedRows = await Tag.destroy({
        where: { id: tagID },
      });
      if (deletedRows > 0) {
        res.status(200).json({ message: 'Your Tag was deleted' });
      } else {
        res.status(404).json({ error: 'No tag found' });
      }
    } catch (error) {
      console.log('Error deleting tag by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

module.exports = router;