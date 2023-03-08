import { configureStore } from '@reduxjs/toolkit'
import { goodsReducer } from '../features/Goods/goodsSlice'
import { cartReducer } from '../features/Cart/cartSlice'

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
  },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
