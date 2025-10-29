import Dish from '../models/Food.js';

export const mutations = {
  
  createDish: async (parent, args) => {
    const { idDish, name, calories, isVegetarian, value, comments } = args;
    
   
    const existe = await Dish.findOne({ idDish });
    if (existe) {
      throw new Error('Ya existe un platillo con ese idDish');
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
  },

  updateDish: async (parent, args) => {
    const { id, ...datos } = args;
    
    const dish = await Dish.findById(id);
    if (!dish) {
      throw new Error('Platillo no encontrado');
    }
    
    
    if (datos.idDish && datos.idDish !== dish.idDish) {
      const existe = await Dish.findOne({ idDish: datos.idDish });
      if (existe) {
        throw new Error('Ya existe un platillo con ese idDish');
      }
    }
    
    const dishActualizado = await Dish.findByIdAndUpdate(
      id,
      datos,
      { new: true }
    );
    
    return dishActualizado;
  },

  deleteDish: async (parent, args) => {
    const { id } = args;
    
    const dish = await Dish.findByIdAndDelete(id);
    
    if (!dish) {
      throw new Error('Platillo no encontrado');
    }
    
    return dish;
  }
};