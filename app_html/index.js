const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/viwes');

app.get('/', (req, res)=>{
     res.render('index.html');
});
   
const PORT = 8086;
app.listen(PORT, ()=>{
    console.log('app executando na porta' + PORT);
})