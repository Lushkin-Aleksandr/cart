import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { goodsAPI, GoodType } from '../../api/api'

const initialState: GoodsInitialStateType = {
  items: [],
  status: 'idle',
}

export const getGoods = createAsyncThunk('goods/getGoods', async (_, { rejectWithValue }) => {
  try {
    return await goodsAPI.getGoods()
  } catch (error) {
    console.log(error)
    return rejectWithValue(null)
  }
})

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getGoods.pending, state => {
        state.status = 'loading'
      })
      .addCase(getGoods.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = 'idle'
      })
      .addCase(getGoods.rejected, state => {
        state.status = 'idle'
      })
  },
})

export const goodsReducer = goodsSlice.reducer

// ========== TYPES ==========
type GoodsInitialStateType = {
  items: GoodType[]
  status: RequestStatusType
}
export type RequestStatusType = 'idle' | 'loading'
