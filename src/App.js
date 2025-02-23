import React from 'react';
import { CartProvider } from './contexts/CartContext';
import ProductContainer from './containers/ProductContainer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <ProductContainer />
        <h2>Cart</h2>
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
