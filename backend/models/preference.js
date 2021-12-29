const mongoose = require('mongoose');

const preferenceSchema = mongoose.Schema({
    createdAt: {type: Date, default:Date.now() },
    bookingDate:{type:String, required:true},
    bookingTime:{type:String, required:true},
    schoolName:{type:String, required:true},
    schoolLocation:{type:String, required:true},
    schoolFee:{type:String},
    user:{type:String} //referencing the id from the users collection

});

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