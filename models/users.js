import mongoose from "mongoose";

const userschema= new mongoose.Schema({
    user:{
        type:String,
        required:true,
    },
    email:{
        type: String,
        unique:true,
        required:true,
    },
    password:{
        type: String,
        select:false,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },

})
export const userscm=mongoose.model("userdata",userschema);