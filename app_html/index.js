const express = require('express');
const app = express();

app.get('/', (req, res))
    
const PORT = 8086;
app.listen(PORT, ()=>{
    console.log('app executando na porta' + PORT)
})