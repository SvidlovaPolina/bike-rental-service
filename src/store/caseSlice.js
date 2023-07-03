import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const axiosCases = createAsyncThunk(
  'cases/axiosCases',
  async function(_, {rejectWithValue}) {
    try {
      const response = await axios('https://sf-final-project-be.herokuapp.com/api/cases/', {
      method: 'get',
      maxBodyLength: Infinity,
      headers: {
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
      }
    })
    // console.log(response.data.status)

    if (response.data.status !== "OK") {
      throw new Error('Error!')
    }

    const data = await response.data.data
    // console.log(data)
    return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

 export const deleteCase = createAsyncThunk(
  'cases/deleteCase',
  async function(id, {rejectWithValue, dispatch}) {
    try {
      const response = await axios(`https://sf-final-project-be.herokuapp.com/api/cases/${id}`, {
        method: 'delete',
        maxBodyLength: Infinity,
        headers: { 
          "authorization": `Bearer ${window.localStorage.getItem('token')}`
        },
      })
      console.log(response)
      if (response.data.status !== "OK") {
        throw new Error('Can\'t delete case!')
      }
      dispatch(removeCase({id}))
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload
}

const caseSlice = createSlice({
    name: 'cases',
    initialState: {
        cases: [],
        status: null,
        error: null
    },
    reducers: {
        addCase(state, action) {
                
        },
        removeCase(state, action) {
          // state.cases = state.cases.filter(case => case.id !== action.payload.id);  
        },
        editCase(state, action) {}
    },
    extraReducers: {
      [axiosCases.pending]: (state) => {
        state.status = 'loading';
        state.error = null
      },
      [axiosCases.fulfilled]: (state, action) => {
        state.status = 'resolved';
        state.cases = action.payload
      },
      [axiosCases.rejected]: setError,
      [deleteCase.rejected]: setError
    }
});

export const {addCase, removeCase, editCase} = caseSlice.actions;

export default caseSlice.reducer;