import React, { useState } from 'react';
import InputLayout from './components/sellerDashboard/InputLayout';
import Cart from './components/cart/Cart';
import BuyerItems from './components/buyerDashboard/BuyerItems';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleAddToCart = (item, size) => {
    const itemToAdd = { ...item, size };
    setCartItems(prevCartItems => [...prevCartItems, itemToAdd]);
    decreaseQuantity(item, size);
  };

  const decreaseQuantity = (item, size) => {
    const updatedItems = items.map(i => {
      if (i.name === item.name) {
        return {
          ...i,
          [size]: i[size] - 1
        };
      }
      return i;
    });
    setItems(updatedItems);
  };

  return (
    <div>
      <InputLayout onAddItem={handleAddItem} />
      <BuyerItems items={items} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
