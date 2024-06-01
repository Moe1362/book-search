

const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: String!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    input BookInput {
        bookId: String!
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(book: BookInput): User
        removeBook(bookId: String!): User
    }

`;

module.exports = typeDefs;

