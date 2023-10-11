const express = require('express');

const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

//* Definimos las rutas de usuario
router.get('/allusers', usuarioController.getUsers);
router.get('/oneuser/:id', usuarioController.getUser);
router.post('/create', usuarioController.createUser);
router.patch('/update/:id', usuarioController.updateUser);
router.delete('/delete/:id', usuarioController.deleteUser);

module.exports = router;