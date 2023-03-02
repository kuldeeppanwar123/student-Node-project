import mongoose from "mongoose";

export async function configDB(){
    try {
        const atlasURL = "mongodb+srv://Kuldeep:Kul12345@cluster0.4vt7kar.mongodb.net/?retryWrites=true&w=majority";
       await mongoose.connect(atlasURL);
       console.log("db connected");
    } catch (error) {
        console.log(error.message);
    }
}