const express =require('express');
const mongoose = require('mongoose');
const router = express.Router();


mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME_OPEN_SOURCE}:${process.env.DATABASE_PASSWORD_OPEN_SOURCE}@opensourcecluster.3klhv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(r=>{
    console.log("Connected to open source!!");
    router.get('/',(req,res,next)=>{

        return res.json({
            success:true,
        })
    })


}).catch(err=>{
    console.log("Error connecting to the database!");
    console.log(err);
})

module.exports = router;