const { gql } = require("apollo-server-express");

module.exports = typeDefs = gql`
  type Query {
    hello: String!
    users: [User!]!
  }
  type User {
    id: ID!
    firstname: String!
    lastname: String!
    age: number!
  }
  type Mutation {
    createUser(name: String!): User!
  }
`;