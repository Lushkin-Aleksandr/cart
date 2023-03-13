import { collection, getDocs } from 'firebase/firestore/lite'
import { db } from './firebase'

export const getGoods = async () => {
  const res = await goodsAPI.getGoods()

  console.log(res)
}

export const goodsAPI = {
  async getGoods() {
    const goodsSnapshot = await getDocs(collection(db, 'goods'))

    return goodsSnapshot.docs.map(doc => {
      const good = doc.data()
      good.id = doc.id

      return good as GoodType
    })
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
