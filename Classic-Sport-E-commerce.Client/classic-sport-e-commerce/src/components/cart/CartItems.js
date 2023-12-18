import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../redux/actions/cartAction';
import './CartItems.css'

export default function CartItems() {
    const dispatch = useDispatch()
  return (
    <div>CartItems</div>
  )
}
