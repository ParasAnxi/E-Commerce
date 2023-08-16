import Category from "../models/Category.js";

export const fetchCategories = async (req, res) => {
  try {
    const category = await Category.find({}).exec();
    res.status(201).json(category);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const createCategory = async(req, res) => {
  try {
    const { label, value } = req.body;
    const newcategory = new Category({
      label,
      value,
    });
    const savedcategory = await newcategory.save();
    res.status(201).json(savedcategory);
  } catch (err) {
    res.status(400).json(err);
  }
};
