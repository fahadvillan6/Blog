import express from 'express';
import cors from 'cors';
import mongoose from './mongoConnection.js';
import userrouter from './routes/userRoutes.js';
import bodyParser from 'body-parser';
const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/', userrouter);
app.listen(3000, () => {
  console.log('server is  listening on 3000');
});
