import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js'; 
import Router from './routes/route.js'
import dotenv from 'dotenv';
import stripe from "./routes/stripe.js";


dotenv.config();
const app = express();

app.use(express.json());

const PORT1 = 8000;
app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));
app.use('/',Router);
app.use('/stripe',stripe);



// const db_url = process.env.DB_URL;
Connection();

app.listen(PORT1, () => console.log(`Server is running successfully on PORT ${PORT1}`));
DefaultData();