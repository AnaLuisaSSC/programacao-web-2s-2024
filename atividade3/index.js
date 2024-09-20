const express = require('express');
const calc = require('./util/calculadora');
const app = express();

app.get('/', (req, res)=>{
    res.send('atividade3 - APP Calculadora');
});

app.get('/somar/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.somar(a, b);
    res.send(`${a} + ${b} = ${c}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{
    
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    
});

app.get('/dividirr/:a/:b', (req, res)=>{
    
});

const PORT = 8085;
app.listen(PORT, ()=>{
    console.log('app executando na porta ' + PORT);
});