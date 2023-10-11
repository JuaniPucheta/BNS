const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//* Definimos las rutas de usuario
router.get('/', usuarioController.getUsers);
router.get('/:id', usuarioController.getUser);
router.get('/create', usuarioController.createUser);
router.get('/:id', usuarioController.updateUser);
router.get('/:id', usuarioController.deleteUser);

module.exports = router;