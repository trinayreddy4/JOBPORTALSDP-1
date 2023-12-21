const mongoose=require('mongoose');
const experience=require('../models/Experiences');
const student=mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true
        },
        lastname:{
            type:String,
            required:true
        },
        id:{
            type:Number,
            required:true,
            unique:true
        },
        gender:{
            type:String,
            required:true
        },
        contact:{
            type:String,
            requried:true
        },
        address:{
            type:String,
            requried:true
        },
        permanentaddress:{
            type:String,
            required:true
        },
        email:{
            type:String,
            requried:true
        },
        dateofbirth:{
            type:Date,
            default:new Date(2004,11,12),
            required:true
        },
        experiences:{
            type:[experience]
        },
        resume:{
            type:Buffer
        }
    }
);

module.exports=mongoose.model('students',student);