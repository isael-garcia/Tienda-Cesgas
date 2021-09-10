
var express =  require('express');
var clienteController = require('../controllers/cliente-controller')

var api = express.Router();

api.post('/registro_clientes', clienteController.registro_cliente);

module.exports = api;
