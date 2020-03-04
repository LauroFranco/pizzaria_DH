const express = require('express');
const cardapioController = require('../controllers/cardapioController');
let route = express.Router();



route.get('/cadastrar/:pizza/:preco', cardapioController.registrarCardapio)
route.get('/ver'  ,cardapioController.listarCardapio)
module.exports = route;