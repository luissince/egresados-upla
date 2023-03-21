import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Auth from '../model/types/auth';


const initialState: Auth = {
    cargando: true,
    token: null,
    autenticado: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        starting: (state) => {
            window.localStorage.clear();
            state.cargando = false;
            state.token = null;
            state.autenticado = false;
        },
        restore: (state, action: PayloadAction<{ token: string, authentication: boolean }>) => {
            state.cargando = false;
            state.token = action.payload.token;
            state.autenticado = action.payload.authentication;
        },
        login: (state, action: PayloadAction<{ token: string }>) => {
            state.autenticado = true;
            state.token = action.payload.token;
            window.localStorage.setItem('login', JSON.stringify(action.payload.token));
        },
        logout: (state) => {
            window.localStorage.clear();
            state.cargando = true;
            state.token = null;
            state.autenticado = false;
        },
    },
})

export const { starting, login, logout, restore } = authSlice.actions

export default authSlice.reducer