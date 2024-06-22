const { default: axios } = require("axios");
const { USER, Todos } = require("./data");

const resolvers = {
  Todo: {
    user: async (todo) => USER.find((e) => e.id === Number(todo.id)),
  },
  Query: {
    tracksForHome: () => Todos,
    getAllUsers: () => USER,
    getUser: (parent, { id }) => USER.find((e) => e.id === Number(id)),
  },
};

module.exports = resolvers;
