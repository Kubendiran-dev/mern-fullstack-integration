// export const responseController = (req, res) => {

//     // const { name } = req.body

//     console.log(req.body);
    

//     if (name === "kubea") {
//         res.status(200).send("Authorized user")
//     }


    
//     else {
//         res.status(404).send("Unauthorized access")
//     }

// }



// export const resJson = (req, res) => {

//     const { userid } = req.params

//     const data = [{
//         id: 1,
//         name: 'react',
//         subject: "node"

//     }, {
//         id: 2,
//         name: 'Node',
//         subject: "Js"
//     }]


//     if (userid == 1) {
//         console.log(data);
//         res.status(200).json({
//             success: true,
//             message: "Data Fetched",
//             userdata: data
//         })
//     } else {
//         res.status(404).json({
//             msg: "No I am Not send the datas"
//         })
//     }
// }



// //http://localhost:3000/api/res/create/

// //http://localhost:3000/api/res/jsondata/1



export const responseController = (req, res) => {

    const { name } = req.body;   

    console.log(req.body);
    
    if (name === "kubea") {
        res.status(200).json({msg:"Authorized user"})
    } else {
        return res.status(404).json({msg:"Unauthorized user"})
    }
}