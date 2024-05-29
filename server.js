import express from 'express';
import http from 'http'
import 'dotenv/config';
import {CONFIG} from "./app/constant/environment.constant.js"
import "./app/models/index.js"
import routes from './app/routes/index.js'
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

app.use(cors())
app.use(bodyParser.json({limit:'2mb'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',routes);

http.createServer(app.handle.bind(app)).listen( CONFIG.PORT, ()=>{
    console.log(`Server is up on ${ CONFIG.PORT} running successfully.`)
});