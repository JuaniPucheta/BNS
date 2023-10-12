const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Escuchando en ${port}`)
})