import { createSlice } from '@reduxjs/toolkit'

const caseSlice = createSlice({
    name: 'cases',
    initialState: {
        cases: []
    },
    reducers: {
        addCase(state, action) {
            // console.log(state);
            // console.log(action);

            state.cases.push({
                licenseNumber: action.payload.licenseNumber,
            });
        },
        removeCase(state, action) {},
        editCase(state, action) {}
    },
});

export const {addCase, removeCase, editCase} = caseSlice.actions;

export default caseSlice.reducer;