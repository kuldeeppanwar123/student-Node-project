import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "id":{type:Number, required:true, unique:true},
    "name":{type:String,required:true},
    "email":{type:String, required:true},
    "password":{type:String, required:true}
})

export const userModel = mongoose.model('user' , userSchema);