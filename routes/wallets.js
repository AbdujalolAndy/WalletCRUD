const express=require('express');
const router = express.Router();
const {Owner}= require('../models/owner');
const Wallet=require('../models/wallet');

router.get('/',async(req,res)=>{
    const wallets=await Wallet.find();
    res.status(200).send(wallets)
})

router.post('/',async(req,res)=>{
    const owner=await Owner.findById(req.body.userId)
    const wallet=new Wallet({
        userId:req.body.userId,
        bankAccountHolder:owner,
        account:req.body.account,
        openedAccount:req.body.openedAccount
    })
    const savedWallet=await wallet.save();
    res.status(201).send(savedWallet)
})

module.exports=router
