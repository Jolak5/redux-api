import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: ["kayode", "Olatunji"],
    isLoading: false,
    error: undefined
  },
  reducers: {
    extraReducers : state => {
      state.user = {}
    },
    incrementByAmount: (state, action) => {
        state.value += action.payload
      }
  }
})

// Action creators are generated for each case reducer function
export const { extraReducers } = userSlice.actions

export default userSlice.reducer