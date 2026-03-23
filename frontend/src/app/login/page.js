'use client'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { entrarAlSistema } from '../../lib/features/authSlice';

export default function PaginaLogin() {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const dispatch = useDispatch();

    const manejarEnvio = (e) => {
        e.preventDefault();
        // Mandamos los datos al backend
        dispatch(entrarAlSistema({ email: correo, password: clave }));
        alert("Intentando entrar...");
    };

    return (
        <div className="flex flex-col items-center p-20 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>
            <form onSubmit={manejarEnvio} className="bg-white p-8 border rounded shadow-md w-80">
                <div className="mb-4">
                    <label className="block text-sm mb-1">Correo:</label>
                    <input 
                        type="email" 
                        className="border w-full p-2 rounded"
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm mb-1">Contraseña:</label>
                    <input 
                        type="password" 
                        className="border w-full p-2 rounded"
                        onChange={(e) => setClave(e.target.value)}
                        required
                    />
                </div>
                <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
                    Entrar
                </button>
            </form>
        </div>
    );
}
