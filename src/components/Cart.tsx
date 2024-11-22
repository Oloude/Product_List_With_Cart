import EmptyCart from "./EmptyCart"
import CartContext from "../CartContext"
import { useContext } from "react"
import CartItem from "./CartItem"
import carbonIcon from '../assets/icon-carbon-neutral.svg'
 

function Cart({openModal} : {openModal : ()=> void}) {

    const cartCtx = useContext(CartContext)
    const totalPrice = cartCtx?.cart.reduce((sum,item)=> sum += item.price * item.quantity, 0)
    const totalCartItem = cartCtx?.cart.reduce((sum,item)=> sum +=   item.quantity, 0)

  return (
    <div className="bg-rose50  rounded-2xl p-5 lg:self-start">
         { !cartCtx?.cart.length ? <EmptyCart/> :
<section className="flex flex-col ">
    <h2 className="text-2xl font-bold text-red mb-6">Your cart ({totalCartItem})</h2>
    <div className="flex flex-col gap-3 mb-3">
            {cartCtx?.cart.map(item => <CartItem key={item.name} name={item.name} price={item.price} quantity={item.quantity}/>)}
        </div>
        
        <div className="flex gap-2 justify-between items-center mb-4">
            <p className="text-rose500 text-sm ">Order Total</p>
            <p className="text-2xl font-semibold text-rose900">${totalPrice}</p>
        </div>
        <div className="flex gap-2 bg-rose100 p-3 rounded-md justify-center mb-6"><img src={carbonIcon} alt="" /> <p className="text-rose900 text-sm">This is a <span className="font-semibold">carbon-neutral</span> delivery </p></div>
        <button onClick={openModal} className="text-rose50 text-base font-semibold bg-red rounded-full p-3">Confirm Order</button>
        </section>}
    </div>
  )
}

export default Cart