const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const livroRoutes = require('./routes/livroRoutes');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// rotas
app.use('/livro', livroRoutes);

module.exports = app;
