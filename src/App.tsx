import { useState } from "react";
import { CartContextProvider } from "./CartContext";
import Cart from "./components/Cart";
import Deserts from "./components/Deserts";
import Modal from  "react-modal";
import OrderSummary from "./components/OrderSummary";

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)', 
    width : '90%',
    maxWidth : '500px'
 
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.70)'
  }
};

export default function App() {

  const [modalIsOpen, setIsOpen] =   useState(false);

  function openModal() {
    setIsOpen(true);
  }
 

  function closeModal() {
    setIsOpen(false);
  }

  return <CartContextProvider> 
    <main className="font-Red_Hat_Text bg-rose100 min-h-screen p-6">
    <section className="flex flex-col max-w-6xl mx-auto  gap-6 lg:flex-row ">
      <Deserts/>
      <Cart openModal={openModal}/>
      <Modal
        isOpen={modalIsOpen} 
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <OrderSummary closeModal={closeModal}/>
      </Modal>
    </section>
  </main>
  </CartContextProvider>
}
