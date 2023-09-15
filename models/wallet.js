const mongoose= require('mongoose');


const walletSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    bankAccountHolder:{
        type:Object,
        require:true
    },
    account:{
        type:Number,
        require:true
    },
    openedAccount:{
        type:Date,
        default:Date.now
    }
})

const Wallet=mongoose.model('Wallet',walletSchema);

module.exports=Wallet;