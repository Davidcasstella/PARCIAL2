import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolvers/resolvers.js';
import connectDB from './config/database.js';

await connectDB();

const typeDefs = `#graphql
  type Dish {
    id: ID!
    idDish: String!
    name: String!
    calories: Float!
    isVegetarian: Boolean!
    value: Float!
    comments: String
  }

  type Query {
    getAllDishes: [Dish]!
    getDishById(id: ID!): Dish
    getDishesBetweenCalories(min: Float!, max: Float!): [Dish]!
  }

  type Mutation {
    createDish(
      idDish: String!
      name: String!
      calories: Float!
      isVegetarian: Boolean!
      value: Float!
      comments: String
    ): Dish!
    
    updateDish(
      id: ID!
      idDish: String
      name: String
      calories: Float
      isVegetarian: Boolean
      value: Float
      comments: String
    ): Dish!
    
    deleteDish(id: ID!): Dish!
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);