# Documentación de la Aplicación Node.js

## Dependencias

Tenés que tener instaladas las siguientes dependencias antes de ejecutar la aplicación:

- Node.js
- Express

Para instalar las dependencias, usa el siguiente comando:

npm install

## Archivo usuarioRoutes.js

Este archivo define las rutas de la aplicación para gestionar usuarios.

### Rutas Disponibles

- GET /allusers
  - Descripción: Obtiene todos los usuarios.
  - Uso: GET /allusers
  - Respuesta: Retorna un JSON con la lista de usuarios.

- GET /oneuser/:id
  - Descripción: Obtiene un usuario específico por su ID.
  - Uso: GET /oneuser/:id
  - Parámetros de la URL:
    - `id`: El ID del usuario que se desea obtener.
  - Respuesta:
    - Si el usuario se encuentra, retorna un JSON con la información del usuario.
    - Si el usuario no se encuentra, retorna un mensaje de error y un código de estado 404.

- POST /create
  - Descripción: Crea un nuevo usuario.
  - Uso: POST /create
  - Parámetros del cuerpo de la solicitud (en formato JSON):
    - `nombre`: El nombre del nuevo usuario.
    - `edad`: La edad del nuevo usuario.
  - Respuesta: Retorna un mensaje indicando que el nuevo usuario ha sido agregado.

- PATCH /update/:id
  - Descripción: Actualiza la información de un usuario existente.
  - Uso: PATCH /update/:id
  - Parámetros de la URL:
    - `id`: El ID del usuario que se desea actualizar.
  - Parámetros del cuerpo de la solicitud (en formato JSON):
    - `nombre`: El nuevo nombre del usuario.
    - `edad`: La nueva edad del usuario.
  - Respuesta:
    - Si el usuario se encuentra, retorna un JSON con la información actualizada del usuario.
    - Si el usuario no se encuentra, retorna un mensaje de error y un código de estado 404.

- DELETE /delete/:id
  - Descripción: Elimina un usuario existente.
  - Uso: DELETE /delete/:id
  - Parámetros de la URL:
    - `id`: El ID del usuario que se desea eliminar.
  - Respuesta:
    - Si el usuario se encuentra, retorna un JSON con la información del usuario eliminado.
    - Si el usuario no se encuentra, retorna un mensaje de error y un código de estado 404.

## Archivo usuarioControllers.js

Este archivo contiene las funciones controladoras que se encargan de manejar las solicitudes para usuarios.

- getUsers()
  - Descripción: Obtiene la lista de usuarios.
  - Respuesta: Retorna un JSON con la lista de usuarios.

- getUser(id)
  - Descripción: Obtiene un usuario específico por su ID.
  - Parámetros:
    - `id`: El ID del usuario que se desea obtener.
  - Respuesta:
    - Si el usuario se encuentra, retorna un JSON con la información del usuario.
    - Si el usuario no se encuentra, retorna un mensaje de error y un código de estado 404.

- createUser(nombre, edad)
  - Descripción: Crea un nuevo usuario.
  - Parámetros:
    - `nombre`: El nombre del nuevo usuario.
    - `edad`: La edad del nuevo usuario.
  - Respuesta: Retorna un mensaje indicando que el nuevo usuario ha sido agregado.

- updateUser(id, nombre, edad)
  - Descripción: Actualiza la información de un usuario existente.
  - Parámetros:
    - `id`: El ID del usuario que se desea actualizar.
    - `nombre`: El nuevo nombre del usuario.
    - `edad`: La nueva edad del usuario.
  - Respuesta:
    - Si el usuario se encuentra, retorna un JSON con la información actualizada del usuario.
    - Si el usuario no se encuentra, retorna un mensaje de error y un código de estado 404.

- deleteUser(id)
  - Descripción: Elimina un usuario existente.
  - Parámetros:
    - `id`: El ID del usuario que se desea eliminar.
  - Respuesta:
    - Si el usuario se encuentra, retorna un JSON con la información del usuario eliminado.
    - Si el usuario no se encuentra, retorna un mensaje de error y un código de estado 404.
   
## Ejecución de la Aplicación

Para ejecutar la aplicación, usa el siguiente comando:

node app.js

Esto iniciará el servidor y podrás acceder a la app a ingresando a: localhost:4000.









