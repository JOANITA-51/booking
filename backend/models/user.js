const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    createdAt: {type: Date, default:Date.now() },
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
});

userSchema.statics.getUser = async (email) =>{
    const User = await user.findOne({email:email});
    return{
        id:User._id,
        createdAt:User.createdAt,
        email:User.email
    }
}
const user = mongoose.model('User', userSchema)
module.exports= user;