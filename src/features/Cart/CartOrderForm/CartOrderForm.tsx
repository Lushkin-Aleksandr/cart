import React, { FC } from 'react'
import {
  CartOrderFormBottom,
  CartOrderFormInputs,
  StyledCartOrderForm,
} from './CartOrderForm.styled'
import { useFormik } from 'formik'
import { Button } from '../../../common/components/Button/Button'
import { Input } from '../../../common/components/Input/Input'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { selectTotalPrice } from '../cartSelectors'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { makeOrder } from '../cartSlice'
import { useNavigate } from 'react-router-dom'
import { RoutePaths } from '../../../routes/AppRoutes'
import { orderSchema } from '../../../common/utils/validationSchemas'

type PropsType = {}

export const CartOrderForm: FC<PropsType> = () => {
  const totalPrice = useAppSelector(selectTotalPrice)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { getFieldProps, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      address: '',
      phone: '',
    },
    validationSchema: orderSchema,
    async onSubmit(values) {
      const result = await dispatch(makeOrder(values))

      if (result.payload) {
        navigate(RoutePaths.GOODS)
      }
    },
  })

  return (
    <StyledCartOrderForm onSubmit={handleSubmit}>
      <h2>Make order</h2>
      <CartOrderFormInputs>
        <Input
          label={'Name'}
          isRequired
          {...getFieldProps('name')}
          error={touched.name && errors.name}
        />
        <Input
          label={'Surname'}
          {...getFieldProps('surname')}
          error={touched.surname && errors.surname}
        />
        <Input
          label={'Address'}
          isRequired
          {...getFieldProps('address')}
          error={touched.address && errors.address}
        />
        <Input
          type={'tel'}
          label={'Phone'}
          isRequired
          {...getFieldProps('phone')}
          error={touched.phone && errors.phone}
        />
      </CartOrderFormInputs>
      <CartOrderFormBottom>
        <span>Total: {totalPrice}$</span>
        <Button type={'submit'}>Order</Button>
      </CartOrderFormBottom>
    </StyledCartOrderForm>
  )
}
