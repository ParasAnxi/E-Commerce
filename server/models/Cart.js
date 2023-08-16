import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      min: 1,
      max: 5,
      default: 1,
    },
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;