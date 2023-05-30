import { ApolloServer, gql } from 'apollo-server';


// Define the schema
const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }

  type User {
    id: ID!
    email: String!
    password: String!
  }

  type Blog {
    id: ID!
    title: String!
    description: String!
    completed: Boolean!
    ownerId: ID!
  }

  type BlogResult {
    errors: [String]
    blog: Blog
  }

  type BlogsResult {
    errors: [String]
    blogs: [Blog]
  }

  type InsertResult {
    errors: [String]
    id: ID
  }

  type TokenResult {
    errors: [String]
    token: String
  }

  type Query {
    blogs: BlogsResult!
    blog(blogId: ID!): BlogResult!
  }

  type Mutation {
    createBlog(title: String!, description: String!): InsertResult!
    createUser(email: String!, password: String!): InsertResult!
    createToken(email: String!, password: String!): TokenResult!
  }

  type Subscription {
    reviewBlog(token: String!): InsertResult!
  }
`;

// Define resolvers for the schema
const resolvers = {
  Query: {
    blogs: () => {
        return { blogs };
      },
      blog: (parent, { blogId }) => {
        const blog = blogs.find((blog) => blog.id === blogId);
      
        if (!blog) {
          return {
            errors: ['Blog not found.'],
            blog: null,
          };
        }
      
        return {
          errors: [],
          blog,
        };
      },
  },
  Mutation: {
    createBlog: (parent, { title, description }) => {
      // Your logic to create a blog goes here
    },
    createUser: (parent, { email, password }) => {
      // Your logic to create a user goes here
    },
    createToken: (parent, { email, password }) => {
      // Your logic to create a token goes here
    },
  },
  Subscription: {
    reviewBlog: (parent, { token }) => {
      // Your logic for the blog review subscription goes here
    },
  },
};

// Sample data
const blogs = [
    {
      id: '1',
      title: 'Sample Blog 1',
      description: 'This is the first sample blog.',
      completed: false,
      ownerId: '1',
    },
    {
      id: '2',
      title: 'Sample Blog 2',
      description: 'This is the second sample blog.',
      completed: true,
      ownerId: '2',
    },
  ];
  
  const users = [
    {
      id: '1',
      email: 'user1@example.com',
      password: 'password1',
    },
    {
      id: '2',
      email: 'user2@example.com',
      password: 'password2',
    },
  ];

// Create an Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
