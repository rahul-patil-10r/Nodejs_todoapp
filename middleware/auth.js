import jwt from "jsonwebtoken";
import { userscm } from "../models/users.js";
export const authen=async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
    return res.status(404).json({
        success:false,
        message:"LOGIN FIRST",
    })
    }

    const decode=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await userscm.findById(decode._id);
    next();
}