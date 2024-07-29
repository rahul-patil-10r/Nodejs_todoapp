import  jwt  from "jsonwebtoken";

export const sendCookie=(jwtuser,res,message,statuscode=201)=>{
const token=jwt.sign({_id:jwtuser._id},process.env.JWT_SECRET);

res.status(statuscode).cookie("token",token,{
    httpOnly:true,
    maxAge:15*60*1000,
}).json({
    succe:true,
    message,
})
}