import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://jairoarmando:FvpyKzzDs4anFwMZ@cluster0.n99bjxu.mongodb.net/foodDB?retryWrites=true&w=majority';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(' MongoDB Atlas connected successfully');
  } catch (error) {
    console.error(' MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;