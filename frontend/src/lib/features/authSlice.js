import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Usamos la misma variable de entorno aquí
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const entrarAlSistema = createAsyncThunk('auth/entrar', async (datosUsuario) => {
    // Apuntamos a la ruta de login usando la variable
    const respuesta = await axios.post(`${API_URL}/usuarios/login`, datosUsuario);
    return respuesta.data; 
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        mensaje: ''
    },
    reducers: {
        salir: (state) => {
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(entrarAlSistema.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.mensaje = action.payload.mensaje;
        });
    }
});

export const { salir } = authSlice.actions;
export default authSlice.reducer;
