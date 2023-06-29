import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const caseSlice = createSlice({
    name: 'cases',
    initialState: {
        cases: []
    },
    reducers: {
        addCase(state, action) {
            state.cases = [{
                licenseNumber: "11111111",
                type: "sport",
                color: "white",
                _id: "654321354321asfasgadv",
                description: "sjdhfsjdhf"
            }]

            // <tr key={data._id}>
            //       <td>{data.licenseNumber}</td>
            //       <td>{data.type}</td>
            //       <td>{data.color}</td>
            //       <td>{data._id}</td>
            //       <td>{data.description}</td>

                // let config = {
                //   method: 'get',
                //   maxBodyLength: Infinity,
                //   url: 'https://sf-final-project-be.herokuapp.com/api/cases/',
                //   headers: {
                //     "authorization": `Bearer ${window.localStorage.getItem('token')}`
                //    }
                // };
                
                // axios(config)
                // .then(function (response) {
                //     state.cases = response.data
                //     console.log(state.cases)
                // })
            
                // .catch(function (error) {
                //   console.log(error);
                // });
                
        },
        

        removeCase(state, action) {
            // const DeleteTheft = (id) => {
            //     console.log(id)
                let config = {
                  method: 'delete',
                  maxBodyLength: Infinity,
                  url: 'https://sf-final-project-be.herokuapp.com/api/cases/' + action.payload.id,
                  headers: { 
                    "authorization": `Bearer ${window.localStorage.getItem('token')}`
                  },
                };
                
                axios(config)
                .then(function (response) {
                  console.log(JSON.stringify(response.data));
                })
                .catch(function (error) {
                  console.log(error);
                });
            //   }
        },
        editCase(state, action) {}
    },
});

export const {addCase, removeCase, editCase} = caseSlice.actions;

export default caseSlice.reducer;