const mongoose=require('mongoose');

const experience=mongoose.model({
    title:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    startdate:{
        type:Date,
        requried:true,
        validate: {
            validator: (val) => val <= new Date(),
            message: 'Start date must be a past date'
          }        
    },
    enddate:{
        type:Date,
        validate: {
            validator: (val) => {
              if (val) {
                return val >= this.startDate;
              } else {
                return true;
              }
            },
            message: 'End date must be after start date'
          }
    },
    description:{
        type:String,
        required:true
    },
    location:String,
    designations:[],
    technologies:[String]
})

module.exports=mongoose.model('experiences',experience);