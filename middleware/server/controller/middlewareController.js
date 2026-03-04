import middlewareModel from "../model/middlewareModel.js";
import bcrypt from "bcrypt"

export const createData = async(req,res)=>{

//middlewareModel

console.log("controller req",req.body);

try {

const {name,email,password} = req.body

const checkEmail = await middlewareModel.findOne({email})

    if(checkEmail){

        return res.status(400).json({msg:"already the email is exists"})
    }

    const saltRound = 10
    const hash = await bcrypt.hash(password,saltRound)

    const createpass = await middlewareModel.create({
        name, email, password:hash
    })

    res.status(200).json({msg:"data saved successfully"})
} catch (error) {
    

    console.log('error',error);
    
}
   
}