'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHabitos, completarHabito } from '../lib/features/habitosSlice';

export default function Home() {
    const dispatch = useDispatch();
    const habitos = useSelector((state) => state.habitos.items);

    useEffect(() => {
        dispatch(fetchHabitos());
    }, [dispatch]);

    return (
        <main className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Hábitos Atómicos</h1>
                <div className="space-y-4">
                    {habitos.map((h) => {
                        const porcentaje = Math.min((h.diasConsecutivos / 66) * 100, 100);
                        // Barra dinámica: Rojo (<30), Amarillo (<70), Verde (>=70)
                        const colorBarra = porcentaje < 30 ? 'bg-red-500' : porcentaje < 70 ? 'bg-yellow-500' : 'bg-green-500';

                        return (
                            <div key={h._id} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h2 className="text-xl font-bold uppercase">{h.nombre}</h2>
                                        <p className="text-gray-500">Racha actual: {h.diasConsecutivos} días</p>
                                    </div>
                                    <button 
                                        onClick={() => dispatch(completarHabito(h._id))}
                                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 transition-all active:scale-95"
                                    >
                                        Done
                                    </button>
                                </div>
                                
                                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                    <div 
                                        className={`${colorBarra} h-full transition-all duration-700 ease-in-out`}
                                        style={{ width: `${porcentaje}%` }}
                                    ></div>
                                </div>
                                <p className="text-right text-sm font-bold mt-1 text-gray-600">{Math.round(porcentaje)}% hacia los 66 días</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
