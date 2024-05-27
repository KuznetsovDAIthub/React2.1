import { configureStore } from '@reduxjs/toolkit'
import cartSlise from './slices/cartSlise.js'


export const store = configureStore({
  reducer: {
    cart: cartSlise,

  },
})

