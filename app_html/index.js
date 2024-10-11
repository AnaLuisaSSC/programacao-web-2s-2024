const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/viwes');

app.get('/', (req, res)=>{
     res.render('index.html');
});
   
app.post('\dados', (req, res)=>{
    let dados = {
        nome: req.body.nome,
        data_nascimento: red.boddy.data_nascimento,
        descricao: req.body.descricao
    };
    res.send(dados);
});

const PORT = 8088;
app.listen(PORT, ()=>{
    console.log('app executando na porta' + PORT);
});