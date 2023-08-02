import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js'; 

const app = express();
// dotenv.config();

const PORT = 8000;
// const db_url = process.env.DB_URL;
Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();