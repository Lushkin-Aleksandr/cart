import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCartTotalPrice } from '../../common/utils/getCartTotalPrice'
import { goodsAPI, GoodType, OrderedGoodType, ServerOrderInfoType } from '../../api/api'
import { v1 } from 'uuid'
import { RootStateType } from '../../app/store'

const initialState: CartsInitialStateType = {
  items: [],
  totalPrice: '0',
}

export const makeOrder = createAsyncThunk(
  'cart/makeOrder',
  async (values: UserInfoType, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootStateType
      const order: ServerOrderInfoType = {
        userInfo: { userId: v1(), ...values },
        orderedGoods: state.cart.items.map(item => ({ id: item.id, count: item.count })),
      }

      await goodsAPI.makeOrder(order)
    } catch (error) {
      console.log(error)
      return rejectWithValue(null)
    }
  }
)

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
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
  extraReducers: builder => {
    builder.addCase(makeOrder.fulfilled, state => {
      state.items = []
      state.totalPrice = '0'
    })
  },
})

export const { addCartItem, removeCartItem, increaseCartItemCount, decreaseCartItemCount } =
  cartSlice.actions

export const cartReducer = cartSlice.reducer

// ========== TYPES ==========
export type CartItemType = GoodType & Pick<OrderedGoodType, 'count'>

type CartsInitialStateType = {
  items: CartItemType[]
  totalPrice: string
}

export type UserInfoType = {
  name: string
  surname?: string
  address: string
  phone: string
}
