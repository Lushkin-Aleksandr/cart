import { RootStateType } from '../../app/store'

export const getGoodsItems = (state: RootStateType) => state.goods.items
