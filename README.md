# API de Gerenciamento de Produtos / Product Management API

---

## 1. Descrição Geral / General Description

**Português:**  
Esta API RESTful foi desenvolvida para gerenciar um catálogo de produtos. Permite operações básicas de criação, leitura, atualização e exclusão (CRUD) dos produtos. Inclui validações de entrada para garantir a integridade dos dados. Ideal para aprendizado e demonstração de boas práticas em desenvolvimento backend usando Node.js e Express.

**English:**  
This RESTful API was developed to manage a product catalog. It supports basic CRUD operations (Create, Read, Update, Delete) on products and includes input validations to ensure data integrity. It is ideal for learning and demonstrating best practices in backend development using Node.js and Express.

---

## 2. Objetivos / Objectives

- Fornecer um backend simples para manipulação de produtos.  
- Demonstrar boas práticas em APIs RESTful.  
- Garantir validação de dados para evitar entradas inválidas.  
- Facilitar testes por meio de ferramentas como Insomnia ou Postman.

---

## 3. Funcionalidades / Features

| Funcionalidade                  | Descrição                                                    | Feature Description                                           |
|--------------------------------|--------------------------------------------------------------|---------------------------------------------------------------|
| Listar produtos                | Recupera todos os produtos cadastrados.                      | Retrieves all registered products.                            |
| Criar produto                 | Adiciona um novo produto, validando nome e preço.            | Adds a new product, validating name and price.                |
| Editar produto                | Atualiza informações de um produto existente, com validação. | Updates an existing product's information, with validation.   |
| Excluir produto              | Remove um produto pelo seu identificador.                    | Deletes a product by its ID.                                   |

---

## 4. Tecnologias Utilizadas / Technologies Used

- **Node.js**: Plataforma JavaScript para backend.  
- **Express**: Framework para criar servidores HTTP RESTful.  
- **CORS**: Middleware para habilitar compartilhamento de recursos entre origens.  
- **express-validator**: Biblioteca para validação de dados das requisições HTTP.

---

## 5. Endpoints da API / API Endpoints

| Método | Rota           | Descrição                       | Request Body (JSON)                          | Resposta Exemplo (JSON)                       |
|--------|----------------|--------------------------------|---------------------------------------------|-----------------------------------------------|
| GET    | `/produtos`    | Lista todos os produtos         | —                                           | `[{"id":1,"nome":"Camisa","preco":59.9}]`    |
| POST   | `/produtos`    | Cria um produto novo            | `{ "nome": "Camisa", "preco": 59.9 }`      | `{ "id": 1, "nome": "Camisa", "preco": 59.9 }` |
| PUT    | `/produtos/:id`| Atualiza um produto pelo ID     | `{ "nome": "Camisa Polo", "preco": 69.9 }` | `{ "id": 1, "nome": "Camisa Polo", "preco": 69.9 }` |
| DELETE | `/produtos/:id`| Remove um produto pelo ID       | —                                           | `{ "mensagem": "Produto removido com sucesso" }` |

---

## 6. Exemplos de Requisição e Resposta / Request and Response Examples

### Criar Produto / Create Product

**Request:**  
```http
POST /produtos HTTP/1.1
Content-Type: application/json

{
  "nome": "Caneca",
  "preco": 29.90
}
```

**Response:**  
```json
{
  "id": 1,
  "nome": "Caneca",
  "preco": 29.90
}
```

---

### Listar Produtos / List Products

**Request:**  
```http
GET /produtos HTTP/1.1
```

**Response:**  
```json
[
  {
    "id": 1,
    "nome": "Caneca",
    "preco": 29.90
  }
]
```

---

### Atualizar Produto / Update Product

**Request:**  
```http
PUT /produtos/1 HTTP/1.1
Content-Type: application/json

{
  "nome": "Caneca Azul",
  "preco": 35.00
}
```

**Response:**  
```json
{
  "id": 1,
  "nome": "Caneca Azul",
  "preco": 35.00
}
```

---

### Deletar Produto / Delete Product

**Request:**  
```http
DELETE /produtos/1 HTTP/1.1
```

**Response:**  
```json
{
  "mensagem": "Produto removido com sucesso"
}
```

---

## 7. Validações de Dados / Data Validations

| Campo  | Regras                           | Regras (English)                |
|--------|---------------------------------|--------------------------------|
| nome   | Obrigatório, mínimo 3 caracteres | Required, minimum 3 characters  |
| preco  | Obrigatório, número maior que 0  | Required, number greater than 0 |

Se os dados forem inválidos, a API retorna um erro 400 com lista de mensagens.

---

## 8. Instruções para Instalação / Installation Instructions

### Pré-requisitos / Prerequisites

- Node.js instalado ([nodejs.org](https://nodejs.org/))
- Git instalado ([git-scm.com](https://git-scm.com/))

---

### Passos para rodar a API / Steps to run the API

```bash
# Clonar o repositório (exemplo)
git clone https://github.com/seuusuario/api-produtos.git
cd api-produtos

# Instalar dependências
npm install

# Rodar o servidor
node index.js
```

O servidor estará disponível em:  
`http://localhost:3000`

---

## 9. Testando com Insomnia / Testing with Insomnia

- Configure requisições HTTP conforme exemplos dos endpoints.  
- Envie dados JSON válidos para os métodos POST e PUT.  
- Observe mensagens de erro quando enviar dados inválidos.

---

## 10. Contato / Contact

Para dúvidas, sugestões ou contribuições, abra uma issue no GitHub ou entre em contato pelo email: seu.email@exemplo.com

---

<!--
Feito por Paulo César Jr.
-->
