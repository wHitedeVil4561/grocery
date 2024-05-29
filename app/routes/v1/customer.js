import express from 'express';
import {getCustomerList,addCustomer} from '../../controller/customer.js'
const router = express.Router();

router.get('/list',getCustomerList);
router.get('/add',addCustomer);

export default router;