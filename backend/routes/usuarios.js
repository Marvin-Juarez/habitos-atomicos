const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

// Registro con HASH (Requisito Semana 4)
router.post('/registro', async (req, res) => {
    try {
        const { email, password } = req.body;
        // El hash se hace automáticamente en el modelo que creamos antes
        const nuevoUsuario = new Usuario({ email, password });
        await nuevoUsuario.save();
        res.status(201).json({ mensaje: "Usuario registrado con hash exitosamente" });
    } catch (error) {
        res.status(400).json({ mensaje: "Error al registrar usuario" });
    }
});

// Login con HASH
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({ email });
        if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });

        const esValido = await bcrypt.compare(password, usuario.password);
        if (!esValido) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

        res.json({ mensaje: "Login exitoso", usuarioId: usuario._id });
    } catch (error) {
        res.status(500).json({ mensaje: "Error en el servidor" });
    }
});

module.exports = router;
