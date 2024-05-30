import { GraphQLError } from "graphql";
import { queryList } from "../../services/common.js";
import { getPagination } from "../../utils/helper.js";
import httpStatus from "http-status";

export const resolvers = {
    Query:{
        async customers(_,{page,size},{db}){
            try{
                const {customer} = db;
                const {limit,offset} = getPagination(page,size);
                const {rows,count} = await queryList(customer,limit,offset,[['createdAt','ASC']])
                return {rows,count};
            }catch(err){
                console.error(err);
            }
        },
        async customer(_,{id},{db}){
            try{
                const {customer} = db;
                const customerDetails = await customer.findByPk(id);
                if(customerDetails) return customerDetails;
                return new GraphQLError('Customer not found',{
                    extensions:{
                        code:'CUSTOMER_NOT_FOUND',
                        http:{
                            status:httpStatus.NOT_FOUND
                        }
                    }
                })
            }catch(err){
                console.error(err);
            }
        }
    }
}