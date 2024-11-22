import { useReducer, createContext, ReactNode } from "react";

// Types
type CartItem = { 
  name: string;
  price: number;
  quantity: number;
  img : string
};

type CartState = {
  cart: CartItem[];
};

type Action =
  | { type: "ADDITEM"; product: Omit<CartItem, "quantity"> }
  | { type: "DELETEITEM"; name: string }
  | { type: "INCREMENT";name: string }
  | { type: "DECREMENT"; name: string } 
  | { type: "CLEARCART"  };

type CartContextType = {
  cart: CartItem[];
  addItem: (product: Omit<CartItem, "quantity">) => void;
  deleteItem: (name: string) => void;
  increment: (name: string) => void;
  decrement: (name: string) => void;
  clearCart : ()=> void;
};

// Initial State
const initialCart: CartState = {
  cart: [],
};

// Reducer
function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADDITEM": {
      const existingItem = state.cart.find(
        (item) => item.name === action.product.name
      );

      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.name === action.product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        const newItem = { ...action.product, quantity: 1 };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case "DELETEITEM": {
      const updatedCart = state.cart.filter((item) => item.name !== action.name);
      return { ...state, cart: updatedCart };
    }

    case "INCREMENT": {
      const updatedCart = state.cart.map((item) =>
        item.name === action.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      return { ...state, cart: updatedCart };
    }

    case "DECREMENT": {
        const updatedCart = state.cart
          .map((item) => {
            if (item.name === action.name) {
              if (item.quantity === 1) {
                // Remove the item if quantity is 1
                return null; // Mark the item for removal
              } else {
                // Otherwise decrement the quantity
                return { ...item, quantity: item.quantity - 1 };
              }
            }
            return item;
          })
          .filter((item) => item !== null); // Remove the marked item (null) from the cart
        
        return { ...state, cart: updatedCart };
      }
      case "CLEARCART": {
        return { ...state, cart: [ ] }
      }
      

    default:
      throw new Error(`Unsupported action type: ${(action as Action).type}`);
  }
}

// Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider
export function CartContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialCart);

  const addItem = (product: Omit<CartItem, "quantity">) => {
    dispatch({ type: "ADDITEM", product });
  };

  const deleteItem = (name: string) => {
    dispatch({ type: "DELETEITEM", name });
  };

  const increment = (name: string) => {
    dispatch({ type: "INCREMENT", name });
  };

  const decrement = (name: string) => {
    dispatch({ type: "DECREMENT", name });
  };

  const clearCart = ()=> {
    dispatch({type : 'CLEARCART'})
  }

  return (
    <CartContext.Provider
      value={{ cart: state.cart, addItem, deleteItem, increment, decrement, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Export Context
export default CartContext;
