import Dish from '../models/Food.js';

export const queries = {
  
  getAllDishes: async () => {
    try {
      const dishes = await Dish.find();
      return dishes;
    } catch (error) {
      throw new Error(`Error fetching dishes: ${error.message}`);
    }
  },

  
  getDishById: async (parent, args) => {
    try {
      const dish = await Dish.findById(args.id);
      if (!dish) {
        throw new Error('Dish not found');
      }
      return dish;
    } catch (error) {
      throw new Error(`Error fetching dish by ID: ${error.message}`);
    }
  },

  
  getDishesBetweenCalories: async (parent, args) => {
    try {
      const { min, max } = args;
      
      if (min < 0 || max < 0) {
        throw new Error('Calories values must be positive');
      }
      
      if (min > max) {
        throw new Error('Minimum calories cannot be greater than maximum calories');
      }

      const dishes = await Dish.find({
        calories: {
          $gte: min,
          $lte: max
        }
      });
      
      return dishes;
    } catch (error) {
      throw new Error(`Error fetching dishes by calorie range: ${error.message}`);
    }
  }
};