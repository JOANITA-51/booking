const express = require('express')
const modelUser = require('../models/user')
const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
    } = require ('../controllers/users')
const routerUser = express.Router()

routerUser
    .route('/')
    .get(getUser)
    .post(createUser)

    routerUser
    .route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

routerUser.get('/users/email/:email', async(req,res)=>{
    const {email} = req.params
    try {
        const user = await modelUser.getUser(email);
        if(user !== null)
            return res.json({
                'result':'success',
                'user':user
            });
        return res.json({
            'result':'failure',
            'message':`${email} not found`
        })
    } catch (error) {
        console.log(error);
        return res.json({
            'result':'failure',
            'message':`user : ${email} not found`
        })
    }
})

// routerUser.get("/",(req, res) =>{
//     res.status(200).json({success:true, msg:"Show all users"});
// });
// routerUser.get("/:id",(req, res) =>{
//     res.status(200).json({success:true, msg:`Show user ${req.param.id}`});
// });
// routerUser.post("/",(req, res) =>{
//     res.status(200).json({success:true, msg:"Create new user"});
// });
// routerUser.put("/:id",(req, res) =>{
//     res.status(200).json({success:true, msg:`Update user ${req.param.id}`});
// });
// routerUser.delete("/:id",(req, res) =>{
//     res.status(200).json({success:true, msg:`delete user ${req.param.id}`});
// });
module.exports = routerUser