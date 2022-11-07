//Invocamos a la conexion de la DB
const conexion = require('../database/db');

exports.save = (req, res) =>{
    const num_cancha = req.body.num_cancha;
    const capacidad = req.body.capacidad;
    const tipo_cancha = req.body.tipo_cancha;
    
    conexion.query('INSERT INTO cancha SET ?',{num_cancha:num_cancha, capacidad:capacidad, tipo_cancha:tipo_cancha}, (error, results)=>{
    
        if(error){
            console.log(error);
        }
        else{
            res.redirect('/');         
        }
    });

};

//Actualizar una Reserva
exports.update = (req, res)=>{
    const num_cancha = req.body.num_cancha;
    const capacidad = req.body.capacidad;
    const tipo_cancha = req.body.tipo_cancha;

    conexion.query('UPDATE cancha SET ? WHERE cancha_ID = ?',[{num_cancha:num_cancha, capacidad:capacidad, tipo_cancha:tipo_cancha}, paciente_id], (error, results)=>{
        if(error){
            console.log(error);
        }
        else{           
            res.redirect('/');         
        }
    });
};
