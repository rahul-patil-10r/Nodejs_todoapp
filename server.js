import express from "express" 
import {database} from "./data/database.js"
import{app} from "./app.js"

database();

app.listen(3000,()=>{
    console.log("server is connected");
});



