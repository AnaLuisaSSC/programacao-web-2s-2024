const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let estoque = [];

// Rota para adicionar um novo produto ao estoque
app.post('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    estoque.push({ id, nome, qtd: parseInt(qtd) });
    res.send(`Produto ${nome} adicionado com sucesso!`);
});

// Rota para listar todos os produtos do estoque
app.get('/listar', (req, res) => {
    res.json(estoque);
});

// Rota para remover um produto do estoque
app.delete('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(produto => produto.id !== id);
    res.send(`Produto com ID ${id} removido com sucesso!`);
});

// Rota para alterar a quantidade de um produto do estoque
app.put('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = estoque.find(prod => prod.id === id);
    if (produto) {
        produto.qtd = parseInt(qtd);
        res.send(`Quantidade do produto ${produto.nome} atualizada para ${qtd}!`);
    } else {
        res.status(404).send('Produto não encontrado!');
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
