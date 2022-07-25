const { movies } = require("./db");
const {ApolloServer} = require("apollo-server");
const {typeDefs} = require("./schema")
const {Query}=require("./resolvers/Query")

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query
    },
    context:{
        movies
    },
});
server.listen().then(({url})=>{
    console.log("Server is Ready at "+url);
});