const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
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
const user = mongoose.model('User', userSchema)
module.exports= user;