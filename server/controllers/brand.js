import Brand from "../models/Brand.js";

export const fetchBrands = async(req,res)=>{
    try {
        const brands = await Brand.find({}).exec();
        res.status(201).json(brands);
    } catch (e) {
      res.status(400).json({ message: e.message });
    };
};

export const createBrand = async(req, res)=>{
    try {
    const { label , value } = req.body;
    const newBrand = new Brand({
        label,
        value
    })
    const savedBrand = await newBrand.save();
    res.status(201).json(savedBrand);
  } catch (err) {
    res.status(400).json(err);
  }
};