const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const User = require('./models/user');
const Preference = require('./models/preference')
const routerUser = require('./routes/user')
const routerPreference = requiire('./routes/preference')

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
app.use(bodyParser.json);
app.get('/', (req, res)=>{
    res.send('Welcome!!')
})

app.use('/users', routerUser);
app.use('/preference',routerPreference);

app.post('/login', async(req,res)=>{
    
})

app.post('/register', async (req,res)=>{
    const {firstName, lastName, email, password} = req.body
    try{
        const user = new User({firstName, lastName, email, password});
        await user.save()
        console.log(req.body)
        if (user !== null){
            res.json({
                'result':'success',
                'message':'Register Successful',
                'user':user
            })
        }
        return res.json({
            'result':'failure',
            'message':'Register failed'
        });
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