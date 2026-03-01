import bcrypt from "bcrypt"
import hashModel from "../model/hashModel.js"
import jwt from "jsonwebtoken"


export const add = async (req, res) => {


    try {

        const { name, email, password } = req.body


        console.log(req.body)

        const checkEmail = await hashModel.findOne({ email })

        if (checkEmail) {

            return res.status(400).json({ msg: "Already in data" })
        }

        const saltRound = 10

        const hashPassword = await bcrypt.hash(password, saltRound)

        const addData = await hashModel.create({ name, email, password: hashPassword })

        res.status(200).json({ msg: "Data added successfully", addData })

    } catch (error) {


        console.log('error occurs..', error)


        res.status(500).json({ msg: "error occurs" })


    }


}

// 
// const addData = await hashModel.create({ name, email, password: hashPassword })


export const login = async (req, res) => {

    try {

        const { name, email, password } = req.body

        const checkEmail = await hashModel.findOne({ email })

        if (!checkEmail) {

            return res.status(400).json({ msg: "invalid mail id " })
        }

        const checkPassword = await bcrypt.compare(password, checkEmail.password)

        if (!checkPassword) {

            return res.status(400).json({ msg: "incorrect password" })
        }

        // token generate:

        const jwt_token = jwt.sign(

            {id:checkEmail._id},process.env.JWT_SECRET_KEY,{ expiresIn: "1h" }
        )

        //return token:
        res.status(200).json({ msg: "Loginned Successfully",token:jwt_token})

    } catch (error) {

        console.log('error occurs..', error)

        res.status(500).json({ msg: "error occurs" })

    }
}
