var Cliente = require('../models/cliente');
var bcrypt = require('bcrypt-nodejs');
const registro_cliente = async function(req,res){
    var data = req.body;
    var clientes_arr = [];

    clientes_arr = await Cliente.find({email:data.email});

    if(clientes_arr.length == 0){
        // var reg = await Cliente.create(data);
        if(data.password){
            bcrypt.hash(data.password,null,null, async function(err,hash){
                if(hash){
                    data.password = hash;
                    var reg = await Cliente.create(data);
                    res.status(200).send({data:true});
                }else{
                    res.status(200).send({message:'Error server', data:undefined});
                }

            })
        }else{
            res.status(200).send({message:'No hay una contraseña', data:undefined});
        }
        
    }else{
        res.status(200).send({message:'El Correo ya existe', data:undefined});
    }

}

module.exports = {
    registro_cliente
}