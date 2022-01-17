const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen().then(() => {
  console.log("Running");
});
