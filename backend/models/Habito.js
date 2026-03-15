const mongoose = require('mongoose');
const HabitoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    diasConsecutivos: { type: Number, default: 0 },
    ultimaActualizacion: { type: Date, default: null }
});
module.exports = mongoose.model('Habito', HabitoSchema);
