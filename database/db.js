require('dotenv').config();
const pgPromise = require('pg-promise');

const pgp = pgPromise({});

const config = {
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
};

const db = pgp(config);

exports.db = db;

// const { Client } = require('pg');
// const client = new Client({
//   user: 'me',
//   host: 'localhost',
//   database: 'api',
//   password: 'password',
//   port: 5432,
// });
// module.exports = client;

// const connectDB = async () => {
//   try {
//     await client.connect();
//     console.log('Database connected...');
//   } catch (err) {
//     console.log(err.message);
//     process.exit(1);
//   }
// };
// module.exports = connectDB;
