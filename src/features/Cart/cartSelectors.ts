import { RootStateType } from '../../app/store'

export const selectTotalPrice = (state: RootStateType) => state.cart.totalPrice

export const selectCartItems = (state: RootStateType) => state.cart.items

export const selectCartItemCount = (state: RootStateType, id: string) => {
  const item = state.cart.items.find(item => item.id === id)
  return item ? item.count : 0
}
