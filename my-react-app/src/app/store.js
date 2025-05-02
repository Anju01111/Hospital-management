import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../features/counter/userSlice'
export const store = configureStore({
  reducer: {
    user:UserSlice,
  },
})