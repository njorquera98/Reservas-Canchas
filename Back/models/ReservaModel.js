import db from "../database/db.js"

import { DataTypes } from "Sequelize";

const ReservaModel = db.define('reservas', {
    user_ID: {
        type: DataTypes.INTEGER
    },
    cancha_ID:{
        type: DataTypes.INTEGER
    },    
    hora_entrada: {
        type: DataTypes.TIME
    },
    hora_salida: {
        type: DataTypes.TIME
    },
    fecha: {
        type: DataTypes.DATE
    },
    participantes: {
        type: DataTypes.STRING
    }
})

export default ReservaModel;