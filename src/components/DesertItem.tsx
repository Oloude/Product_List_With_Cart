import { useContext } from 'react';
import CartContext from '../CartContext';

import AddToCart from './AddToCart'
import CartMenu from './CartMenu'
 
 type DesertItemProps = {
    imgMobile : string,
     imgDesktop : string, 
     category : string, 
      name : string, 
       price : number,
       imgThumb : string
 }

function DesertItem({imgMobile, imgDesktop, category, name, price, imgThumb} : DesertItemProps) {

    const cartCntx = useContext(CartContext);

    const isItemInCart = cartCntx?.cart.find(item => item.name === name)

  return (
    <div>
        <div className='relative w-full h-52 rounded-lg mb-8'>
           <picture >
            <source media="(min-width:1024px )" srcSet={imgDesktop} />
            <img src={imgMobile} alt="" className='w-full h-full block rounded-lg object-fill'/>
           </picture>
            
           {isItemInCart  ? <CartMenu quantity={isItemInCart.quantity} name={isItemInCart.name}/> : <AddToCart img={imgThumb} name={name} price={price} />}
        </div>
        <h4 className="text-sm text-rose300  ">{category}</h4>
        <h3 className="text-base text-rose900 font-medium  ">{name}</h3>
        <p className="text-base text-red font-medium">${price} </p>
    </div>
  )
}

export default DesertItem