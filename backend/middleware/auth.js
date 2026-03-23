const jwt = require('jsonwebtoken');

// Esta función revisa si el usuario tiene permiso para ver sus hábitos
module.exports = function(req, res, next) {
    // Leemos el token que viene del frontend
    const token = req.header('x-auth-token');

    // Si no hay token, no lo dejamos pasar
    if (!token) {
        return res.status(401).json({ mensaje: 'No hay token, permiso denegado' });
    }

    try {
        // Validamos el token con nuestra clave
        const cifrado = jwt.verify(token, 'palabrasecreta');
        
        // Guardamos el id del usuario en la petición
        req.usuario = cifrado.id;
        next(); 
    } catch (error) {
        res.status(401).json({ mensaje: 'Token no válido' });
    }
};
