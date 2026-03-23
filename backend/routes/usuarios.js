const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

// Registro con HASH
router.post('/registro', async (req, res) => {
    try {
        const { email, password } = req.body;
        const nuevoUsuario = new Usuario({ email, password });
        await nuevoUsuario.save();
        res.status(201).json({ mensaje: "Usuario registrado con hash exitosamente" });
    } catch (error) {
        res.status(400).json({ mensaje: "Error al registrar usuario" });
    }
});

// Login con HASH y entrega de TOKEN 
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({ email });
        
        if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });

        const esValido = await bcrypt.compare(password, usuario.password);
        if (!esValido) return res.status(401).json({ mensaje: "Contraseña incorrecta" });

        // ESTO ES LO NUEVO PARA LA SEMANA 5 
        // El "carnet" (token) que dura 2 horas
        const token = jwt.sign(
            { id: usuario._id }, 
            'palabrasecreta', 
            { expiresIn: '2h' }
        );

        // Mandamos el mensaje de éxito junto con el token
        res.json({ 
            mensaje: "Login exitoso", 
            token: token // Este token lo recibirá el frontend
        });
        
    } catch (error) {
        res.status(500).json({ mensaje: "Error en el servidor" });
    }
});

module.exports = router;
