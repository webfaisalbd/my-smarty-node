## Nodemon install

`npm install -g nodemon`

##### In script file in package.json
includes, 

```
"start":"node index.js",
"start-dev":"nodemon index.js",
```


##### create dynamic api, api parameter, access params

```
app.get('/user/:id',(req,res) => {
    console.log(req.params);
    // const id=req.params.id;
    const id= parseInt(req.params.id);
    // const user=users[id];
    const user = users.find(u => u.id === id)
    res.send(user);
})
```


##### install cors middleware into server

`npm install cors`

