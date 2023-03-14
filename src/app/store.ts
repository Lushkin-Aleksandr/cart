import { configureStore } from '@reduxjs/toolkit'
import { goodsReducer } from '../features/Goods/goodsSlice'
import { cartReducer } from '../features/Cart/cartSlice'
import { loadState, saveState } from '../common/utils/localStorage'
import throttle from 'lodash.throttle'

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer,
  },
  preloadedState: loadState(), // load state from local storage
})

store.subscribe(throttle(() => saveState({ cart: store.getState().cart }), 1000)) // Redo this after making backend (save only cart)
export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
