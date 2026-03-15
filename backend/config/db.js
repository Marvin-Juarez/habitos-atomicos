const mongoose = require('mongoose');
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Conectado');
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};
module.exports = conectarDB;
