# API Biblioteca

Trabalho de API REST para gerenciar os livros de uma biblioteca, feito em Node.js com Express e MySQL. O recurso é o `livro`, com os campos `id`, `titulo`, `autor` e `isbn`, e tem CRUD completo.

## Tecnologias

Node.js, Express, mysql, morgan, body-parser, cors, dotenv e nodemon.

## Como instalar

1. Clone o repositório ou baixe os arquivos.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Ligue o MySQL (serviço, XAMPP, como preferir) e rode o script do banco pelo terminal:

   ```bash
   mysql -u root -p < database/biblioteca.sql
   ```

   Ou cole o conteúdo de `database/biblioteca.sql` na aba SQL do phpMyAdmin ou do Workbench. Ele cria o banco `biblioteca`, a tabela `livros` e 3 livros de exemplo.

4. Copie o arquivo .env.example para .env e preencha com o usuário e a senha do seu MySQL.

## Como rodar

```bash
npm start
```

Ou, para reiniciar sozinho quando mudar o código:

```bash
npm run dev
```

O servidor sobe em `http://localhost:3000`. No terminal deve aparecer "Conectado ao banco de dados MySQL com sucesso!".

## Rotas

| Método | Rota | O que faz | Retornos |
|--------|------|-----------|----------|
| GET | `/livro` | lista todos os livros | 200, 500 |
| GET | `/livro/:id` | busca um livro pelo id | 200, 404, 500 |
| POST | `/livro` | cadastra um livro | 201, 400, 409, 500 |
| PUT | `/livro/:id` | atualiza um livro | 200, 400, 404, 409, 500 |
| DELETE | `/livro/:id` | apaga um livro | 200, 404, 500 |

- `400`: faltou titulo, autor ou isbn
- `404`: livro não encontrado
- `409`: já existe um livro com esse isbn
- `500`: erro no banco

Exemplo de body (JSON) para POST e PUT:

```json
{
  "titulo": "Memórias Póstumas de Brás Cubas",
  "autor": "Machado de Assis",
  "isbn": "9788535910663"
}
```

## Testes no Postman

A collection `biblioteca.postman_collection.json` está na raiz do projeto. É só importar no Postman (`Import`) e rodar com a API ligada.

## Estrutura

```
server.js                  sobe o servidor
app.js                     middlewares e rotas
config/db.js               conexão com o MySQL
routes/livroRoutes.js      rotas do CRUD
database/biblioteca.sql    script do banco
.env.example   modelo das variáveis de ambiente
```
