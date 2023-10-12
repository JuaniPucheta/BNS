const users = [];
let lastUserId = 0; 

exports.getUsers = (req, res) => {
    res.status(200).json({ message: 'Usuarios obtenidos correctamente', data: users });   
};

exports.getUser = (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id === Number(id));
    if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(200).json({ message: 'Usuario obtenido correctamente', data: user });
};

exports.createUser = (req, res) => {
    const { nombre, edad } = req.body;
    lastUserId++;
    const newUser = { id: lastUserId, nombre, edad };
    users.push(newUser);
    res.status(201).json({ message: 'Usuario creado exitosamente', data: newUser });
  };

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const user = users.find((u) => u.id === userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  
    const { nombre, edad } = req.body;
    user.nombre = nombre || user.nombre;
    user.edad = edad || user.edad;
    res.status(200).json({ message: 'Usuario actualizado correctamente', data: user });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    const userIndex = users.findIndex((u) => u.id === userId);
    if (userIndex === -1) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    const deletedUser = users.splice(userIndex, 1)[0];
    res.status(200).json({ message: 'Usuario eliminado exitosamente', data: deletedUser });
};
