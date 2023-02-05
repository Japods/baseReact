import { createSlice } from '@reduxjs/toolkit'
import CountState from './CountState'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: CountState,
  reducers: {
    increment: (state) => {
 
      state.initialState.value += 1
    },
    decrement: (state) => {
     state.initialState.value -= 1
    },
    incrementByAmount: (state, action) => {
     state.initialState.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer