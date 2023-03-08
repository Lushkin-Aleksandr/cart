import { configureStore } from '@reduxjs/toolkit'
import { goodsReducer } from '../features/Goods/goodsSlice'

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
  },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
