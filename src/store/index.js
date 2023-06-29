import { configureStore } from '@reduxjs/toolkit'
import caseReducer from './caseSlice'
import authReducer from './authSlice'

export default configureStore({
    reducer: {
        cases: caseReducer,
        auth: authReducer
    }
});