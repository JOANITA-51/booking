const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');
const Preference = require('./models/preference')
const cors = require('cors');
const ObjectId  = require('mongodb').ObjectID;
const jwt = require('jsonwebtoken');
const ErrorResponse = require('./utils/ErrorResponse');

/*
const router = require('./routes/user');
const routerPreference = require('./routes/preference')
const auth = require('./routes/auth');
const logger = (req,res,next)=>{
    console.log(`${req.method}${req.protocol}://${req.get('host')}${req.originalUrl}`)

    next();
}

*/

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
app.use(cors());

/*
app.use('/auth', auth)
app.use('/user',router)
app.use(logger)
app.use('/users', router);
app.use('/preference',routerPreference);
*/

app.get('/', async(req, res)=>{
    // res.send ('Welcome!!')
    try{
        const users = await User.find();
        res.json(users)
    }catch{
        res.json('opps!')
    }
});

//For the  signup button
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

    } catch (error){
        console.log(error)
        return res.json({
            'result':'failure',
            'message':'Maybe the email is already taken',
            'Description':'Register failed'
        })

    }
})

//For the login button
app.post('/login', async (req,res,next)=>{
    const {email, password} = req.body;

    try {
         //Validate email  & password
        if(!(email || password)){
            return next (new ErrorResponse('user does not exist', 400));
    
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
    
    }
    catch (error) {
        return res.status(500).json({err:error.message})
            
    }

    const token = jwt.sign({_id: User._id}, `${process.env.JWT_KEY}`);

    res.cookie('t');

    const {_id, firstName} = User;
    return res.json({token, user : {

        email:req.body.email, 
        _id, firstName
    }
    });

})

//finding all the users
app.get('/submitPreference', async(req, res)=>{
    try{
        const preferences = await Preference.find();
        res.json(preferences)

    }catch(error){
        res.json(error)
    }
})

// finding a particular user by the id
app.get('/submitPreference/:id', async(req, res)=>{
    try{
        const {id}= req.params
        const preferences = await Preference.findOne({_id: ObjectId(id)}
        );
        res.json(preferences)

    }catch(error){
        res.json({message: error.message})
    } 
})



// Adding the booking information
app.post('/addPreference', async(req,res)=>{
    const {bookingDate, bookingTime, schoolName, schoolLocation, schoolFee,user } = req.body
    try{
        const preference = new Preference({bookingDate, bookingTime, schoolName, schoolLocation, schoolFee, user});
        return await preference.save()
            .then(()=>{res.json(preference)})
            .catch(err=>res.json({message:err.message}))
        
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
            'result':'cancelled'
        })
    }

})
//Updating the booking information
app.post('/update/:id',async(req,res)=>{
    // const id = req.params.id
    // const record = await repo.update(id, req.body)
    // console.log(`Record Updated: \n ${JSON.stringify(record, null, 2)}`)
    // res.send('Record Updated')
    try{
        const {id}= req.params
        const preferences = await Preference.UpdateOne({_id: ObjectId(id)}
        );
        res.json(preferences)

    }catch(error){
        res.json({message: error.message})
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