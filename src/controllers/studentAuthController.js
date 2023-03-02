import { StatusCodes } from 'http-status-codes';
import { userModel } from '../models/usersModel.js';

export async function showAllStudents(req,res){
    try {
        const user =await userModel.find();
        if (user.length>0) {
            res.status(StatusCodes.OK).json(user);
        }
        else
             res.status(StatusCodes.NOT_FOUND).json({"status":"not found!"});
    } catch (error) {
        console.log(error);
    }
}

export async function loginStudent(req,res){
    try {
        const user =await userModel.find({$and:[{"email":req.body.email},{"password":req.body.password}]})
        if (user.length>0) {
            res.status(StatusCodes.OK).json(user);
        }
        else
             res.status(StatusCodes.NOT_FOUND).json({"status":"not found!"});
    } catch (error) {
        console.log(error);
    }
}


export async function signupStudent(req,res){

    const user  =  new userModel(req.body);
    const u = await user.save();
    res.status(StatusCodes.CREATED).json(u);
}