const mongoose = require('mongoose');
const crypto = require('crypto');

const preferenceSchema = mongoose.Schema({
    createdAt: {type: Date, default:Date.now() },
    user:{type:String},
    bookingDate:{type:Date, required:true},
    bookingTime:{type:String, required:true},
    schoolName:{type:String, required:true},
    schoolLocation:{type:String, required:true},
    schoolFee:{type:String},
   /* userId:{
        type:String,
        default: crypto.randomBytes(12).toString('hex'),
        unique: true
    } */

});
// const counterSchema = new Schema({
//     _id: String,
//     sequence_value:Number
// })

preferenceSchema.statics.getPreferences = (user = null) => {
    return user !== null? preference.find({user:user}):preference.find({})
}

preferenceSchema.statics.getPreference = (preferenceId)=>{
    return preference.findOne({ _id: preferenceId})
}

preferenceSchema.statics.update = (data)=>{
    return preference.findOneAndUpdate({id:data.id},data)
}

preferenceSchema.statics.delete = (preferenceId) => {
    return preference.findOneAndDelete({ _id:preferenceId})
}

const preference = mongoose.model('Preference', preferenceSchema)

module.exports = preference