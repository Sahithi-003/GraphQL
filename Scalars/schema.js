const {gql} = require("apollo-server");
exports.typeDefs=gql`
    type Query{
        cinemas:[Movie!]!
    }
    type Movie{
        Title: String!
        ReleaseDate: String!
        MajorGenre: String!
        IMDBRating: Float!
        IMDBVotes: Int!
    }
    `;