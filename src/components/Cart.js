import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext);

  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p style={{fontSize: "18px"}}>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} width={50} />
                <span>{item.title} - ${item.price}</span>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <p style={{color: "#4169E1"}}>{item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${getTotalPrice()}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
