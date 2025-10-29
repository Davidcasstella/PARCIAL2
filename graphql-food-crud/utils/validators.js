export const validarDatos = (datos) => {
  const { idDish, name, calories, value } = datos;
  
  if (idDish && !idDish.trim()) {
    throw new Error('El idDish no puede estar vacío');
  }
  
  if (name && !name.trim()) {
    throw new Error('El nombre no puede estar vacío');
  }
  
  if (calories !== undefined && calories < 0) {
    throw new Error('Las calorías no pueden ser negativas');
  }
  
  if (value !== undefined && value < 0) {
    throw new Error('El valor no puede ser negativo');
  }
};