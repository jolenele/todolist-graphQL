const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const host = 'localhost';
const PORT = process.env.PORT || 5000;
const app = express();
const express_graphql = require('express-graphql').graphqlHTTP;
const { buildSchema } = require('graphql');
const graphqlExpress = require('graphql-server-express').graphqlExpress;
const graphiqlExpress = require('graphql-server-express').graphiqlExpress;
dotenv.config();

// GraphQL schema
const schema = require('./models/schema').schema;
const GraphQLServer = app.use(cors());
GraphQLServer.get('/users', (req, res) => {
  res.sendStatus(200);
});
GraphQLServer.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
  })
);

// graphql endpoint
GraphQLServer.use('/', bodyParser.json(), graphqlExpress({ schema }));

GraphQLServer.listen(PORT, host, () => {
  console.log(`GraphQL Server is running on http://${host}:${PORT}`);
});
