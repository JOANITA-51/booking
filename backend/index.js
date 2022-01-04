const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');
const Preference = require('./models/preference')
const routerUser = require('./routes/user');
const preference = require('./models/preference');
const routerPreference = require('./routes/preference')

require('dotenv').config();

//DB connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
.then(()=>{
    console.log('Database connected')
})
.catch((error)=>{
    console.log(error)
} )

const PORT = process.env.PORT||4000;
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/', async(req, res)=>{
    // res.send ('Welcome!!')
    try{
        const users = await User.find();
        res.json(users)
    }catch{
        res.json('opps!')
    }
});


app.use('/users', routerUser);
app.use('/preference',routerPreference);

app.post('/addPreference', async(req,res)=>{
    const {bookingDate, bookingTime, schoolName, schoolLocation, schoolFee } = req.body
    try{
        const preference = new Preference({bookingDate, bookingTime, schoolName, schoolLocation, schoolFee});
        await preference.save()
        console.log(req.body)
        if(preference !== null){
            // res.json({
            //     'result' : 'success',
            //     'message':'successful',
            //     'preference':preference
            // })
            res.end(JSON.stringify(preference))
        }
    }catch(error){
        console.log(error)
        return res.json({
            'result':'failed'
        })
    }

})

app.post('/register', async (req,res)=>{
    // const {firstName, lastName, email, password} = req.body
   
    try{
        const user = await new User({
            firstName : req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email, 
            password: req.body.password});
         user.save()
         .then (()=>res.json({message: user}))
         .catch(err=>res.json({message: err.message}))
        // console.log(req.body)
        // if (user !== null){
        //     res.end(JSON.stringify(user))
        // }
        // return res.json({
        //     'result':'failure',
        //     'message':'Register failed'
        // });
    } catch (error){
        console.log(error)
        return res.json({
            'result':'failure',
            'message':'Maybe the email is already taken',
            'Description':'Register failed'
        })

    }
})

app.delete('/users/:id', (req,res)=>{
    const {id}= req.params
    
    res.json({
        'result': `${id} successfully deleted `
    })
})

app.patch('/users/:id', (req,res)=>{
    const {id} = req.params;
    const {password} = req.body;
    if(user.id = id){
        user.password = password;
        res.send(`Updated ${id} `)
    } else {
        res.send(`User ${id} not found`)
    }
})



app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})