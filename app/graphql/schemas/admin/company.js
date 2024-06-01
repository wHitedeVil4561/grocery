export const company_type_defs = `#graphql
    type Company {
        
    }

`

export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Customer {
    id: String!
    name: String!
    email: String!
    phone: String!
    address: String!
    createdAt: String!
    updatedAt:String!
  }
  type List {
    count:Int
    rows:[Customer!]
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    customers(page:Int,size:Int): List,
    customer(id:String!):Customer
  }
`;