const mongoose=require('mongoose');

const ownerSchema= new mongoose.Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:100
    },
    tel:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:19
    }
})

const Owner=mongoose.model('Owner',ownerSchema);
module.exports={
    Owner:Owner,
    ownerSchema:ownerSchema
}