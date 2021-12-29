/*const express = require('express');
const router = express.Router();
const Schema = require ('../models/Schema'); */

/* Adding a user with code
router.get('/addUser', async(req,res)=>{
    const user = {firstName:'Anita', lastName:'Reyes', email:'nakityoanita@gmail.com', password:'12345'};
    //insert the user
    const newUser = new Schema.Users(user);

    try{
        await newUser.save( async(err, newUserResult) =>{
            console.log('New user is created');
            res.end('New user is created:')
        });
    } catch(error){
        console.log(error)
        res.end('User not added');
    }
}); 

//Retrieving from the preference collection
router.get('/preferences', async(req,res)=>{
    const preferences = Schema.Preferences;

    //const userPreferences = await preferences.find({}, (err, preferenceData)=>{
    const userPreferences = await preferences.find({}).populated("user").exec((err, preferenceData)=>{
        if (err) throw err;
        if(preferenceData) {
            res.end(JSON.stringify(preferenceData));
        }else {
            res.end();
        }
    })
})

//adding to the preference collection

router.post('/addPreference', async(req,res)=>{
    const userPreference1 = req.body.bookingDate;
    const userPreference2 = req.body.bookingTime;
    const userPreference3 = req.body.schoolName;
    const userPreference4 = req.body.schoolLocation;
    const userPreference5 = req.body.schoolFee;
    const user = Schema.Users;
    const userId = await user.findOne({firstName:'Anita'}).exec();

    const newPrefence = new Schema.Preferences({
        bookingDate: 11/12/2021,
        user: userId._id
    });

    try{
        await newPrefence.save((err, newPrefence)=>{
            if(err) res.end ('err serving');
            res.redirect('/book-now');
            res.end();
        });
    }catch(err){
        console.log(err);
        res.redirect('./book-now');
        res.end();
    }
}) */