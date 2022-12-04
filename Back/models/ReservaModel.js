import db from "../database/db.js"

import { DataTypes } from "Sequelize";

const ReservaModel = db.define('reservas', {
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