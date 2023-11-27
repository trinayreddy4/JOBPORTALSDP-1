const mongoose=require('mongoose');

const User=mongoose.Schema({
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true
        },
        companyName:{
            type:String,
            required:true
        },
        designation:{
            type:String
        },
        password:{
            type:String,
            required:true
        }
});

module.exports=mongoose.model('Users',User);
