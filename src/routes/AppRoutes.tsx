import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Goods } from '../features/Goods/Goods'
import { Cart } from '../features/Cart/Cart'
import { NotFound } from '../features/NotFound/NotFound'

export enum RoutePaths {
  GOODS = '/goods',
  CART = '/cart',
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={RoutePaths.GOODS} />} />
      <Route path={RoutePaths.GOODS} element={<Goods />} />
      <Route path={RoutePaths.CART} element={<Cart />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  )
}
