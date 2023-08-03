import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js'; 
import Router from './routes/route.js'
import dotenv from 'dotenv';
const app = express();
// dotenv.config();

const PORT = 8000;
app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use('/',Router);


// const db_url = process.env.DB_URL;
Connection();

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
DefaultData();