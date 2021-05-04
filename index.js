
require('dotenv').config({path:__dirname+'/.env'});
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const portNumber = 8010;

//all the routes
const OpenSourceRoutes = require('./Open Source/routes/indexOpenSource');



app.use(bodyParser.urlencoded({extended:true}));
app.listen(portNumber,()=>{
    console.log(`Listening to port number ${portNumber}`);
});

app.use('/open-source',OpenSourceRoutes);







