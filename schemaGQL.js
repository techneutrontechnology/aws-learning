

import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    greet: String
    users: [User]
    quotes: [Quote]
    quotesByUserId(userId: ID!): [Quote]
    userById(id: ID!): User
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    quotes: [Quote]
  }

  type Quote {
    id: ID!
    by: ID
    name: String
  }

  type Mutation {
    signupUser(userNew:UserInput!): User
}
input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
}
`;
export default typeDefs
