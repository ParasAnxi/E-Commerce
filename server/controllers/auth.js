import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  try {
    const { name, email, password, picturePath, address, role } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password ,salt);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        picturePath,
        address,
        role
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async(req,res)=>{
  try{
    const{email, password} = req.body;
    const user = await User.findOne({ email: email });
    if(!user) return res.status(400).json({ mgs: "User does not exist!!!" });

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(400).json({ msg: "Invaild credentials." });

    const JWT_SECRET = process.env.JWT_SECRET;
    const token = jwt.sign({ id: user._id },JWT_SECRET);

    const refresh = process.env.REFRESH_TOKEN;

    const refreshToken = jwt.sign({ id: user._id },refresh,{expiresIn: '1d'});

    user.refreshToken = refreshToken;

    res.cookie("jwt", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    delete user.password;
    res.status(200).json({ token, user });
  }catch(err){
    res.status(500).json({ error:err.message });
  }
};

export const logout = async(req,res)=>{
  const cookies = req.cookies;
  if(!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt;
  const user = await User.findOne({ refreshToken }).exec();
  if(!user){
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204);
  }
  user.refreshToken = '';
  res.clearCookie('jwt',{
    httpOnly: true, sameSite: 'None', secure: true});
  res.sendStatus(204);
};