const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Todo]!
    getAllUsers: [User]!
    getUser(id: ID!): User
  }

  type Todo {
    user: User
    id: ID!
    title: String!
    completed: Boolean!
  }

  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
  }
`;

module.exports = typeDefs;
