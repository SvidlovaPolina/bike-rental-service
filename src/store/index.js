import { configureStore } from '@reduxjs/toolkit'
import caseReducer from './caseSlice'
import caseDetailReducer from './caseDetailSlice'
import authReducer from './authSlice'
import regReducer from './regSlice'
import officerReducer from './officerSlice'
import reportReducer from './reportSlice'
import tokenReducer from './tokenSlice'

export default configureStore({
    reducer: {
        cases: caseReducer,
        case: caseDetailReducer,
        auth: authReducer,
        reg: regReducer,
        officers: officerReducer,
        report: reportReducer,
        token: tokenReducer
    }
});