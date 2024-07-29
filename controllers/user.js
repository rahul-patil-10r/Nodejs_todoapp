import { userscm } from "../models/users.js";
import { taskscm } from "../models/task.js";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { sendCookie } from "../utils/feature.js";
import errohandler from "../middleware/errormiddleware.js";
dotenv.config();

export const register = async (req, res, next) => {
  try {
    const { user, email, password } = req.body;
    console.log(user);
    const userd = await userscm.findOne({ email });
    if (userd) {
      return next(new errohandler("user already exist", 400));
    }

    const hashedpass = await bcrypt.hash(password, 10);
    const jwtuser = await userscm.create({ user, email, password: hashedpass });

    sendCookie(jwtuser, res, "registration successful", 201);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await userscm.findOne({ email: email }).select("+password");
    if (!user) {
      return next(new errohandler("error does not exist", 400));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new errohandler("password does not match", 400));
    }

    sendCookie(user, res, `welcome back, ${user.user}`, 201);
    console.log("cookie send");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const me = async (req, res, next) => {
  try {
    res.status(201).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const logout = (req, res, next) => {
  try {
    res.status(201).cookie("token", "", {
      expires: new Date(Date.now())
    }).json({
      success: true,
      user: req.user,
      message: "logout successfully"
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
