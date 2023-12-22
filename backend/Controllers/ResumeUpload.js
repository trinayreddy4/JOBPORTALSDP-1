const {v4:uuidv4}=require('uuid');
const multer = require('multer');
const express=require('express');
const { findByIdAndUpdate } = require('../models/Experiences');
const router=express.Router();

const storage=multer.diskStorage(
    {
        destination:(req,res,cb)=>{
            cb(null,'uploads/resumes/');
        },
        filename: (req,res,cb)=>{
            cb(null,uuidv4());
        }
    }
);
const upload=multer({storage:storage});

router.post('uploads/resume',upload.single('file'),async (req,res)=>{
        const file=req.file;
        if(!file)
        {
            res.status(400).send("No File Uploaded");
            return ;
        }
        const gfs=GridFSBucket(mongoose.connection.db);
        const writeStream=fs.openUploadStream(file.originalname);
        const readStream=fs.createReadStream(file.path);
        readStream.pipe(writeStream)
        .on('error', (err) => {
          console.error(err);
          res.status(500).send('Error uploading file');
        })
        .on('finish', () => {
          console.log('File uploaded successfully');
          res.send('File uploaded successfully');
        });
        const student=findByIdAndUpdate()
});