'use client'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHabitos, completarHabito, crearNuevoHabito } from '../lib/features/habitosSlice';

export default function Home() {
    const [nombre, setNombre] = useState('');
    const dispatch = useDispatch();
    const habitos = useSelector((state) => state.habitos.items);
    const token = useSelector((state) => state.auth.token); // Vemos si el usuario entró

    useEffect(() => {
        if (token) dispatch(fetchHabitos());
    }, [dispatch, token]);

    const guardar = (e) => {
        e.preventDefault();
        dispatch(crearNuevoHabito({ nombre: nombre }));
        setNombre(''); // Limpiamos el cuadrito
    };

    // Si no ha hecho login, le avisamos
    if (!token) return <p className="p-20 text-center font-bold">Inicia sesión para ver tus hábitos.</p>;

    return (
        <main className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Mis Hábitos</h1>

                {/* Formulario para agregar nuevo hábito */}
                <form onSubmit={guardar} className="mb-10 flex gap-2">
                    <input 
                        type="text" 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Escribe un nuevo hábito..."
                        className="border p-2 flex-1 rounded shadow-sm"
                        required
                    />
                    <button className="bg-green-600 text-white px-4 py-2 rounded font-bold">
                        Añadir
                    </button>
                </form>

                {/* Lista de hábitos */}
                <div className="space-y-4">
                    {habitos.map((h) => {
                        const avance = Math.min((h.diasConsecutivos / 66) * 100, 100);
                        const color = avance < 30 ? 'bg-red-500' : avance < 70 ? 'bg-yellow-500' : 'bg-green-500';

                        return (
                            <div key={h._id} className="bg-white p-5 rounded-lg shadow border">
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="font-bold uppercase text-gray-700">{h.nombre}</h2>
                                    <button 
                                        onClick={() => dispatch(completarHabito(h._id))}
                                        className="bg-indigo-600 text-white px-4 py-1 rounded text-sm font-bold"
                                    >
                                        Done
                                    </button>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                    <div className={`${color} h-full transition-all`} style={{ width: `${avance}%` }}></div>
                                </div>
                                <p className="text-xs mt-1 text-gray-500 text-right">{Math.round(avance)}% completado</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
