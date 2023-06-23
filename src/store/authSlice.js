import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '12345'
    },
    reducers: {
        setToken(state, action) {
            state.token = '11111'

            
        },
        removeToken(state, action) {}
    },
});

export const {setToken, removeToken} = authSlice.actions;

export default authSlice.reducer;