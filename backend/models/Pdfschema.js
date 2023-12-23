const mongoose=require('mongoose');

const pdf=mongoose.Schema(
    {
        pdf:String,
        title:String
    }
)
module.exports=mongoose.model('pdfs',pdf);