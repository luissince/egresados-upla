import { createSlice } from '@reduxjs/toolkit'

export const initialState:any = {
    notifications:  [],
}

export const notifeSlice = createSlice({
    name: 'notife',
    initialState,
    reducers: {
        add: (state, action) => {
            state.notifications = [...state.notifications, action.payload.valor];        
        },
        clear: (state) => {
            state.notifications = [];
        }
    },
})

export const { add, clear } = notifeSlice.actions

export default notifeSlice.reducer