import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  picturePath: {
    type: String,
    default: "",
  },
  address:{
    type:String
  },
  role:{
    type:String,
    required:true,
    default:"user"
  },
  refreshToken:{
    type:String,
  }
},{timestamps: true});

const User = mongoose.model("User",userSchema);
export default User;