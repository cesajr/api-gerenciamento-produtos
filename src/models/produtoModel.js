// Simula um banco de dados em memória
let produtos = [];
let proximoId = 1;

exports.todos = () => produtos;

exports.buscarPorId = (id) => produtos.find(p => p.id === id);

exports.criar = (nome, preco) => {
  const novoProduto = { id: proximoId++, nome, preco };
  produtos.push(novoProduto);
  return novoProduto;
};

exports.editar = (id, nome, preco) => {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return null;
  produto.nome = nome;
  produto.preco = preco;
  return produto;
};

exports.deletar = (id) => {
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return false;
  produtos.splice(index, 1);
  return true;
};