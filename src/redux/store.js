import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './users/usersSlice'

export default configureStore({
  reducer: {
    users: usersSlice
  }
})