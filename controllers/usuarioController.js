// me traje el array porque no pregunte como lo importabamos. 
// tenemos que ver como importar, si con require o import...
const users = [
    { id: 1, nombre: 'Usuario 1', edad: 20 },
    { id: 2, nombre: 'Usuario 2', edad: 30 },
    { id: 3, nombre: 'Usuario 3', edad: 40 },
]


const getUsers = async (req, res) => {
    res.json(users);
}

const getUser = async (req, res) => {
    const {id} = req.params;
    //Tengo que pasar a int porque como param ingresa string
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({
            message: 'Usuario no encontrado'
        })
    }
}

const createUser = async (req, res) => {
    const {nombre, edad} = req.body;
    const newUser = {
        id: users.length + 1,
        nombre,
        edad
    }
    users.push(newUser);
    res.send(`Nuevo usuario agregado`);
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {nombre, edad} = req.body;
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        user.nombre = nombre;
        user.edad = edad;
        res.json(user);
    } else {
        res.status(404).json({
            message: 'Usuario no encontrado'
        })
    }

}

const deleteUser = async (req, res) => {
    const {id} = req.params;
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        const index = users.indexOf(user);
        users.splice(index, 1);
        res.json(user);
    } else {
        res.status(404).json({
            message: 'Usuario no encontrado'
        })
    }
}

module.exports = {
    getUsers, getUser, createUser, updateUser, deleteUser
};