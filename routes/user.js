import express from "express";
import { register,login,me,logout} from "../controllers/user.js";
import { authen } from "../middleware/auth.js";
const router=express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/me",authen,me);
router.get("/logout",logout);
export default router;