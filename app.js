const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

let port = process.env.PORT || 3000;
app.listen(port, () => console.log('Servidor funcionando'));

app.get('/', function(req,res){
    let htmlPath = path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlPath);
})

app.get('/home', function(req,res){
    let htmlPath = path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlPath);
})

app.get('/register', function(req,res){
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
})

app.get('/login', function(req,res){
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
})