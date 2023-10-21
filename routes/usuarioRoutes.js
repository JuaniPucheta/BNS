import express from "express";
const router = express.Router();
import usuarioControllers from "../controllers/usuarioControllers.js";

/**
 * @swagger
 *  components:
 *      schemas:
 *          Usuarios:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                  name:
 *                      type: string
 *                  age:
 *                      type: integer
 *              example:
 *                  id: 1
 *                  name: Juan
 *                  age: 25
 *
 *
 */

/**
 * @swagger
 * /allusers:
 *  get:
 *    summary: Devuelve todos los usuarios
 *    tags: [Usuarios]
 *    responses:
 *      200:
 *        description: Todos los usuarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Usuarios'
 */
router.get("/allusers", usuarioControllers.getUsers);

/**
 * @swagger
 * /oneuser/{id}:
 *  get:
 *   summary: Devuelve un solo usuario
 *   tags: [Usuarios]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: number
 *       required: true
 *       description: El id del usuario
 *   responses:
 *     200:
 *       description: Usuario relacionado al id provisto
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Usuarios'
 *     404:
 *       description: Usuario no encontrado
 */
router.get("/oneuser/:id", usuarioControllers.getUser);

/**
 * @swagger
 * /usuarios:
 *  post:
 *      summary: Crea un nuevo usuario
 *      tags: [Usuarios]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Usuarios'
 *                      properties:
 *                          nombre:
 *                              type: string
 *                          edad:
 *                              type: integer
 *                  example:
 *                       nombre: Pepa
 *                       edad: 23
 *
 *      responses:
 *          200:
 *              description: Nuevo usuario creado
 */
router.post("/create", usuarioControllers.createUser);

/**
 * @swagger
 * /update/:id:
 *  put:
 *      summary: Actualiza un usuario
 *      tags: [Usuarios]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Usuarios'
 *                      properties:
 *                          nombre:
 *                              type: string
 *                          edad:
 *                              type: integer
 *                  example:
 *                       nombre: Pepita
 *                       edad: 25
 *
 *      responses:
 *          200:
 *              description: Usuario actualizado
 */
router.patch("/update/:id", usuarioControllers.updateUser);

/**
 * @swagger
 * /delete/{id}:
 *  delete:
 *   summary: Borra un usuario
 *   tags: [Usuarios]
 *   parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: number
 *       required: true
 *       description: El id del usuario
 *   responses:
 *     204:
 *       description: Usuario borrado
 *     404:
 *        description: Usuario no encontrado
 */
router.delete("/delete/:id", usuarioControllers.deleteUser);

export default router;
