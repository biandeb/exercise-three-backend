import express from 'express';

import morgan from 'morgan';

import cors from 'cors';

import colorRouter from './routes/colorRoutes.js';

// Iniciar la aplicación
const app = express();

// Configuraciones generales
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Rutas
app.use(colorRouter);

// Iniciar loop del servidor
app.listen(PORT, () => {
    console.log(`El servidor se está ejecutando en el puerto ${PORT}`);
});