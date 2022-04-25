const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req,res)=>{
    res.send('This is my smarty node application');
})

const users = [
    
    {id: 1, name: 'Faisal', email: 'faisal@gmail.com', phone: '01711111'},
    {id: 2, name: 'Ahmed', email: 'ahmed@gmail.com', phone: '017222222'},
    {id: 3, name: 'Shajib', email: 'shajib@gmail.com', phone: '017333333'},
    {id: 4, name: 'Mawa', email: 'mawa@gmail.com', phone: '017444444'},
    {id: 5, name: 'Hawa', email: 'hawa@gmail.com', phone: '01755555'},
    {id: 6, name: 'Isq', email: 'isq@gmail.com', phone: '017666666'},
    {id: 7, name: 'Iqra', email: 'iqra@gmail.com', phone: '017777777'},
]


// app.get('/users',(req,res) => {
//     res.send(users);
// })


// filter by search query parameter 
app.get('/users',(req,res)=>{
    // console.log('query ', req.query);
    // res.send(users);
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched);
    }
})

app.get('/user/:id',(req,res) => {
    console.log(req.params);
    // const id=req.params.id;
    const id= parseInt(req.params.id);
    // const user=users[id];
    const user = users.find(u => u.id === id)
    res.send(user);
})


app.post('/user',(req,res) =>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);

    res.send(user)
})


app.get('/fruits', (req,res) => {
    res.send(['mango','apple','orange']);
})



app.listen(port,()=>{
    console.log("Server running successfully");
})