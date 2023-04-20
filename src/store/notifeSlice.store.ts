import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const initialState: any = {
    notifications: [],
}

export const notifeSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{ valor: string }>) => {
            state.notifications = [...state.notifications, action.payload.valor];
        },
        clear: (state) => {
            state.notifications = [];
        }
    },
})

export const { add, clear } = notifeSlice.actions

export default notifeSlice.reducer