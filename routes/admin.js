
var express =  require('express');
var adminController = require('../controllers/admin-controller')

var api = express.Router();

api.post('/registro_admin', adminController.registro_admin);

module.exports = api;
