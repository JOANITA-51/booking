const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
});

const preferenceSchema = new Schema({
    bookingDate:{type:String, required:true},
    bookingTime:{type:String, required:true},
    schoolName:{type:String, required:true},
    schoolLocation:{type:String, required:true},
    schoolFee:{type:String, required:true},
    user:{type:Schema.Types.ObjectId, ref:'users'} //referencing the id from the users collection

});

//Referencing the schemas
const Users = mongoose.model('users', userSchema, 'users');
const Preferences = mongoose.model('preferences',preferenceSchema,'preferences');
const mySchemas = {'Users':Users, 'Preferences':Preferences} //exporting multiple schemas

module.exports = mySchemas;


