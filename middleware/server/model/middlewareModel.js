import mongoose from "mongoose";

const middlewareSchema = new mongoose.Schema({
    name:String, email:String, password:String
},{timestamps:true})



const middlewareModel = mongoose.model("middlewareData",middlewareSchema)

export default middlewareModel