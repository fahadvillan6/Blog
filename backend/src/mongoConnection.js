import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
try {
  mongoose.connect(process.env.mongo_url);
  const connection = mongoose.connection;
  connection.on('connected', () => {
    console.log('connected');
  });
  connection.on('error', () => {
    console.log('error');
  });
} catch (error) {
  console.log('object', error);
}
export default mongoose;
