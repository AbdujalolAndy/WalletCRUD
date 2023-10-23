const express = require('express');
const app = express();
const mongoose= require('mongoose');
const helmet=require('helmet');
const owners=require('./routes/owners');
const wallets=require('./routes/wallets');


app.use(express.json());
app.use('/api/owners',owners);
app.use('/api/wallets',wallets);



mongoose.connect('mongodb://127.0.0.1/Wallet')
    .then(()=>{
        console.log('MongoDB ga ulandi!')
    })
    .catch((err)=>{
        console.log('MongoDB ga ulanmadi!',err)
    })

const port =process.env.PORT ?? 5000; 

app.listen(port,console.info(`${port} is listening...`))
