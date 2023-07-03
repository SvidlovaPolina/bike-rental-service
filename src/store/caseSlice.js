import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const axiosCases = createAsyncThunk(
  'cases/axiosCases',
  async function() {
    const response = await axios('https://sf-final-project-be.herokuapp.com/api/cases/', {
      method: 'get',
      maxBodyLength: Infinity,
      headers: {
        "authorization": `Bearer ${window.localStorage.getItem('token')}`
      }
    })
    // console.log(response.data.data)
        
        // axios(config)
        // .then(function (response) {
        //   console.log(response)
        // })
    
        // .catch(function (error) {
        //   console.log(error);
        // });

        const data = await response.data.data
        console.log(data)
        return data
  }
)

const caseSlice = createSlice({
    name: 'cases',
    initialState: {
        cases: [],
        status: null,
        error: null
    },
    reducers: {
        addCase(state, action) {
            // state.cases = [{
            //     licenseNumber: "11111111",
            //     type: "sport",
            //     color: "white",
            //     _id: "654321354321asfasgadv",
            //     description: "sjdhfsjdhf"
            // }]      
        },
        

        removeCase(state, action) {
                // let config = {
                //   method: 'delete',
                //   maxBodyLength: Infinity,
                //   url: 'https://sf-final-project-be.herokuapp.com/api/cases/' + action.payload.id,
                //   headers: { 
                //     "authorization": `Bearer ${window.localStorage.getItem('token')}`
                //   },
                // };
                
                // axios(config)
                // .then(function (response) {
                //   console.log(JSON.stringify(response.data));
                // })
                // .catch(function (error) {
                //   console.log(error);
                // });
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
      [axiosCases.rejected]: (state, action) => {},
    }
});

export const {addCase, removeCase, editCase} = caseSlice.actions;

export default caseSlice.reducer;