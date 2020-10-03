import {IResolvers} from 'graphql-tools';
import {GraphQLSchema} from 'graphql';
import {loadSchemaSync} from '@graphql-tools/load';
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader';
import {addResolversToSchema} from '@graphql-tools/schema';
import {join} from 'path';

const resolvers: IResolvers = {
    Query: {
        helloWorld(): string {
            return 'Hello world';
        }
    }
}
const schema = loadSchemaSync(join(__dirname, 'schema.graphql'), {loaders: [new GraphQLFileLoader()]});
const ResolvableSchema: GraphQLSchema = addResolversToSchema({resolvers, schema});

export default ResolvableSchema;