import {Sequelize} from 'sequelize'

const db = new Sequelize('reservas-canchas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

export default db