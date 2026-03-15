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

router.patch('/:id/completar', async (req, res) => {
    try {
        const habito = await Habito.findById(req.params.id);
        const ahora = new Date();
        const ultimaActualizacion = habito.ultimaActualizacion ? new Date(habito.ultimaActualizacion) : null;

        if (!ultimaActualizacion) {
            habito.diasConsecutivos = 1;
        } else {
            const diferenciaHoras = (ahora - ultimaActualizacion) / (1000 * 60 * 60);

            if (diferenciaHoras > 48) {
                habito.diasConsecutivos = 1;
            } else if (diferenciaHoras > 24) {
                habito.diasConsecutivos += 1;
            }
            
        }

        habito.ultimaActualizacion = ahora;
        const actualizado = await habito.save();
        res.json(actualizado);
    } catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

module.exports = router;
