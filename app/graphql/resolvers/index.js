import { authMutation } from "./mutation/auth/index.js";
import { employeQueries } from "./queries/employee/index.js";

export const resolvers = {
    Query:{
        ...employeQueries
    },
    Mutation:{
        ...authMutation
    }
}