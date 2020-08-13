const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const host = 'localhost';
const PORT = process.env.PORT || 5000;
const app = express();
var express_graphql = require('express-graphql').graphqlHTTP;
var { buildSchema } = require('graphql');
dotenv.config();

// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
var root = {
  message: () => 'Todo list server running',
};

app.use(
  '/graphql',
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.use(cors());
app.listen(PORT, host, () => {
  console.log(`Server is running on http://${host}:${PORT}`);
});
