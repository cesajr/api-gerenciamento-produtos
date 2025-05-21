const express = require('express');
const { body } = require('express-validator');
const produtoController = require('../controllers/produtoController');

const router = express.Router();

// Listar todos os produtos
router.get('/', produtoController.listar);

// Buscar produto por ID
router.get('/:id', produtoController.buscarPorId);

// Criar produto com validação
router.post(
  '/',
  [
    body('nome').isString().withMessage('O nome é obrigatório'),
    body('preco').isFloat({ gt: 0 }).withMessage('O preço deve ser maior que zero')
  ],
  produtoController.criar
);

// Editar produto com validação
router.put(
  '/:id',
  [
    body('nome').isString().withMessage('O nome é obrigatório'),
    body('preco').isFloat({ gt: 0 }).withMessage('O preço deve ser maior que zero')
  ],
  produtoController.editar
);

// Deletar produto
router.delete('/:id', produtoController.deletar);

module.exports = router;