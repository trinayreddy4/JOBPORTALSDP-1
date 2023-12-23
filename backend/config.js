const mongoose=require('mongoose');
const con=mongoose.connect('mongodb+srv://trinayreddy4:2200030815@cluster0.mybkgab.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log('Connected to MongoDB')).catch(err=>console.log(err));
module.exports=con;