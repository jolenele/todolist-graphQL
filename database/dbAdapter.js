const pgPromise = require('pg-promise');

const connStr = 'postgresql://me@localhost:5432/api';

const pgp = pgPromise({});
const psql = pgp(connStr);

exports.psql = psql;
