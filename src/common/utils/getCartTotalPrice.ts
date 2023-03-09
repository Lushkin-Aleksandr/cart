import { CartItemType } from '../../features/Cart/cartSlice'

export const getCartTotalPrice = (cartItems: CartItemType[]) => {
  return cartItems
    .reduce((acc, cur) => {
      return parseFloat(cur.price) * cur.count + acc
    }, 0)
    .toFixed(2)
}
