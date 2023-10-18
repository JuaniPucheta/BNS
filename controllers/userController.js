import { pool } from '../app.js';

const createUser = async (req, res) => {
    const { name, age } = req.body;
    try {
        const [result] = await pool.query('INSERT INTO users (name, age) VALUES (?, ?)', [name, age]);
        res.status(201).json({ id: result.insertId, name, age });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    try {
        await pool.query('UPDATE users SET name = ?, age = ? WHERE id = ?', [name, age, id]);
        res.status(200).json({ id, name, age });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM users WHERE id = ?', [id]);
        res.status(200).json({ message: `Usuario con id ${id} eliminado` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { createUser, getUsers, getUserById, updateUser, deleteUser };
