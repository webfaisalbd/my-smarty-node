const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send('This is my smarty node application');
})

const users = [
    {id: 0, name: 'Faisal', email: 'faisal@gmail.com', phone: '01611111'},
    {id: 1, name: 'Faisal', email: 'faisal@gmail.com', phone: '01711111'},
    {id: 2, name: 'Ahmed', email: 'ahmed@gmail.com', phone: '017222222'},
    {id: 3, name: 'Shajib', email: 'shajib@gmail.com', phone: '017333333'},
    {id: 4, name: 'Mawa', email: 'mawa@gmail.com', phone: '017444444'},
    {id: 5, name: 'Hawa', email: 'hawa@gmail.com', phone: '01755555'},
    {id: 6, name: 'Isq', email: 'isq@gmail.com', phone: '017666666'},
    {id: 7, name: 'Iqra', email: 'iqra@gmail.com', phone: '017777777'},
]

app.get('/users',(req,res)=>{
    res.send(users);
})

app.get('/user/:id',(req,res) => {
    console.log(req.params);
    // const id=req.params.id;
    const id= parseInt(req.params.id);
    // const user=users[id];
    const user = users.find(u => u.id === id)
    res.send(user);
})

app.listen(port,()=>{
    console.log("Server running successfully");
})