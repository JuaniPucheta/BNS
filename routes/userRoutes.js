import express from 'express';
const router = express.Router();
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        name:
 *          type: string
 *        age:
 *          type: integer
 *      example:
 *        id: 1
 *        name: Juan Ignacio
 *        age: 23
 */

//* Definimos las rutas de usuario
router.get('/users/', getUsers);
router.get('/users/:id', getUserById);
router.post('/users/', createUser);
router.put('/users/:id', updateUser);

/**
* @swagger
* /users:
*  post:
*   summary: create a new user
*   tags: [User]
*   requestBody:
*    required: true
*    content:
*     application/json:
*      schema:
*        type: object
*        $ref: '#/components/schemas/User'
*   responses:
*     200:
*       description: new user created
*/

router.delete('/users/:id', deleteUser);

export default router;