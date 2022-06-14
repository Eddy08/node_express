const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/empDB")

const empSchema = mongoose.Schema({
    empId:{
        type:Number,
        unique:true,
        required:true
    },
    empName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        default:'Banglore'
    }
});

const empModel=mongoose.model('employee',empSchema);
module.exports=empModel;
