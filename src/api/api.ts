import { addDoc, collection, getDocs } from 'firebase/firestore/lite'
import { db } from './firebase'
import { UserInfoType } from '../features/Cart/cartSlice'

export const goodsAPI = {
  async getGoods() {
    const goodsSnapshot = await getDocs(collection(db, 'goods'))

    return goodsSnapshot.docs.map(doc => {
      const good = doc.data()
      good.id = doc.id

      return good as GoodType
    })
  },
  async makeOrder(order: ServerOrderInfoType) {
    const ordersRef = collection(db, 'orders')
    await addDoc(ordersRef, order)
  },
}

// ========== TYPES ==========
export type GoodType = {
  id: string
  title: string
  description: string
  price: string
  imageUrl: string | null
}

export type OrderedGoodType = Pick<GoodType, 'id'> & {
  count: number
}

export type ServerOrderInfoType = {
  userInfo: ServerUserInfoType
  orderedGoods: OrderedGoodType[]
}
export type ServerUserInfoType = UserInfoType & {
  userId: string
}
