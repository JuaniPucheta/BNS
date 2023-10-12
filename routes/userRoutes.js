const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//* Definimos las rutas de usuario
router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;