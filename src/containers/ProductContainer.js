import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setIsLoading(false);
      });
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category) {
      setFilteredProducts(products.filter((product) => product.category === category));
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <ProductList
      products={filteredProducts}
      isLoading={isLoading}
      onFilter={handleFilter}
      activeCategory={activeCategory}
    />
  );
};

export default ProductContainer;
