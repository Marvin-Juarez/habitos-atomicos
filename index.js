require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');

const app = express();

// Conectar a la base de datos
conectarDB();

// Middlewares
app.use(cors());
app.use(express.json()); 
// Rutas
app.use('/api/habitos', require('./routes/habitos'));

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Servidor de Hábitos Atómicos funcionando 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
