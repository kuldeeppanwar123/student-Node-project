import { StatusCodes } from "http-status-codes";
import { studentModel } from "../models/studentModel.js";

export async function insertStudent(req,res){
    try {
        const student = new studentModel(req.body);
        const s = await student.save();
        res.status(StatusCodes.CREATED).json(s);
    } catch (error) {
        console.log(error.message);
    }
}


export async function getStudent(req,res){
    try {
        const student =  await studentModel.find();
        res.status(StatusCodes.OK).json(student);
    } catch (error) {
        console.log(error.message);
    }
}

export async function deleteStudent(req,res){
    try {
        const student =  await studentModel.findOne({"id":req.params.id});
        await student.delete();
        res.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        console.log(error.message);
    }
}


export async function updateStudent(req,res){
    try {
        let student =  await studentModel.findOneAndUpdate({"id":req.params.id},req.body);
        res.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        console.log(error.message);
    }
}
