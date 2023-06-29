import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        props:[]
    },
    reducers: {
        signIn(state, action){

            let config = {
                method: 'post',
                  maxBodyLength: Infinity,
                url: 'https://sf-final-project-be.herokuapp.com/api/auth/sign_in',
                headers: { 	},
                data : action.payload.data
            };
    
            axios(config)
                .then(function (response) {
                    window.localStorage.setItem('token', response.data.data.token)
                    action.payload.answer = { status: true, message: '' }
                })
                .catch(function (error) {
                    action.payload.result = { status: false, message: error.response.data.message }
            });
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
});

export const {signIn, signUp} = authSlice.actions;

export default authSlice.reducer;