import express from 'express';
import customerRoute from './customer.js'
const app = express();
app.use('/customer',customerRoute)
export default app;