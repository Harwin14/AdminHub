import express from 'express'
import db from './config/Database.js'
const app = express()

try {
    await db.authenticate()
    console.log('Database connected...');
} catch (error) {
    console.error(error);
}

app.listen(3000, ()=> console.log('Server Running at Port 3000'))