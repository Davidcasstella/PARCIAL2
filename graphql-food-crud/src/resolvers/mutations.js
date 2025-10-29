import Dish from '../models/Food.js';
import { validateDishData } from '../utils/validators.js';

export const mutations = {
  
  createDish: async (parent, args) => {
    try {
      const { idDish, name, calories, isVegetarian, value, comments } = args;
      
      
      validateDishData({ idDish, name, calories, isVegetarian, value, comments });
      
      
      const existingDish = await Dish.findOne({ idDish });
      if (existingDish) {
        throw new Error(`Dish with idDish ${idDish} already exists`);
      }
      
      
      const newDish = new Dish({
        idDish,
        name,
        calories,
        isVegetarian,
        value,
        comments: comments || ""
      });
      
      await newDish.save();
      return newDish;
    } catch (error) {
      throw new Error(`Error creating dish: ${error.message}`);
    }
  },

 
  updateDish: async (parent, args) => {
    try {
      const { id, ...updateData } = args;
      
      
      if (Object.keys(updateData).length === 0) {
        throw new Error('At least one field must be provided for update');
      }
      
      
      const currentDish = await Dish.findById(id);
      if (!currentDish) {
        throw new Error('Dish not found');
      }
      
      
      if (updateData.idDish && updateData.idDish !== currentDish.idDish) {
        const existingDish = await Dish.findOne({ idDish: updateData.idDish });
        if (existingDish) {
          throw new Error(`Dish with idDish ${updateData.idDish} already exists`);
        }
      }
      
     
      const dataToValidate = {
        idDish: updateData.idDish ?? currentDish.idDish,
        name: updateData.name ?? currentDish.name,
        calories: updateData.calories ?? currentDish.calories,
        isVegetarian: updateData.isVegetarian ?? currentDish.isVegetarian,
        value: updateData.value ?? currentDish.value,
        comments: updateData.comments ?? currentDish.comments
      };
      
      validateDishData(dataToValidate);
      
     
      const updatedDish = await Dish.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      );
      
      return updatedDish;
    } catch (error) {
      throw new Error(`Error updating dish: ${error.message}`);
    }
  },

  
  deleteDish: async (parent, args) => {
    try {
      const { id } = args;
      
      const deletedDish = await Dish.findByIdAndDelete(id);
      
      if (!deletedDish) {
        throw new Error('Dish not found');
      }
      
      return deletedDish;
    } catch (error) {
      throw new Error(`Error deleting dish: ${error.message}`);
    }
  }
};