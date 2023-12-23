// const {v4:uuidv4}=require('uuid');
const multer = require('multer');
const fileSystem=require('fs');
const express=require('express');
const mongodb=require('mongodb');
const router=express.Router();
const pdfSchema=require('../models/Pdfschema');
const connection=require('../config');
// const storage=multer.diskStorage(
//     {
//         destination:(req,res,cb)=>{
//             cb(null,'./uploads/resumes');
//         },
//         filename: (req,res,cb)=>{
//             cb(null,`${req.body.id}.pdf`);
//         }
//     }
// );
// const upload=multer({storage:storage});

router.post('/resume',async (req,res)=>{
        // const file=req.file;
        // if(!file)
        // {
        //     res.status(400).send("No File Uploaded");
        //     return ;
        // }
        // const gfs=GridFSBucket(mongoose.connection.db);
        // const writeStream=fs.openUploadStream(file.originalname);
        // const readStream=fs.createReadStream(file.path);
        // readStream.pipe(writeStream)
        // .on('error', (err) => {
        //   console.error(err);
        //   res.status(500).send('Error uploading file');
        // })
        // .on('finish', () => {
        //   console.log('File uploaded successfully');
        //   res.send('File uploaded successfully');
        // });
        // // const student=findByIdAndUpdate()
        const title=req.body.id;
        const file=req.files.file;
        const bucket=mongodb.GridFSBucket(connection.db);

        fileSystem.createReadStream(file.path).pipe(bucket.openUploadStream(filePath,{
                chunkSizeBytes:104876,
                metadata:{
                    name:file.name,
                    size:file.size,
                    type:file.type
                }
        })).on('finish',()=>{
            res.status(200).send("Success");
        })
    });
module.exports=router;