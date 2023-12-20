const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const UserControllers=require('../backend/Controllers/UserControllers')
const port=process.env.PORT||5000;
const resumeUpload=require('./Controllers/ResumeUpload');

{process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/sdp-2_jobportal').then(()=>console.log('Connected to MongoDB')).catch(err=>console.log(err));

app.use('/api',UserControllers);
app.post('/resumeUpload',resumeUpload.single('file'),(req,res)=>{
    res.status(200).send("File Uploadation Success");
}
)
app.listen(port,()=>console.log(`server listening ${port}`));
