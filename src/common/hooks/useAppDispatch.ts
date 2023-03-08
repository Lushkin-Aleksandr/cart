import { AppDispatchType } from '../../app/store'
import { useDispatch } from 'react-redux'

export const useAppDispatch: () => AppDispatchType = useDispatch
