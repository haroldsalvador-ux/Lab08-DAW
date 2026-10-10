import express from 'express';
import cors from 'cors';
// Nota: la guía importa './routes/userRoutes.js', pero el archivo creado se llama users.routes.js
import userRoutes from './routes/users.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

export default app;
