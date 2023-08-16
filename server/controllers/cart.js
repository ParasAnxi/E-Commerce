import Cart from "../models/Cart.js";
import User from "../models/User.js";
import Item from "../models/Item.js";

export const fetchCartByUser = async(req, res)=>{
  try{
    const { id } = req.user;
    const cartItems = await Cart.find({user: id });
    res.status(200).json(cartItems);
  }catch (e) {
    res.status(400).json({ message: e.message });
  }
}
export const addToCart = async (req, res) => {
  try {
    const { userId, itemId } = req.params;

    const user = await User.findById(userId);
    const item = await Item.findById(itemId);

    const newCartItem = new Cart({
      item: item,
      user: user
    });

    const savedCart = await newCartItem.save();
    res.status(201).json(savedCart);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const deleteFromCart = async(req,res)=>{
  try{
    const { _id } = req.params;
    const cartItem = await Cart.findByIdAndDelete(_id);
    res.status(201).json(cartItem);
  }catch(e){
    res.status(401).json({ error: e.message });
  }
};

