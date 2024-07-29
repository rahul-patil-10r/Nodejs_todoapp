import express from "express"
import rahul from "./routes/user.js";
import cookieParser from "cookie-parser";
import taskroute from "./routes/taskroute.js"
import { errormiddleware } from "./middleware/errormiddleware.js";
import cors from "cors"

export const app=express();
app.use(express.json());
app.use(cookieParser())
app.use('/api/v1/users',rahul)
app.use('/api/v1/task',taskroute)
app.use(errormiddleware);

