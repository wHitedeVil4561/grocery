import httpStatus from 'http-status';
import db from '../models/index.js';
import {Op} from 'sequelize'
import {success,error} from '../res/index.js'
export async function getCustomerList(req,res){
    try{
        const {customer} = db;
        const { count, rows } = await customer.findAndCountAll({});
        return success(req,res,{msgCode:'Customer list fetched successfully',data:{rows,count}},httpStatus.OK)
    }catch(err){
        console.error(err);
        return error(req,res,{msgCode:'Something went wrong',data:{}},httpStatus.INTERNAL_SERVER_ERROR)
    }
}

export async function addCustomer(req,res){
    try{
        const {customer} = db;
        const {email,phone} = req.body;
        const isCustomerExist = await customer.findOne({
            where:{
                [Op.or]:{email,phone}
            }
        });
        if(isCustomerExist) return error(req,res,{msgCode:'Customer already exists',data:{}},httpStatus.CONFLICT);
        const customerDetails = await customer.create(req.body);
        return success(req,res,{msgCode:'Customer added successfully.',data:customerDetails},httpStatus.CREATED)
    }catch(err){
        console.error(err);
        return error(req,res,{msgCode:'Something went wrong',data:{}},httpStatus.INTERNAL_SERVER_ERROR)
    }
}