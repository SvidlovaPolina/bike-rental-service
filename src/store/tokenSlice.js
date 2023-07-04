import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const axiosToken = createAsyncThunk(
    'token/axiosToken',
    async function(_, {rejectWithValue}) {

        try {
            let token = window.localStorage.getItem('token');
            if (token === null) {
                throw new Error('Error!')
            }
            const response = await axios('https://sf-final-project-be.herokuapp.com/api/auth/', {
                method: 'get',
                maxBodyLength: Infinity,
                headers: { 
					"authorization": `Bearer ${token}`
				},
            })
            if (response.data.status !== "OK") {
                throw new Error('Error!')
            }
            const result = await response.data
            return result
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload
}

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        token: [],
        status: null,
        error: null
    },
    reducers: {
        LogOut(state, action){
            window.localStorage.removeItem('token');
        },
    },
    extraReducers: {
        [axiosToken.pending]: (state) => {
          state.status = 'loading';
          state.error = null
        },
        [axiosToken.fulfilled]: (state, action) => {
          state.status = 'resolved';
          state.token = action.payload
        },
        [axiosToken.rejected]: setError,
    }
});

export const {LogOut} = tokenSlice.actions;

export default tokenSlice.reducer;