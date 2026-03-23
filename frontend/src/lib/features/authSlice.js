import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Función para el login
export const entrarAlSistema = createAsyncThunk('auth/entrar', async (datosUsuario) => {
    // Llamamos al backend
    const respuesta = await axios.post('http://localhost:3000/api/usuarios/login', datosUsuario);
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
