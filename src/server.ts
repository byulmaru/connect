import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import schema from './schema';
import depthLimit from 'graphql-depth-limit';

const app = express();
const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(5)]
})

server.applyMiddleware({app, path: '/graphql'});

const port = 3429;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
