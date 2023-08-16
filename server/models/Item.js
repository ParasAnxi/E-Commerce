import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        min:1,
        max:10000,
    },
    discount:{
        type:Number,
        min:1,
        max:99,
        default:0,
    },
    discountPrice:{
        type:Number,
        default:0
    },
    rating:{
        type:Number,
        min:0,
        max:5,
        default:0,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    image:{
        type:[String]
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
}, { timestamps: true });

const Item = mongoose.model("Item", itemSchema);
export default Item;