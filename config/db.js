const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Conexión exitosa a MongoDB Atlas');
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos:', error);
        process.exit(1); 
    }
};

module.exports = conectarDB;
