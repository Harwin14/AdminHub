import { Sequelize } from "sequelize";

const db = new Sequelize('auth_db','harwin','153426',{
    host:'localhost',
    dialect:'mysql'
})

export default db