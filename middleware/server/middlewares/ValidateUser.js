export const ValidateRegister = (req, res, next) => {


    // console.log("middleware req",req);

    try {

        const { name, email, password } = req.body

        if (!name || !email || !password) {

            return res.status(400).json({ msg: "please enter the data" })
        }

        if (password.length < 8) {

            return res.status(400).json({ msg: "please enter the mini characters" })

        }

next()
    

} catch (error) {

console.log("error",error);
return res.status(400).json({ msg: "something error" })


}

}



