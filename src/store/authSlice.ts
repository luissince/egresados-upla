import { createSlice } from '@reduxjs/toolkit'

type SliceState = {
    cargando: boolean,
    user: null,
    autenticado: boolean,
}

export const initialState: SliceState = {
    cargando: true,
    user: null,
    autenticado: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        starting: (state) => {
            window.localStorage.clear();
            state.cargando = false;
            state.user = null;
            state.autenticado = false;
        },
        restore: (state, action) => {
            state.cargando = false;
            state.user = action.payload.user;
            state.autenticado = action.payload.authentication;
        },
        login: (state, action) => {
            state.autenticado = true;
            state.user = action.payload.user;
            window.localStorage.setItem('login', JSON.stringify(action.payload.user));
        },
        logout: (state) => {
            window.localStorage.clear();
            state.cargando = true;
            state.user = null;
            state.autenticado = false;
        },
    },
})

export const { starting, login, logout, restore } = authSlice.actions

export default authSlice.reducer