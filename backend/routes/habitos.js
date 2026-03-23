const express = require('express');
const router = express.Router();
const Habito = require('../models/Habito');
const auth = require('../middleware/auth'); // El "portero" que revisa el token

// 1. Obtener hábitos (SOLO los del usuario logueado)
router.get('/', auth, async (req, res) => {
    try {
        // Usamos req.usuario que viene del middleware para que yo no vea tus hábitos
        const habitos = await Habito.find({ usuario: req.usuario });
        res.json(habitos);
    } catch (err) {
        res.status(500).json({ mensaje: "No se pudieron jalar los hábitos" });
    }
});

// 2. Crear un nuevo hábito (Guardando quién lo creó)
router.post('/', auth, async (req, res) => {
    const habito = new Habito({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        usuario: req.usuario // <--- IMPORTANTE: Guardamos el ID del usuario que está logueado
    });
    try {
        const nuevoHabito = await habito.save();
        res.status(201).json(nuevoHabito);
    } catch (err) {
        res.status(400).json({ mensaje: "Error al crear el hábito" });
    }
});

// 3. Eliminar un hábito
router.delete('/:id', auth, async (req, res) => {
    try {
        await Habito.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Hábito borrado' });
    } catch (err) {
        res.status(500).json({ mensaje: "No se pudo borrar" });
    }
});

module.exports = router;
