import emptyCart from '../assets/illustration-empty-cart.svg'


function EmptyCart() {
  return (
    <div className='flex flex-col items-center'>
        <h2 className="text-red font-bold text-xl mb-7 self-start">Your Cart (0)</h2>
        <img src={emptyCart} alt=""  className='mb-5'/>
        <p className='text-base font-medium text-rose500 text-center'> Your added items will appear here</p>
    </div>
  )
}

export default EmptyCart