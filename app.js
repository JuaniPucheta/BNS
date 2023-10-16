const express = require('express');
const usuarioRoutes = require('./routes/usuarios.js');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use(usuarioRoutes);

app.listen(port, () => {
    console.log(`Escuchando en ${port}`)
})