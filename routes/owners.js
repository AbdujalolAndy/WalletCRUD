const express = require('express');
const router=express.Router();
const {Owner}=require('../models/owner');

router.get('/', async(req,res)=>{
    const owners=await Owner.find();
    res.status(200).send(owners);
})

router.post('/',async(req,res)=>{
    const owner = new Owner({
        name:req.body.name,
        tel:req.body.tel,
        email:req.body.email,
        age:req.body.age
    });

    const savedOwner=await owner.save();
    res.status(201).send(savedOwner);
})

module.exports=router