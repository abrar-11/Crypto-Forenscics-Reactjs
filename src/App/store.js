import { configureStore } from '@reduxjs/toolkit'
import  CoinSlice  from '../features/CoinsSlice'

export const store = configureStore({
  reducer: {
    CoinSlice,
  },
})