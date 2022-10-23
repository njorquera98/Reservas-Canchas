import { Sequelize } from "sequelize";

const db = new Sequelize('name_db', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
})

export default db