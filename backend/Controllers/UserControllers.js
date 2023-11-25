const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const bodyParser=require('body-parser');
const User=require('../models/User');

router.post('/api/createUser',async (req,res)=>{

        const username=req.body.username;
        const password=req.body.password;
        
        const encrypted=bcrypt.hash(password,10);

        const user=User({
            username:username,
            password:password
        });
        await user.save();
        res.status(201).send(user);
})

module.exports=router;