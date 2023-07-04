// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

// export const axiosCase = createAsyncThunk(
//     'case/axiosCase',
//     async function(id, {rejectWithValue, dispatch}) {
//       try {
//         const response = await axios(`https://sf-final-project-be.herokuapp.com/api/cases/${id}`, {
//         method: 'get',
//         maxBodyLength: Infinity,
//         headers: {
//           "authorization": `Bearer ${window.localStorage.getItem('token')}`
//         }
//       })
//       console.log(response)
//       if (response.data.data.status !== "OK") {
//         throw new Error('Error!')
//       }
//       dispatch(addCase({id}))
//       const data = await response.data.data
//       // console.log(data)
//       return data
//       } catch (error) {
//         return rejectWithValue(error.message)
//       }
//     }
//   )

// const setError = (state, action) => {
//     state.status = 'rejected';
//     state.error = action.payload
//   }
  
//   const caseDetailSlice = createSlice({
//       name: 'cases',
//       initialState: {
//           case: [],
//           status: null,
//           error: null
//       },
//       reducers: {
//           addCase(state, action) {
                  
//           },
//           removeCase(state, action) {
//             // state.cases = state.cases.filter(case => case.id !== action.payload.id);  
//           },
//           editCase(state, action) {}
//       },
//       extraReducers: {
//         [axiosCase.pending]: (state) => {
//           state.status = 'loading';
//           state.error = null
//         },
//         [axiosCase.fulfilled]: (state, action) => {
//           state.status = 'resolved';
//           state.case = action.payload
//         },
//         [axiosCase.rejected]: setError,
//       }
//   });
  
//   export const {addCase, removeCase, editCase} = caseDetailSlice.actions;
  
//   export default caseDetailSlice.reducer;