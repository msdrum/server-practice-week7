import express from "express";
import TaskModel from "../model/task.model.js";
import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";

const userRoute = express.Router();

//SIGN-UP ROUTE
