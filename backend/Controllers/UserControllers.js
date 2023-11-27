const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const bodyParser=require('body-parser');
const User=require('../models/User');
const nodemailer=require('nodemailer');
const mailgen=require('mailgen');

const transport = nodemailer.createTransport({
    service:"gmail",
    port: 587,
    auth: {
        user:'trinayreddy4@gmail.com',
        pass: 'mthl sxns kvpz ehct'
    }
});


const mailGenerator = new mailgen({
    theme: 'default',
    product: {
        name: 'Mailgen',
        link: 'https://mailgen.js/',
        logo: 'https://mailgen.js/img/logo.png'
    }
});

router.post('/createUser',async (req,res)=>{

        const username=req.body.username;
        const email   =req.body.email;
        const companyName=req.body.companyName;
        const designation=req.body.designation;
        const password=req.body.password;

        const encrypted=await bcrypt.hash(password,10);

        const user=User({
            username:username,
            email:email,
            companyName:companyName,
            designation:designation,
            password:encrypted
        });
        await user.save();
        
        const emailFormat = {
            body: {
                name: `${username}`,
                intro: 'Welcome to Placements Gateway! We\'re very excited to have you on board.',
                action: {
                    instructions: `To Login, please click here:`,
                    button: {
                        color: '#22BC66', // Optional action button color
                        text: 'Login',
                        link: 'https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010'
                    }
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };
        const maile=mailGenerator.generate(emailFormat);
        await transport.sendMail({
            from:'bertrand.kuvalis91@ethereal.email',
            to:`${email}`,
            subject:'account Creation Successful',
            html:maile
        }).then((res)=>console.log(res)).catch((e)=>console.log(e));

        res.status(200).send('Successful');
})

module.exports=router;