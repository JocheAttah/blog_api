const router = require("express").Router();
const Category = require("../models/Category");

//CREATE CATEGORY
router.post("/", async (req, res) => {
  const newCategory = new Category(req.body);
  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// GET ALL CATEGORIES
router.get("/", async (req, res) => {
  try {
    const allCategories = await Category.find();
    res.status(200).json(allCategories);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
