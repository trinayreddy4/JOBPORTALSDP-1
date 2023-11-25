const express=require('express');
const app=express();
const mongoose=require('mongoose');
const port=process.env.PORT||5000;
const UserControllers=require('../backend/Controllers/UserControllers')
mongoose.connect('mongodb://127.0.0.1:27017/sdp-2_jobportal').then(()=>console.log('Connected to MongoDB')).catch(err=>console.log(err));

app.use('/',UserControllers);
app.listen(port,()=>console.log(`server listening ${port}`));
