import express from "express"
import { authen } from "../middleware/auth.js";
import { newtask,mytask,updatetask,deletetask } from "../controllers/task.js";

const router=express.Router();

router.post("/new",authen,newtask)
router.post("/my",authen,mytask);

router.route("/:id").put(authen,updatetask).delete(authen,deletetask);


export default router;
