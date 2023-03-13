import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartTotalPrice } from '../../common/utils/getCartTotalPrice'
import { GoodType } from '../../api/api'

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

      state.totalPrice = getCartTotalPrice(state.items)
    },
    removeCartItem(state, action: PayloadAction<string>) {
      const cartItem = state.items.find(item => item.id === action.payload)

      if (cartItem) {
        state.items = state.items.filter(item => item.id !== action.payload)
        state.totalPrice = getCartTotalPrice(state.items)
      }
    },
    increaseCartItemCount(state, action: PayloadAction<string>) {
      const cartItem = state.items.find(item => item.id === action.payload)

      if (cartItem) {
        cartItem.count += 1
        state.totalPrice = getCartTotalPrice(state.items)
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

        state.totalPrice = getCartTotalPrice(state.items)
      }
    },
  },
})

export const { addCartItem, removeCartItem, increaseCartItemCount, decreaseCartItemCount } =
  cartSlice.actions
export const cartReducer = cartSlice.reducer

// ========== TYPES ==========
export type CartItemType = GoodType & {
  count: number
}

type CartsInitialStateType = {
  items: CartItemType[]
  totalPrice: string
}
