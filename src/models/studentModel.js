import mongoose from "mongoose";
const studentSchema = mongoose.Schema({
    "id":{type:Number, required:true, unique:true},
    "name":{type:String,required:true},
    "email":{type:String, required:true},
    "password":{type:String, required:true},
    "course":{type:String,required:true},
    "branch":{type:String,required:true},
    "marks":{type:Number,required:true}
})

export const studentModel = mongoose.model('student',studentSchema);