const multer = require('multer');
const GridFsStorage=require('multer-gridfs-storage').GridFsStorage;
const express=require('express');
const Grid=require('gridfs-stream');
const router=express.Router();
const bcrypt=require('bcrypt');
const pdfSchema=require('../models/Pdfschema');
const dotenv=require('dotenv')

dotenv.config();

// console.log(process.env.MONGO_URI)
const storage=new GridFsStorage({
    url:process.env.MONGO_URI,
    file:(req,file)=>{
        return new Promise(async (resolve,reject)=>{
            const fname=await bcrypt.hash(req.body.id,10);
            const fileInfo={
                filename:fname,
                bucketname:'resume'
            };
            resolve(fileInfo);
        })
    }
});
const upload=multer({storage:storage});
router.post('/resume',upload.single('file'),async (req,res)=>{
        let re=new Pdfschema({
            pdf:req.file.filename,
            title:req.file.id
        })
        let pdfId=re._id;
        await re.save().then(()=>{
            res.status(200).send("Successfull")
        }).catch((e)=>alert(e))
        
        const s=Student.findByIdAndUpdate({id:req.body.id},{$set:{resume:pdfId}})
        await s.save();
    }
)
router.get('/resume',async (req,res)=>{
        
});
module.exports=router;