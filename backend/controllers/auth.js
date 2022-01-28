//For verification
const user = require('../models/user') //Require the user model inside file

exports.register = async (req, res, next) => {
    const {firstName, lastName, email, password} = req.body;

    //create User
    const user = await User.create({
        firstName,
        lastName,
        email,
        password
    })
    res.status(200).json({success:true, token, id})
}

const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/ErrorResponse');
const getSignedJwtToken = id =>{
    return jwt.sign({id}, `${process.env.JWT_KEY}`,{
        expiresIn:"1h"
    })
}
const token = getSignedJwtToken(user.id);
// res.status(200).json({success:true, token})

exports.login = async(req,res,next) => {
    const {email, password} = req.body;
    //Validate email  & password
    if(!email || password){
       return next (new ErrorResponse('Please provide an email and password', 400));

    }

    //Check for user
    const user = await User.findOne({email}).select('+password');
    if(!user){
        return next(new ErrorResponse('invalid credentials', 401))
    }

    //Check if password matches
    const isMatch = await user.matchPassword(password);
    if(!isMatch){
        return next(new ErrorResponse('Invalid credentials', 401))
    }

    const token = user.getSignedJwtToken();
    const id = user.getId();
    res.status(200).json({success:true, token, id})
}

exports.logout = async(req, res, next) =>{
    res.cookies('token','none',{
        httpOnly:true,
    });
    res.status(200).json({
        success:true,
        data:{}
    })
}

exports.getMe = async (req, res, next)=>{
    //user is already available is req due to the protect middleware
    const user = req.user;

    res.status(200).json({
        success : true,
        data: user,
    })
}