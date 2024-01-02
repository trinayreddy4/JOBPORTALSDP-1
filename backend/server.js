const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const UserControllers=require('../backend/Controllers/UserControllers')
const port=process.env.PORT||5000;
const resumeUpload=require('./Controllers/ResumeUpload');
const dotenv=require('dotenv');
const { GridFSBucket } = require('mongodb');
dotenv.config();

const uri=process.env.MONGO_URI;

mongoose.connect(`${uri}`).then(()=>{
    console.log('Connected to MongoDB')
    let gfs=new mongoose.mongo.GridFSBucket(mongoose.connection.db,()=>{
        bucketName:'resume'
    });
}).catch(err=>console.log(err));

{process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
app.use(cors());
app.use(express.json());
app.use('/api',UserControllers);
app.use('/upload',resumeUpload);
app.listen(port,()=>console.log(`server listening ${port}`));
