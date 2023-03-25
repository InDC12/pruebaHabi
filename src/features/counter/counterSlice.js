import { createSlice } from '@reduxjs/toolkit'

const initialState = [
]

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTask: (state,action) => {
        state.push(action.payload)
    },
    deleteTask: (state,action) => {
        const stepFound = state.find(habiresume => habiresume.id ===action.payload)
        if (stepFound) {
            state.splice(state.indexOf(stepFound),1)
        }
    }
  }
})

export const { addTask, deleteTask } = counterSlice.actions

export default counterSlice.reducer 