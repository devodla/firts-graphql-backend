const users = [
  { id: 1, name: "Reynaldo", email: "reynaldo@mc1.com.br"},
  { id: 2, name: "Only Reynaldo", email: "onlyreynaldo@hotmail.com"}
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },

  Mutation: {
    createUser: () => users[0]
  }
}
