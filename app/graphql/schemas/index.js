import { authTypeDefs } from "./auth/index.js";
import { employeeTypeDefs } from "./employee/index.js";
export const typeDefs = `#graphql
  ${authTypeDefs}
  ${employeeTypeDefs}
`;