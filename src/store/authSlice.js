import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const axiosAuthorization = createAsyncThunk(
    'authorization/axiosAuthorization',
    async function(data, {rejectWithValue}) {
        try {
            const response = await axios('https://sf-final-project-be.herokuapp.com/api/auth/sign_in', {
                method: 'post',
                maxBodyLength: Infinity,
                headers: { 	},
                data: data
            })
            console.log(response)
            window.localStorage.setItem('token', response.data.data.token)
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

const authSlice = createSlice({
    name: 'authorization',
    initialState: {
        auth: [],
        status: null,
        error: null
    },
    reducers: {
        signIn(state, action){},
    },
    extraReducers: {
        [axiosAuthorization.pending]: (state) => {
          state.status = 'loading';
          state.error = null
        },
        [axiosAuthorization.fulfilled]: (state, action) => {
          state.status = 'resolved';
          state.auth = action.payload
        },
        [axiosAuthorization.rejected]: setError,
    }
});

export const {signIn} = authSlice.actions;

export default authSlice.reducer;