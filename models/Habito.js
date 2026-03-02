const mongoose = require('mongoose');

const HabitoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    diasConsecutivos: { type: Number, default: 0 },
    completadoHoy: { type: Boolean, default: false },
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Habito', HabitoSchema);
