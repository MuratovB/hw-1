import React from 'react';
import ProductCard from './ProductCard';
import Spinner from './Spinner';

const ProductList = ({ products, isLoading, onFilter, activeCategory }) => {
  const getButtonClass = (category) => {
    return activeCategory === category ? 'btn-filled' : 'btn-bordered';
  };

  return (
    <div>
      <div className="filter-buttons">
        <button
          className={getButtonClass('')}
          onClick={() => onFilter('')}
        >
          All
        </button>
        <button
          className={getButtonClass("men's clothing")}
          onClick={() => onFilter("men's clothing")}
        >
          Men’s Clothing
        </button>
        <button
          className={getButtonClass("women's clothing")}
          onClick={() => onFilter("women's clothing")}
        >
          Women’s Clothing
        </button>
        <button
          className={getButtonClass('jewelery')}
          onClick={() => onFilter('jewelery')}
        >
          Jewelery
        </button>
        <button
          className={getButtonClass('electronics')}
          onClick={() => onFilter('electronics')}
        >
          Electronics
        </button>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
