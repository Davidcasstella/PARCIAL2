export const validateDishData = (data) => {
  const { idDish, name, calories, isVegetarian, value, comments } = data;
  
 
  if (idDish !== undefined) {
    if (!idDish || idDish.trim().length === 0) {
      throw new Error('idDish cannot be empty');
    }
  }
  
  
  if (name !== undefined) {
    if (!name || name.trim().length === 0) {
      throw new Error('Name cannot be empty');
    }
    if (name.length > 200) {
      throw new Error('Name is too long (max 200 characters)');
    }
  }
  
  
  if (calories !== undefined) {
    if (typeof calories !== 'number' || isNaN(calories)) {
      throw new Error('Calories must be a valid number');
    }
    if (calories < 0) {
      throw new Error('Calories cannot be negative');
    }
  }
  
  
  if (isVegetarian !== undefined) {
    if (typeof isVegetarian !== 'boolean') {
      throw new Error('isVegetarian must be a boolean value');
    }
  }
  
 
  if (value !== undefined) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('Value must be a valid number');
    }
    if (value < 0) {
      throw new Error('Value cannot be negative');
    }
  }
  
  
  if (comments !== undefined && comments !== null) {
    if (typeof comments !== 'string') {
      throw new Error('Comments must be a string');
    }
    if (comments.length > 500) {
      throw new Error('Comments are too long (max 500 characters)');
    }
  }
  
  return true;
};