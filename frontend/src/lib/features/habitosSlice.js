import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/habitos';


export const fetchHabitos = createAsyncThunk('habitos/fetchHabitos', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});


export const completarHabito = createAsyncThunk('habitos/completarHabito', async (id) => {
    const response = await axios.patch(`${API_URL}/${id}/completar`);
    return response.data;
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
                    state.items[index] = action.payload; // Actualiza el hábito en la lista
                }
            });
    },
});

export default habitosSlice.reducer;
