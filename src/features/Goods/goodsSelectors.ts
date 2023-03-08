import { RootStateType } from '../../app/store'

export const selectGoodsItems = (state: RootStateType) => state.goods.items
