import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const axiosRegistration = createAsyncThunk(
    'registration/axiosRegistration',
    async function(data, {rejectWithValue}) {
        try {
            const response = await axios('https://sf-final-project-be.herokuapp.com/api/auth/sign_up', {
                method: 'post',
                maxBodyLength: Infinity,
                headers: { 	},
                data: data
            })
            console.log(response)
            // window.localStorage.setItem('token', response.data.data.token)
            if (response.data.status !== "OK") {
                throw new Error('Error!')
            }
            const result = await response.data
            // console.log(result)
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

const regSlice = createSlice({
    name: 'registration',
    initialState: {
        reg: [],
        status: null,
        error: null
    },
    reducers: {
        signUp(state, action){},
    },
    extraReducers: {
        [axiosRegistration.pending]: (state) => {
          state.status = 'loading';
          state.error = null
        },
        [axiosRegistration.fulfilled]: (state, action) => {
          state.status = 'resolved';
          state.reg = action.payload
        },
        [axiosRegistration.rejected]: setError,
    }
})

export const {signUp} = regSlice.actions;

export default regSlice.reducer;