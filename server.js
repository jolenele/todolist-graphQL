const graphql = require('graphql');
const express = require('express');
const expressGraphQl = require('express-graphql').graphqlHTTP;
const { GraphQLSchema } = graphql;
const { QueryRoot } = require('./models/Query');
const { MutationRoot } = require('./models/Mutation');

const schema = new GraphQLSchema({
  query: QueryRoot,
  mutation: MutationRoot,
});

var app = express();
app.use(
  '/',
  expressGraphQl({
    schema: schema,
    graphiql: true,
  })
);

app.listen(5000, () => console.log('GraphQL server running on localhost:5000'));

// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const graphql = require('graphql');
// const joinMonster = require('join-monster');
// const host = 'localhost';
// const PORT = process.env.PORT || 5000;
// // const app = express();
// const graphqlHTTP = require('express-graphql').graphqlHTTP;
// const { buildSchema } = require('graphql');
// const graphqlExpress = require('graphql-server-express').graphqlExpress;
// const graphiqlExpress = require('graphql-server-express').graphiqlExpress;
// dotenv.config();

// const schema = new graphql.GraphQLSchema({
//   query: QueryRoot,
//   mutation: MutationRoot,
// });
// const app = express();
// app.use(
//   '/api',
//   graphqlHTTP({
//     schema: schema,
//     graphiql: true,
//   })
// );
// app.listen(4000);
// // const GraphQLServer = app.use(cors());
// // GraphQLServer.get('/tasks', (req, res) => {
// //   res.sendStatus(200).json({
// //     success: true,
// //     count: items.length,
// //     data: res.bodyParser,
// //   });
// // });
// // GraphQLServer.use(
// //   '/graphiql',
// //   graphiqlExpress({
// //     endpointURL: '/graphql',
// //   })
// // );

// // // graphql endpoint
// // GraphQLServer.use('/', bodyParser.json(), graphqlExpress({ schema: schema }));

// // GraphQLServer.listen(PORT, host, () => {
// //   console.log(`GraphQL Server is running on http://${host}:${PORT}`);
// // });
