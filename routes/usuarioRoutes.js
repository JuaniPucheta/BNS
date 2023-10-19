const express = require('express');

const router = express.Router();

const usuarioController = require('../controllers/usuarioControllers.js');

//* Definimos las rutas de usuario
router.get('/allusers', usuarioControllers.getUsers);
router.get('/oneuser/:id', usuarioControllers.getUser);
router.post('/create', usuarioControllers.createUser);
router.patch('/update/:id', usuarioControllers.updateUser);
router.delete('/delete/:id', usuarioControllers.deleteUser);

module.exports = router;
