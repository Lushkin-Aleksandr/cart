import * as Yup from 'yup'

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

export const orderSchema = Yup.object({
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
