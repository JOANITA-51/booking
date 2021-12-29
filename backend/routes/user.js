const express = require('express')
const modelUser = require('../models/user')
const routerUser = express.Router()

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
module.exports = routerUser