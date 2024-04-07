const typeDefs = `#graphql
# types
type User {
  id: ID!
  products: [Product!]!
  records: [Record!]!
  firstName: String!
  lastName: String!
  address: String!
  email: String!
  phoneNumber: String!
  password: String!
}

type Product {
  id: ID!
  user: User!
  records: [Record!]!
  userId: Int!
  name: String!
  description: String!
  categories: [String!]!
  sellingPrice: Int!
  rentingPrice: Int!
  views: Int!
  createdAt: String!
  startDate: String
  endDate: String
}

type Record {
  id: ID!
  product: Product!
  productId: Int!
  user: User!
  userId: Int!
  status: String!
  createdAt: String!
}

# inputs
input CreateUserInput {
  firstName: String!
  lastName: String!
  address: String!
  email: String!
  phoneNumber: String!
  password: String!
}

# queries
type Query {
    products: [Product]
    records: [Record]
}

# mutations
type Mutation {
  createUser(input: CreateUserInput!): User
}
`;

export default typeDefs;
