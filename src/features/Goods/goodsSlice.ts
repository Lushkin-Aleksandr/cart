import { createSlice } from '@reduxjs/toolkit'
import { v1 } from 'uuid'
import steakImg from '../../common/assets/images/steak1.png'
import { GoodType } from '../../api/api'

const initialState: GoodsInitialStateType = {
  items: [
    {
      id: v1(),
      title: 'Steak',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis dolor ipsum maiores recusandae. Aut beatae fugiat impedit numquam vero.',
      price: '43',
      imageUrl: steakImg,
    },
    {
      id: v1(),
      title: 'Burger',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis dolor ipsum maiores recusandae. Aut beatae fugiat impedit numquam vero.',
      price: '10.32',
      imageUrl: null,
    },
    {
      id: v1(),
      title: 'Pizza',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis dolor ipsum maiores recusandae. Aut beatae fugiat impedit numquam vero.',
      price: '13',
      imageUrl: '',
    },
    {
      id: v1(),
      title: 'Steak',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis dolor ipsum maiores recusandae. Aut beatae fugiat impedit numquam vero.',
      price: '43',
      imageUrl: steakImg,
    },
    {
      id: v1(),
      title: 'Steak',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis dolor ipsum maiores recusandae. Aut beatae fugiat impedit numquam vero.',
      price: '43',
      imageUrl: steakImg,
    },
  ],
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoods(state, action) {},
  },
})

export const goodsReducer = goodsSlice.reducer

// ========== TYPES ==========
type GoodsInitialStateType = {
  items: GoodType[]
}
