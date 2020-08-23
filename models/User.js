const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const User = new GraphQLObjectType({
  name: 'User',
  type: 'Query',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

exports.User = User;
