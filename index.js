import('.env').port()
const express= require('express')
const app=express();
const port=3007;

app.get('/', function(req, res){
    res.send("hello world!")

})

app.get('/follow', function(req,res){
    res.send("https://accounts.google.com/b/0/AddMailService")
})

app.get('/login', function(req,res){
    res.send("<h1>logged in</h1>")
})

app.listen(process.env.port, function(){
    console.log(process.env.port , port)
})