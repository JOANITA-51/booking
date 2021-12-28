const express = require('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);

//DB connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true})
.then(()=>{
    console.log('Database connected')
})
.catch((error)=>{
    console.log(error)
} )

const PORT = process.env.PORT||4000;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})