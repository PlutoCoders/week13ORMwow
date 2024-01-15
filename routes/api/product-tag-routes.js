const express = require(`express`);
const router = express.Router();
const { getProductTags } = require("../../helper");
const { ProductTag } = require("../../models");

router.get(`/product-tags`, async (req, res) => getProductTags(req, res));

// Need Post route

// Need Put route

// Need Delete route
