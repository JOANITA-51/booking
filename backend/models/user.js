const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    createdAt: {type: Date, default:Date.now() },
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
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