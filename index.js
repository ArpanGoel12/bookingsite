 import express from "express";
 import path from "path";
 import bcrypt from "bcryptjs";
import mongoose from "mongoose";
 import dotenv from "dotenv";
 import AuthRoute from "./Routes/Auth.js";
import HotelRoute from "./Routes/Hotels.js";
import UsersRoute from "./Routes/Users.js";
import RoomsRoute from "./Routes/Rooms.js";
import cookieParser from "cookie-parser";
 
dotenv.config();

const app= express();
app.use(express.json());
app.use(cookieParser());


const connectnetwork=async()=>{
    try{
        
        mongoose.set("strictQuery", false);
await mongoose.connect("mongodb+srv://arpan:Awesome12@cluster0.zcaikrp.mongodb.net/?retryWrites=true&w=majority",);
console.log("connected");
}
    catch(error){
console.log(error);
    }
};
mongoose.connection.on("disconnected",()=>{
    console.log("discconected");
});

app.use("/hotels",HotelRoute);
app.use("/auth",AuthRoute);
app.use("/rooms",RoomsRoute);
 app.use("/users",UsersRoute);
 app.get("/",(req,res)=>{
    res.send("hello");
 });





app.listen(process.env.PORT||4000,()=>{
    connectnetwork();
    console.log("connection sucessful");
});