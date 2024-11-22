import { useContext } from "react"
import CartContext from "../CartContext"

 type OrderProps = {
    name : string
 }

function OrderItem({name } : OrderProps) {
  const cartCtx = useContext(CartContext)

  const item = cartCtx?.cart.find(item => item.name === name) 
  const totalPrice =  item?.price     *  item?.quantity   

  return (
    <div className="flex justify-between gap-3 items-center border-b border-rose300 pb-3">
        <div className="flex gap-3 items-center">
        <div className="w-10 h-10"><img src={item?.img } alt="" /></div>
        <div>
            <h4 className="text-sm text-rose900">{item?.name}</h4>
            <div className="flex gap-2">
                <p className="text-sm text-red">{item?.quantity}x</p>
                <p className="text-rose400 text-sm">@{item?.price}</p>
            </div>
        </div>
        </div>
        <p className="text-sm font-semibold text-rose500">${totalPrice}</p>
    </div>
  )
}

export default OrderItem