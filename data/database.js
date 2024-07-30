import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const mongoURI = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME;
export const database = () => {``
  mongoose.connect(mongoURI, {
    dbName: dbName,
  
  })
  .then(() => console.log("database connected"));
};
