import { configureStore } from '@reduxjs/toolkit'
import caseReducer from './caseSlice'
import authReducer from './authSlice'
import officerReducer from './officerSlice'

export default configureStore({
    reducer: {
        cases: caseReducer,
        auth: authReducer,
        officers: officerReducer
    }
});