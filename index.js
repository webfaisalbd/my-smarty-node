const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send('This is my smarty node application');
})

app.listen(port,()=>{
    console.log("Started the node project");
})