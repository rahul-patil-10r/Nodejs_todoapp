import mongoose from "mongoose";
export const database = () => {
  mongoose.connect("mongodb://localhost:27017", {
    dbName: "backendapp",
  })
  .then(() => console.log("database connected"));
};
