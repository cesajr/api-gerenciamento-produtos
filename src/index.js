// Importa módulos necessários
const express = require('express');
const cors = require('cors');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Usa as rotas de produtos
app.use('/produtos', produtoRoutes);

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});