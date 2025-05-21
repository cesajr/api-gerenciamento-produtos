const { validationResult } = require('express-validator');
const produtoModel = require('../models/produtoModel');

// Lista todos os produtos
exports.listar = (req, res) => {
  res.json(produtoModel.todos());
};

// Busca produto por ID
exports.buscarPorId = (req, res) => {
  const produto = produtoModel.buscarPorId(parseInt(req.params.id));
  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }
  res.json(produto);
};

// Cria produto
exports.criar = (req, res) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }
  const { nome, preco } = req.body;
  const novoProduto = produtoModel.criar(nome, preco);
  res.status(201).json(novoProduto);
};

// Edita produto
exports.editar = (req, res) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }
  const id = parseInt(req.params.id);
  const { nome, preco } = req.body;
  const produtoEditado = produtoModel.editar(id, nome, preco);
  if (!produtoEditado) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }
  res.json(produtoEditado);
};

// Deleta produto
exports.deletar = (req, res) => {
  const id = parseInt(req.params.id);
  const deletado = produtoModel.deletar(id);
  if (!deletado) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }
  res.status(204).send();
};