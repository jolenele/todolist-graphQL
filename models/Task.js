const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const Task = new GraphQLObjectType({
  name: 'Task',
  type: 'Query',
  fields: {
    id: { type: GraphQLID },
    task: { type: GraphQLString },
    date: { type: GraphQLString },
  },
});

exports.Task = Task;
