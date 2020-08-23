const { db } = require('../database/db');
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const { User } = require('./User');
const { Task } = require('./Task');

const QueryRoot = new GraphQLObjectType({
  name: 'QueryRoot',
  type: 'Query',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => 'Todo list is running',
    },
    tasks: {
      type: Task,
      resolve: () => {
        const query = `SELECT * FROM tasks`;
        return db
          .one(query, values)
          .then((res) => res)
          .catch((err) => err);
      },
    },
    users: {
      type: User,
      resolve: () => {
        const query = `SELECT * FROM users`;
        return db
          .one(query, values)
          .then((res) => res)
          .catch((err) => err);
      },
    },
    user: {
      type: User,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        const query = `SELECT * FROM users WHERE id=$1`;
        const values = [args.id];
        return db
          .one(query, values)
          .then((res) => res)
          .catch((err) => err);
      },
    },
  }),
});

exports.QueryRoot = QueryRoot;
