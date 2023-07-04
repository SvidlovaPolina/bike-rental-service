import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const axiosReport = createAsyncThunk(
    'report/axiosReport',
    async function(data, {rejectWithValue}) {
        try {
            const response = await axios('https://sf-final-project-be.herokuapp.com/api/public/report', {
                method: 'post',
                maxBodyLength: Infinity,
                headers: { 	},
                data: data
            })
            console.log(response)
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

const reportSlice = createSlice({
    name: 'report',
    initialState: {
        report: [],
        status: null,
        error: null
    },
    reducers: {
        reportCase(state, action){},
    },
    extraReducers: {
        [axiosReport.pending]: (state) => {
          state.status = 'loading';
          state.error = null
        },
        [axiosReport.fulfilled]: (state, action) => {
          state.status = 'resolved';
          state.report = action.payload
        },
        [axiosReport.rejected]: setError,
    }
})

export const { reportCase } = reportSlice.actions;

export default reportSlice.reducer;