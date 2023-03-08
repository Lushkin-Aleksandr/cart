import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GoodType } from '../Goods/goodsSlice'
import {
  subtractTwoFloatNumbers,
  sumOfTwoFloatNumbers,
} from '../../common/utils/floatMathOperations'

const initialState: CartsInitialStateType = {
  items: [],
  totalPrice: '0',
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action) {},
    addCartItem(state, action: PayloadAction<GoodType>) {
      const cartItem = state.items.find(item => item.id === action.payload.id)
      if (cartItem) {
        cartItem.count = cartItem.count + 1
      } else {
        const newCartItem = { ...action.payload, count: 1 }
        state.items.push(newCartItem)
      }

      state.totalPrice = sumOfTwoFloatNumbers(state.totalPrice, action.payload.price)
    },
    increaseCartItemCount(state, action: PayloadAction<string>) {
      const cartItem = state.items.find(item => item.id === action.payload)

      if (cartItem) {
        cartItem.count += 1
        state.totalPrice = sumOfTwoFloatNumbers(state.totalPrice, cartItem.price)
      }
    },
    decreaseCartItemCount(state, action: PayloadAction<string>) {
      const cartItem = state.items.find(item => item.id === action.payload)

      if (cartItem) {
        if (cartItem.count === 1) {
          state.items = state.items.filter(item => item.id !== action.payload)
        } else {
          cartItem.count -= 1
        }

        state.totalPrice = subtractTwoFloatNumbers(state.totalPrice, cartItem.price)
      }
    },
  },
})

export const { addCartItem, increaseCartItemCount, decreaseCartItemCount } = cartSlice.actions
export const cartReducer = cartSlice.reducer

// ========== TYPES ==========
export type CartItemType = GoodType & {
  count: number
}

type CartsInitialStateType = {
  items: CartItemType[]
  totalPrice: string
}
