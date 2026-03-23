const mongoose = require('mongoose');

const HabitoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    diasConsecutivos: { type: Number, default: 0 },
    ultimaActualizacion: { type: Date, default: null },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Habito', HabitoSchema);
