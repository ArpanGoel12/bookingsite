import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";


export const register = async (req, res, next) => {
  try {
    //bcrypt hashing
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
      ...req.body,
      password: hash,
    });

    await user.save();
    
     //GENERATING JWT TOKEN 
     const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    

    const { password, isAdmin, ...otherDetails } = user._doc;

    //STORING JWT TOKEN IN COOKIE
    res.cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
   
    //verifying whether password matches bcrypt hash
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

     
  










    
  } catch(err){
    console.log(err);
  }
};