const express = require('express');
const router = express.Router();
const db = require('../config/db');

// pega todos os livros
router.get('/', function(req, res) {
  const sql = 'SELECT * FROM livros';
  db.query(sql, function(erro, resultado) {
    if (erro) {
      return res.status(500).json({ erro: 'erro ao buscar livros' });
    }
    res.status(200).json(resultado);
  });
});

// busca um livro pelo id
router.get('/:id', function(req, res) {
  const id = req.params.id;
  const sql = 'SELECT * FROM livros WHERE id = ?';

  db.query(sql, [id], function(erro, resultado) {
    if (erro) {
      return res.status(500).json({ erro: 'erro ao buscar livro' });
    }
    if (resultado.length === 0) {
      return res.status(404).json({ erro: 'livro não encontrado' });
    }
    res.status(200).json(resultado[0]);
  });
});

// cadastra um novo livro
router.post('/', function(req, res) {
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const isbn = req.body.isbn;

  // valida se faltou algum campo
  if (!titulo || !autor || !isbn) {
    return res.status(400).json({ erro: 'campos obrigatórios faltando' });
  }

  const sql = 'INSERT INTO livros (titulo, autor, isbn) VALUES (?, ?, ?)';
  db.query(sql, [titulo, autor, isbn], function(erro, resultado) {
    if (erro) {
      if (erro.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ erro: 'isbn já cadastrado' });
      }
      return res.status(500).json({ erro: 'erro ao cadastrar livro' });
    }
    res.status(201).json({
      id: resultado.insertId,
      titulo: titulo,
      autor: autor,
      isbn: isbn
    });
  });
});

// atualiza um livro pelo id
router.put('/:id', function(req, res) {
  const id = req.params.id;
  const titulo = req.body.titulo;
  const autor = req.body.autor;
  const isbn = req.body.isbn;

  // valida se faltou algum campo
  if (!titulo || !autor || !isbn) {
    return res.status(400).json({ erro: 'campos obrigatórios faltando' });
  }

  const sql = 'UPDATE livros SET titulo = ?, autor = ?, isbn = ? WHERE id = ?';
  db.query(sql, [titulo, autor, isbn, id], function(erro, resultado) {
    if (erro) {
      if (erro.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ erro: 'isbn já cadastrado' });
      }
      return res.status(500).json({ erro: 'erro ao atualizar livro' });
    }
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: 'livro não encontrado' });
    }
    res.status(200).json({
      id: id,
      titulo: titulo,
      autor: autor,
      isbn: isbn
    });
  });
});

// deleta um livro pelo id
router.delete('/:id', function(req, res) {
  const id = req.params.id;
  const sql = 'DELETE FROM livros WHERE id = ?';

  db.query(sql, [id], function(erro, resultado) {
    if (erro) {
      return res.status(500).json({ erro: 'erro ao deletar livro' });
    }
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: 'livro não encontrado' });
    }
    res.status(200).json({ mensagem: 'livro deletado com sucesso' });
  });
});

module.exports = router;
