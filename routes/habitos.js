const express = require('express');
const router = express.Router();
const Habito = require('../models/Habito');

// 1. Obtener todos los hábitos (Ver)
router.get('/', async (req, res) => {
    try {
        const habitos = await Habito.find();
        res.json(habitos);
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

// 2. Crear un nuevo hábito (Alta)
router.post('/', async (req, res) => {
    const habito = new Habito({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    });
    try {
        const nuevoHabito = await habito.save();
        res.status(201).json(nuevoHabito);
    } catch (err) {
        res.status(400).json({ mensaje: err.message });
    }
});

// 3. Eliminar un hábito (Baja)
router.delete('/:id', async (req, res) => {
    try {
        await Habito.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Hábito eliminado' });
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

module.exports = router;
