const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const UserSchema = mongoose.Schema({
    createdAt: {type: Date, default:Date.now() },
    firstName:{
        type:String,
        required: [true, "Please add a firstName"]
    },
    lastName:{
        type:String,
        required: [true, "Please add a lastName"]
    },
    email:{
        type:String,
        required: [true, "Please add an email"]
    },
    password:{
        type:String,
        required: [true, "Please add a password"]
    },

});

// userSchema.statics.getUser = async (email) =>{
//     const User = await user.findOne({email:email});
//     return{
//         id:User._id,
//         createdAt:User.createdAt,
//         email:User.email
//     }
// }
UserSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
    next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

//to match passwords
UserSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}
//to compare passwords
UserSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

//Generate and hash password token
UserSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString('hex');

    //Hash token and set to resetPasswordToken field
    this.resetPasswordToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    this.resetPasswordExpire =  Date.now() + 10 *60*1000;
    
    return resetToken;
}

const user = mongoose.model('User', UserSchema)
module.exports= user;