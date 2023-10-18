import express from 'express';
import { createPool } from 'mysql2/promise';

//* Importo los swagger
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

//* Importo path para poder usar __dirname
import path from 'path';    //? Para poder usar __dirname
import { fileURLToPath } from 'url';

//* Importo userRoutes
import userRoutes from './routes/userRoutes.js';   

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API de usuarios',
            version: '1.0.0',
            description: 'API de usuarios',
        },
        servers: [
            {
                url: 'http://localhost:5000',
            },
        ],
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`], //? archivos que contienen anotaciones 
};

const app = express();
const PORT = 2000;

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test_bns',
};

app.use(express.json());

export const pool = createPool(dbConfig);

pool.getConnection()
.then((connection) => {
    console.log('Conectado a la BD');
    connection.release();
})
.catch((err) => {
    console.error('Error al conectarse a la BD', err);
});

app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`);
});

app.use('/users', userRoutes);
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(options)));