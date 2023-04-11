import { Sequelize } from "sequelize";
import db from '../config/Database.js'

const { Datatypes} = Sequelize

const Users = db.define('users',{
    nam
},{
    freezeTableName:true
})