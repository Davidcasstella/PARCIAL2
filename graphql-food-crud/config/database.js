import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://jairoarmando:FvpyKzzDs4anFwMZ@cluster0.n99bjxu.mongodb.net/comidaDB?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB conectado - Base de datos: comidaDB');
  } catch (error) {
    console.error('Error al conectar MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;