const lc = require('./letter_case/letter_case');

//inporta o pacote express
const express = require('express');

//cria uma aplicaçÕ EXPRESS
const app = express();

app.get('/', function(req, res){
    res.send('Hello, World');
});

app.get('/upper', function(req, res){
       let word = req.params.n; 
       res.send(lc.to_upper(word));
}); 

app.get('/lower', function(req, res){
    res.send('hello');
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT);
});