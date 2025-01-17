import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
    reducer: {
        authSlice: authSlice,
        cartSlice: cartSlice
    },
})