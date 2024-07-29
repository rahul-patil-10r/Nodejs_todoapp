import { userscm } from "../models/users.js";
import {taskscm} from "../models/task.js";
import errohandler from "../middleware/errormiddleware.js";
export const newtask=async(req,res,next)=>{
    const {title,description}=req.body;
    await taskscm.create({
        title,
        description,
        user:req.user,
    })
    res.status(201).json({
        success:true,
        message:"task added successfully",
    })
}

export const mytask=async(req,res,next)=>{
    const taskid=req.user._id;
   const aa=await taskscm.find({user:taskid})


    res.status(201).json({
    success:true,
    message :"hii this is your task",
    aa,
    
    })



}

export const updatetask = async (req, res,next) => {
    try {
      const taskId = req.params.id;
      const task = await taskscm.findById(taskId);
  
      if (!task) {
        return next(new errohandler("invalid id",404))
      }
  
      task.isCompleted = !task.isCompleted;
      await task.save();
  
      res.status(200).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };

  export const deletetask = async (req, res,next) => {
    try {
      const taskId = req.params.id;
      const task = await taskscm.findById(taskId);
  
      if (!task) {
        return next(new errohandler("Invalid id",404))
      }
  
      await task.deleteOne();
  
      res.status(200).json({
        success: true,
        message: "Task deleted successfully"
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  };
  