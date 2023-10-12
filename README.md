# API REST para Administrar Usuarios en Memoria

Este proyecto es una API REST simple desarrollada en node.js que permite realizar operaciones CRUD en una colección de usuarios que se almacenan en memoria. Es un ejercicio para configurar una API REST básica y realizar operaciones CRUD en recursos de usuario.

## Configuración

1. Tener `node.js` instalado en tu sistema.
2. Clona o descarga este repositorio.

## Uso de la API

Se detallan los endpoints disponibles en esta API y cómo usarlos:

### Obtener todos los usuarios

**URL:** `/users`
**Método:** GET
**Descripción:** Obtener una lista de todos los usuarios almacenados en memoria.

### Crear un nuevo usuario

**URL:** `/users`
**Método:** POST
**Descripción:** Para crear un nuevo usuario.

### Obtener un usuario específico

**ULR:** `/users/:id`
**Método:** GET
**Descripción:** Obtener un usuario específico almacenado en memoria.

### Actualizar un usuario

**ULR:** `/users/:id`
**Método:** PUT
**Descripción:** Actualizar un usuario específico almacenado en memoria.

### Eliminar un usuario

**ULR:** `/users/:id`
**Método:** DELETE
**Descripción:** Eliminar un usuario específico almacenado en memoria.

Ejemplo de solicitud:
```json
POST /users
{
  "nombre": "Nombre del usuario",
  "edad": 30
}
```

### Licencia
Este proyecto está bajo la Licencia MIT
