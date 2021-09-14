
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clienteSchema = Schema({
    nombres: {
        type: String, required: true
    },
    apellidos: {
        type: String, required: true
    },
    email:{
        type: String, required:true
    },
    password: {
        type: String, required:true
    },pais:{
        type:String,  required: false  
    },
    telefono:{
        type:String, required: false 
    },perfil:{
        type:String, default: 'perfil.png' ,  required: false 
    },
    f_nacimiento:{
        type:String,  required: false 
    },
    dni:{
        type:String,  required: false 
    }    
})

module.exports = mongoose.model('cliente', clienteSchema);
