const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const UserControllers=require('../backend/Controllers/UserControllers')
const port=process.env.PORT||5000;
const expressFormidable=require('express-formidable');
const resumeUpload=require('./Controllers/ResumeUpload');

{process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
app.use(cors());
app.use(express.json());
app.use(expressFormidable());

app.use('/api',UserControllers);
app.use('/upload',resumeUpload);
app.listen(port,()=>console.log(`server listening ${port}`));
