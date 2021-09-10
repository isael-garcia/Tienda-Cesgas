

const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
var app = express();
var port = process.env.Port || 3000;

var cliente_route = require('./routes/cliente');
var admin_route = require('./routes/admin');

mongoose.connect('mongodb://127.0.0.1:27017/tienda',{useUnifiedTopology: true,useNewUrlParser: true },(err, res)=>{
    if(err){
        console.log(err);
    }else{
        app.listen(port, function() {
         console.log("Servidor corriendo en el puerto " + port);            
        })
    }
})

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({limit: '50mb',extended:true}))

app.use((req,res,next)=>{ //Permite conexion a travez de diferentes puertos
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});


app.use('/api', cliente_route);
app.use('/api', admin_route);
module.exports = app;
