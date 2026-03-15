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
    <main className="min-h-screen bg-gray-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Mis <span className="text-indigo-600">Hábitos Atómicos</span>
        </h1>

        <div className="grid gap-6">
          {habitos.map((h) => {
            
            const porcentaje = Math.min((h.diasConsecutivos / 66) * 100, 100);
            const colorBarra = porcentaje < 30 ? 'bg-red-500' : porcentaje < 70 ? 'bg-yellow-500' : 'bg-green-500';

            return (
              <div key={h._id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 uppercase">{h.nombre}</h2>
                  <p className="text-gray-500 text-sm mb-4">{h.descripcion}</p>
                  
                  {/* Barra de Progreso Dinámica */}
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`${colorBarra} h-3 rounded-full transition-all duration-500`} 
                        style={{ width: `${porcentaje}%` }} 
                      ></div>
                    </div>
                    <span className="text-xs font-bold text-gray-600">{Math.round(porcentaje)}%</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1 uppercase">Racha: {h.diasConsecutivos} días / Meta: 66</p>
                </div>

                <button 
                  onClick={() => dispatch(completarHabito(h._id))}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all active:scale-95 shadow-lg"
                >
                  Done
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
