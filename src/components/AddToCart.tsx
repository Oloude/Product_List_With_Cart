import addCart from '../assets/icon-add-to-cart.svg';
import { useContext } from 'react';
import CartContext from '../CartContext';

type AddToCartProps = {
  name: string;
  price: number;
  img : string
};

// type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// };

function AddToCart({ name, price, img }: AddToCartProps) {

  // Use the context properly with the correct type
  const cartCntx = useContext(CartContext);

  // Ensure the context exists (you can throw an error if undefined or use a fallback)
  if (!cartCntx) {
    throw new Error("CartContext is not available. Make sure you are within CartContextProvider.");
  }

  function handleAdd() {
    cartCntx?.addItem({ 
      name,
      price,
      img
    });
  }

  return (
    <div
      onClick={handleAdd}
      className='flex gap-2 py-3 px-3 bg-rose50 border border-rose500 rounded-full absolute -translate-x-1/2 -bottom-6 left-1/2'
    >
      <img src={addCart} alt="Add to Cart" className='w-4 h-4 block' />
      <p className='text-rose900 text-xs font-medium'>Add to Cart</p>
    </div>
  );
}

export default AddToCart;
