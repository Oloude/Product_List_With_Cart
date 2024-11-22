 import { useContext } from 'react'
import checkIcon from '../assets/icon-order-confirmed.svg'
import CartContext from '../CartContext'
import OrderItem from './OrderItem'

function OrderSummary({closeModal} : {closeModal : ()=>void}) {

  const cartCtx =  useContext(CartContext)

  const totalPrice = cartCtx?.cart.reduce((sum, item)=> sum += item.price * item.quantity, 0)

  function handleClick(){
    closeModal()
    cartCtx?.clearCart()
  }

  return (
    <div  className='flex flex-col'>
        <div  ><img src={checkIcon} alt=""   /></div>
        <h2 className='text-2xl font-bold text-rose900 mb-3'>Order Confirmed</h2>
        <p className='text-rose300 text-xs mb-5'>We hope you enjoy your food!</p>
        
        <div className='bg-rose100 rounded-md p-3 mb-6'>
        <div className='flex flex-col gap-3'>
          {cartCtx?.cart.map(item => <OrderItem name={item.name}/>)}
        </div>
        <div className='flex items-center justify-between gap-3'>
        <p className="text-rose500 text-sm ">Order Total</p>
        <p className="text-2xl font-semibold text-rose900">${totalPrice}</p>
        </div>
        </div>
        <button onClick={handleClick} className="text-rose50 text-base font-semibold bg-red rounded-full p-3">Confirm Order</button>
    </div>
  )
}

export default OrderSummary