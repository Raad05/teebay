const typeDefs = `#graphql
# types
type User {
  id: Int!
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
  id: Int!
  user: User!
  records: [Record!]!
  userId: Int!
  name: String!
  description: String!
  categories: [String!]!
  sellingPrice: Int!
  rentingPrice: Int!
  views: Int!
  createdAt: DateTime!
  startDate: DateTime
  endDate: DateTime
}

type Record {
  id: Int!
  product: Product!
  productId: Int!
  user: User!
  userId: Int!
  status: String!
  createdAt: DateTime!
}

# queries
type Query {
    products: [Product]
    records: [Record]
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

input CreateProductInput {
  userId: Int!
  name: String!
  description: String!
  categories: [String!]!
  sellingPrice: Int!
  rentingPrice: Int!
}

input LoginUserInput {
  email: String!
  password: String!
}

# mutations
type Mutation {
  createUser(input: CreateUserInput!): User
  loginUser(input: LoginUserInput!): String
  createProduct(input: CreateProductInput!): Product
}

scalar DateTime
`;

export default typeDefs;
