import { createSlice } from '@reduxjs/toolkit'

const initialState = [
]

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTask: (state,action) => {
        state.push(action.payload)
    }
  }
})

export const { addTask, deleteTask } = counterSlice.actions

export default counterSlice.reducer 