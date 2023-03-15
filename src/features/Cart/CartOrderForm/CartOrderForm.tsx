import React, { FC } from 'react'
import {
  CartOrderFormBottom,
  CartOrderFormInputs,
  StyledCartOrderForm,
} from './CartOrderForm.styled'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Button } from '../../../common/components/Button/Button'
import { Input } from '../../../common/components/Input/Input'
import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { selectTotalPrice } from '../cartSelectors'
import { useAppDispatch } from '../../../common/hooks/useAppDispatch'
import { makeOrder } from '../cartSlice'

type PropsType = {}

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

const orderSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Min length is 2 characters!')
    .max(50, 'Max length is 50 characters!')
    .trim('Remove spaces!')
    .strict(true)
    .required('Name is required!'),
  surname: Yup.string()
    .min(2, 'Min length is 2 characters!')
    .max(50, 'Max length is 50 characters!')
    .trim('Remove spaces!')
    .strict(true),
  address: Yup.string()
    .required('Address is required!')
    .trim('Remove spaces!')
    .strict(true)
    .min(10, 'Min length is 10 characters!'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone is required!'),
})

export const CartOrderForm: FC<PropsType> = () => {
  const totalPrice = useAppSelector(selectTotalPrice)
  const dispatch = useAppDispatch()
  const { getFieldProps, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      name: '',
      surname: '',
      address: '',
      phone: '',
    },
    validationSchema: orderSchema,
    onSubmit(values) {
      dispatch(makeOrder(values))
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
