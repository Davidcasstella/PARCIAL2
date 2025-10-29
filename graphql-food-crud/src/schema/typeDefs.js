export const typeDefs = `#graphql
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