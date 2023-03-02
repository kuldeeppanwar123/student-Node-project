import { StatusCodes } from "http-status-codes";
import { userModel } from "../models/usersModel.js";

export async function emailValidation(req,res,next){
    const user =await userModel.find({"email":req.body.email});
    if(user.length>0)
        next();
    else
        res.status(StatusCodes.UNAUTHORIZED).send("wrong email id!");
}

export async function passwordValidation(req,res,next){
    const user =await userModel.find({"password":req.body.password});
    if(user.length>0)
        next();
    else
        res.status(StatusCodes.UNAUTHORIZED).send("wrong password!");
}


export async function validation(req,res,next){
    const user =await userModel.findOne({"email":req.body.email});
    if(user)
     res.status(StatusCodes.CONFLICT).send("already exist");
    else
     next();
}