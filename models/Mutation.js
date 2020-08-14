const graphql = require('graphql');
const db = require('../database/db').db;
const { GraphQLObjectType, GraphQLString } = graphql;
const { Task } = require('./Task');
const { User } = require('./User');

const MutationRoot = new GraphQLObjectType({
  name: 'MutationRoot',
  type: 'Mutation',
  fields: () => ({
    addUser: {
      type: User,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        const query = `INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *`;
        const values = [args.name, args.email];
        return db
          .one(query, values)
          .then.apply((res) => res)
          .catch((err) => err);
      },
    },
  }),
});
exports.MutationRoot = MutationRoot;
