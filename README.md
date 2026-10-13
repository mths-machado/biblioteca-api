# API Biblioteca

Trabalho de API REST para gerenciamento de livros de uma biblioteca, feito em Node.js com Express e banco MySQL.

## Como instalar

1. Clone o repositório ou baixe os arquivos da pasta.
2. No terminal, instale as dependências:
```bash
npm install
```
3. Importe o script `database/biblioteca.sql` no seu MySQL/MariaDB para criar o banco de dados e a tabela com livros de exemplo.
4. Confira no arquivo `config/db.js` se o usuário e senha do seu MySQL estão certos (o padrão tá root com senha vazia).

## Como rodar

Para rodar em modo desenvolvimento com nodemon:
```bash
npm run dev
```

Ou para rodar normal:
```bash
npm start
```

O servidor vai iniciar em `http://localhost:3000`.

## Rotas

- `GET /livro` - busca todos os livros
- `GET /livro/:id` - busca um livro pelo id
- `POST /livro` - cadastra um novo livro (enviar titulo, autor e isbn no body em json)
- `PUT /livro/:id` - atualiza um livro pelo id (enviar titulo, autor e isbn no body em json)
- `DELETE /livro/:id` - remove um livro pelo id
