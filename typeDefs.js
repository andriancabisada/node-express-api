import { gql } from "apollo-server-express";

export const typeDefs = gql`
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