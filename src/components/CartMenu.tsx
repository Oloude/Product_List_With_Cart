 import addIcon from '../assets/icon-increment-quantity.svg'
 import minusIcon from '../assets/icon-decrement-quantity.svg'

 import { useContext } from 'react';
import CartContext from '../CartContext';

 type CartMenuProps = {
  quantity : number;
  name : string
 }

function CartMenu({quantity, name} : CartMenuProps) {
  const cartCntx = useContext(CartContext);

  function handleIncrement(){
    cartCntx?.increment(name)
  }

  function handleDecrement(){
    cartCntx?.decrement(name)
  }

  return (
    <div className='flex items-center gap-5 rounded-full bg-red py-3 px-4 absolute -translate-x-1/2 -bottom-4 left-1/2 '>
        <button onClick={handleDecrement} className='rounded-full w-4 h-4 p-1 border-rose50 border '><img src={minusIcon} alt="" /></button>
        <span className='text-xs text-rose50'>{quantity}</span>
        <button onClick={handleIncrement} className='rounded-full w-4 h-4 p-1 border-rose50 border '><img src={addIcon} alt="" /></button>
    </div>
  )
}

export default CartMenu