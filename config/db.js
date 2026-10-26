require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(function(erro) {
  if (erro) {
    console.log('Erro ao conectar ao banco de dados: ' + erro);
  } else {
    console.log('Conectado ao banco de dados MySQL com sucesso!');
  }
});

module.exports = db;
