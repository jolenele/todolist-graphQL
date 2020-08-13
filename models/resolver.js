// const { Pool } = require('pg');
// const pool = new Pool({
//   user: 'me',
//   host: 'localhost',
//   database: 'api',
//   password: 'password',
//   port: 5432,
// });

const psql = require('../database/dbAdapter').psql;
exports.resolver = {
  Query: {
    users(_, args, ctx) {
      const usersQuery = 'select id, name, email from users';
      return psql.manyOrNone(usersQuery);
    },
  },
};
