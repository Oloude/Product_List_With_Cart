 import deleteIcon from '../assets/icon-remove-item.svg'
 import CartContext from '../CartContext'
 import { useContext } from 'react'

 type CartItemProps = {
    name: string;
    quantity : number;
    price : number 
 }

function CartItem({name, quantity, price } : CartItemProps) {

    const cartCtx = useContext(CartContext)

    function handleDeleteItem(){
        cartCtx?.deleteItem(name)
    }

  return (
    <div className='flex justify-between gap-3 items-center border-b-2 border-rose100 pb-3'>
        <div className='flex flex-col gap-1'>
            <h3 className='text-sm font-medium text-rose900'>{name}</h3>
            <div className='flex items-center'>
                <p className='text-sm text-red mr-4'>{quantity}x</p>
                 <p className='text-sm text-rose400 mr-2'>@ ${price}</p>
                 <p className='text-sm text-rose500 font-medium mr-2'>${price * quantity}</p>
            </div>
        </div>
        <button onClick={handleDeleteItem} className='border border-rose500 w-5 h-5 p-1 rounded-full'><img src={deleteIcon} alt="" /></button>
    </div>
  )
}

export default CartItem