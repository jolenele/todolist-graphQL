const graphql = require('graphql');
const Query = require('./Query.js');
const Mutation = require('./Mutation');
const schema = new graphql.GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

module.exports = schema;

// const GraphQLSchema = graphql.GraphQLSchema;
// const GraphQLObjectType = graphql.GraphQLObjectType;
// const GraphQLString = graphql.GraphQLString;
// const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

// const resolver = require('./resolver').resolver;

// const typeDefs = `
//   type Task {
//     id: String!
//     task: String!
//     date: String!
//   }
//   type Query {
//     tasks: [Task]!
//   }
// `;

// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       id: {
//         type: GraphQLString,
//         resolve() {
//           return 'world';
//         },
//       },
//     },
//   }),
// });

// module.exports;
