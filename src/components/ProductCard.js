import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const capitalizeCategory = (category) => {
    return category
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-img" />
      <div>
        <p className="text-align-left" style={{color: "#4169E1", fontSize: "14px"}}>{capitalizeCategory(product.category)}</p>
        <p className="text-align-left" style={{fontSize: "18px"}}><b>{product.title}</b></p>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <p style={{fontSize: "28px"}}><b>${product.price}</b></p>
        {inCart ? (
          <div className="product-amount-cnt">
            <button onClick={() => updateQuantity(product.id, -1)}>-</button>
            <span>{inCart.quantity}</span>
            <button onClick={() => updateQuantity(product.id, 1)}>+</button>
          </div>
        ) : (
          <button style={{borderRadius: "10px", width: "141px", height: "39px", fontSize: "16px"}} className="btn-filled" onClick={() => addToCart(product)}>Add to cart</button>
        )}
        </div>
       </div>
    </div>
  );
};

export default ProductCard;
