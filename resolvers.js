const { User } = require("./models/user");

module.exports = resolvers = {
  Query: {
    hello: () => "hi",
    users: () => User.find()
  },
  Mutation: {
    createUser: async (_, { name }) => {
      const firstName = new User({ name });
      await firstName.save();
      return firstName;
    }
  }
};
