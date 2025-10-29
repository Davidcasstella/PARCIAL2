import mongoose from 'mongoose';

const dishSchema = new mongoose.Schema({
  idDish: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  calories: {
    type: Number,
    required: true,
    min: 0
  },
  isVegetarian: {
    type: Boolean,
    required: true,
    default: false
  },
  value: {
    type: Number,
    required: true,
    min: 0
  },
  comments: {
    type: String,
    default: ""
  }
}, {
  timestamps: false,
  versionKey: '__v'
});

const Dish = mongoose.model('Dish', dishSchema);

export default Dish;