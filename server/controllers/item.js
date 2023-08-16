import Item from "../models/Item.js";

export const createItem = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      discount,
      thumbnail,
      image,
      brand,
      category,
    } = req.body;
    const discountPrice = Math.round(price*(1-discount/100));

    const newItem = new Item({
      title,
      description,
      price,
      discount,
      discountPrice,
      thumbnail,
      image,
      brand,
      category,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const fetchAllItems = async(req,res)=>{
    try{
        const item = await Item.find();
        res.status(200).json(item);
    }catch(e){
        res.status(400).json({ message:e.message });
    }
};

export const fetchItemById = async(req,res)=>{
    try {
      const { id } = req.params;
      const item = await Item.findById(id);
      res.status(201).json(item);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
};
