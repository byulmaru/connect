import Express from 'express';
import {ApolloServer} from 'apollo-server-express';
import schema from './schema';
import depthLimit from 'graphql-depth-limit';
import bodyParser from 'body-parser';
import {readdirSync} from 'fs';
import {join} from 'path';

const app = Express();
const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(5)]
});

server.applyMiddleware({app, path: '/graphql'});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

readdirSync(join(__dirname, 'routes')).forEach(async(name) => {
    app.use((await import(join(__dirname, 'routes', name))).default);
});

const port = 3429;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
