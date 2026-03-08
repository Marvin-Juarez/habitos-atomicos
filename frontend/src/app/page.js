'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHabitos } from '../lib/features/habitosSlice';
import axios from 'axios';

export default function Home() {
  const dispatch = useDispatch();
  const habitos = useSelector((state) => state.habitos.items);

  useEffect(() => {
    const fetchHabitos = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/habitos');
        dispatch(setHabitos(res.data));
      } catch (error) {
        console.error("Error al traer hábitos:", error);
      }
    };
    fetchHabitos();
  }, [dispatch]);

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Mis <span className="text-indigo-600">Hábitos Atómicos</span>
        </h1>

        {/* Lista Dinámica */}
        <div className="grid gap-6">
          {habitos.length > 0 ? (
            habitos.map((h) => (
              <div key={h._id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 uppercase tracking-tight">{h.nombre}</h2>
                  <p className="text-gray-500 text-sm mb-4">{h.descripcion || 'Sin descripción'}</p>
                  
                  {/* Barra de Progreso (Requisito: Estática por ahora) */}
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      {/* Por ahora el ancho es fijo (ej. 40%) como pide la tarea */}
                      <div 
                        className="bg-gradient-to-r from-red-500 to-green-500 h-3 rounded-full transition-all duration-500" 
                        style={{ width: '40%' }} 
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-gray-600 tracking-tighter">40%</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase">Meta: 66 días</p>
                </div>

                {/* Botón de Done (Requisito: No debe funcionar por ahora) */}
                <button 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-indigo-200 active:scale-95"
                >
                  Done
                </button>

              </div>
            ))
          ) : (
            <div className="text-center p-10 bg-white rounded-2xl border-2 border-dashed border-gray-300">
              <p className="text-gray-500 italic">No hay hábitos en la lista. Agrega uno desde el backend.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
