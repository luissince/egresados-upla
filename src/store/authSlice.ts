import { createSlice } from '@reduxjs/toolkit'

type SliceState = {
    loading: boolean,
    user: null,
    authentication: boolean,
}

export const initialState: SliceState = {
    loading: true,
    user: null,
    authentication: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        starting: (state) => {
            window.localStorage.clear();
            state.loading = false;
            state.user = null;
            state.authentication = false;
        },
        restore: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.authentication = action.payload.authentication;
        },
        login: (state, action) => {
            state.authentication = true;
            state.user = action.payload.user;
            window.localStorage.setItem('login', JSON.stringify(action.payload.user));
        },
        logout: (state) => {
            window.localStorage.clear();
            state.loading = true;
            state.user = null;
            state.authentication = false;
        },
    },
})

export const { starting, login, logout, restore } = authSlice.actions

export default authSlice.reducer