const {v4:uuidv4}=require('uuid');
const multer = require('multer');
const express=require('express');
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
module.exports=upload;