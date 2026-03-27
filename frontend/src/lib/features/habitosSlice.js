import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Usamos variable de entorno para que en Vercel use la URL real
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
const urlBase = `${API_URL}/habitos`;

export const fetchHabitos = createAsyncThunk('habitos/fetchHabitos', async (_, { getState }) => {
    const miToken = getState().auth.token;
    const respuesta = await axios.get(urlBase, {
        headers: { 'x-auth-token': miToken }
    });
    return respuesta.data;
});

export const completarHabito = createAsyncThunk('habitos/completarHabito', async (id, { getState }) => {
    const miToken = getState().auth.token;
    const respuesta = await axios.patch(`${urlBase}/${id}/completar`, {}, {
        headers: { 'x-auth-token': miToken }
    });
    return respuesta.data;
});

export const crearNuevoHabito = createAsyncThunk('habitos/crear', async (datos, { getState }) => {
    const miToken = getState().auth.token;
    const respuesta = await axios.post(urlBase, datos, {
        headers: { 'x-auth-token': miToken }
    });
    return respuesta.data;
});

const habitosSlice = createSlice({
    name: 'habitos',
    initialState: { items: [], status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHabitos.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(completarHabito.fulfilled, (state, action) => {
                const index = state.items.findIndex(h => h._id === action.payload._id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            })
            .addCase(crearNuevoHabito.fulfilled, (state, action) => {
                state.items.push(action.payload);
            });
    },
});

export default habitosSlice.reducer;
