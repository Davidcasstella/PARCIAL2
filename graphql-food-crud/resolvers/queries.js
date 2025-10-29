import Dish from '../models/Food.js';

export const queries = {
  
  getAllDishes: async () => {
    const dishes = await Dish.find();
    return dishes;
  },

  getDishById: async (parent, args) => {
    const dish = await Dish.findById(args.id);
    if (!dish) {
      throw new Error('Platillo no encontrado');
    }
    return dish;
  },

  getDishesBetweenCalories: async (parent, args) => {
    const { min, max } = args;
    
    const dishes = await Dish.find({
      calories: { $gte: min, $lte: max }
    });
    
    return dishes;
  }
};