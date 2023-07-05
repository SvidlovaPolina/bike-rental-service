import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const axiosOfficers = createAsyncThunk(
    'officers/axiosOfficers',
    async function(_, {rejectWithValue}) {
      try {
        const response = await axios('https://sf-final-project-be.herokuapp.com/api/officers/', {
        method: 'get',
        maxBodyLength: Infinity,
        headers: {
          "authorization": `Bearer ${window.localStorage.getItem('token')}`
        }
      })
      if (response.statusText !== "OK") {
        throw new Error('Error!')
      }
      const data = await response.data.officers
      return data
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
)

export const deleteOfficer = createAsyncThunk(
    'officers/deleteOfficer',
    async function(id, {rejectWithValue, dispatch}) {
      try {
        const response = await axios(`https://sf-final-project-be.herokuapp.com/api/officers/${id}`, {
          method: 'delete',
          maxBodyLength: Infinity,
          headers: { 
            "authorization": `Bearer ${window.localStorage.getItem('token')}`
          },
        })
        console.log(response)
        if (response.statusText !== "OK") {
          throw new Error('Can\'t delete officer!')
        }
        console.log(id)
        dispatch(removeOfficer({id}))
      } catch (error) {
        return rejectWithValue(error.message)
      }
    }
  )

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload
  }
  
  const officerSlice = createSlice({
      name: 'officers',
      initialState: {
          officers: [],
          status: null,
          error: null
      },
      reducers: {
          addOfficer(state, action) {
          },
          removeOfficer(state, action) {
          },
          editOfficer(state, action) {}
      },
      extraReducers: {
        [axiosOfficers.pending]: (state) => {
          state.status = 'loading';
          state.error = null
        },
        [axiosOfficers.fulfilled]: (state, action) => {
          state.status = 'resolved';
          state.officers = action.payload
        },
        [axiosOfficers.rejected]: setError,

        [deleteOfficer.pending]: (state) => {
          state.status = 'load';
          state.error = null
        },
        [deleteOfficer.rejected]: setError
      }
  });
  
  export const {addOfficer, removeOfficer, editOfficer} = officerSlice.actions;
  
  export default officerSlice.reducer;