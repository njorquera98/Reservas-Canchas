import db from "../database/db.js"

import { DataTypes } from "Sequelize";

const UserModel = db.define('usuarios', {
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    rut: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    carrera: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    rol: {
        type: DataTypes.STRING
    },
})

export default UserModel;