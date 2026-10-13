const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'biblioteca'
});

db.connect(function(erro) {
  if (erro) {
    console.log('Erro ao conectar ao banco de dados: ' + erro);
  } else {
    console.log('Conectado ao banco de dados MySQL com sucesso!');
  }
});

module.exports = db;
