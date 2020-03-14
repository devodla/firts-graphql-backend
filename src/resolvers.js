const User = require("./schemas/UserSchema");

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },

  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email }),
  }
};
