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
            window.localStorage.setItem('token', response.data.data.token)
            if (response.data.status !== "OK") {
                throw new Error('Error!')
            }
            const result = await response.data
            console.log(result)
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
        signIn(state, action){

            // let config = {
            //     method: 'post',
            //       maxBodyLength: Infinity,
            //     url: 'https://sf-final-project-be.herokuapp.com/api/auth/sign_in',
            //     headers: { 	},
            //     data : action.payload.data
            // };
    
            // axios(config)
            //     .then(function (response) {
            //         window.localStorage.setItem('token', response.data.data.token)
            //         action.payload.answer = { status: true, message: '' }
            //     })
            //     .catch(function (error) {
            //         action.payload.result = { status: false, message: error.response.data.message }
            // });
        },
        signUp(state, action){

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://sf-final-project-be.herokuapp.com/api/auth/sign_up',
                headers: { },
                data : action.payload.data
            };
    
            axios(config)
                .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
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

export const {signIn, signUp} = authSlice.actions;

export default authSlice.reducer;