import React, { useState } from 'react';
import './featureproduct.css';
import shoeImage1 from '../assets/sheo1.jpg';
import shoeImage2 from '../assets/sheo2.jpg';
import shoeImage3 from '../assets/sheo3.jpg';
import shoeImage4 from '../assets/sheo4.jpg';
const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const products = [
    {
      id: 1,
      name: 'Air Jordan 7 Retro',
      brand: 'Nike, Jordan',
      category: 'Men shoes',
      image: shoeImage1,
      price: 120,
      originalPrice: 220,
      discount: 35,
      tag: 'New',
      filter: ['ALL', 'NIKE', 'MEN']
    },
    {
      id: 2,
      name: 'Air Jordan 7 Retro',
      brand: 'Nike, Jordan',
      category: 'Men shoes',
      image: shoeImage2,
      price: 120,
      originalPrice: 220,
      discount: 35,
      filter: ['ALL', 'NIKE', 'MEN']
    },
    {
      id: 3,
      name: 'Air Jordan 7 Retro',
      brand: 'Nike, Jordan',
      category: 'Men shoes',
      image: shoeImage3,
      price: 120,
      originalPrice: 220,
      filter: ['ALL', 'NIKE', 'MEN']
    },
    {
      id: 4,
      name: 'Air Jordan 7 Retro',
      brand: 'Nike, Jordan',
      category: 'Men shoes',
      image: shoeImage4,
      price: 120,
      originalPrice: 220,
      discount: 35,
      filter: ['ALL', 'NIKE', 'MEN' , 'WOMEN']
    }
  ];

  const filters = ['ALL', 'NIKE', 'ADIDAS', 'MEN', 'WOMEN', 'KIDS'];

  const filteredProducts = products.filter(product => 
    activeFilter === 'ALL' || product.filter.includes(activeFilter)
  );

  return (
    <div className="featured-products-container">
      <h2 className="featured-products-title">- FEATURED PRODUCTS -</h2>
      
      <div className="filter-container">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            {product.discount && (
              <div className={`product-discount ${product.tag === 'New' ? 'new-tag' : ''}`}>
                {product.tag === 'New' ? 'New' : `-${product.discount}%`}
              </div>
            )}

            <button className="product-wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>

            <div className="product-image-container">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
              />
            </div>

            <div className="product-details">
              <p className="product-category">{product.category}</p>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-brand">{product.brand}</p>
              
              <div className="product-price-container">
                <div>
                  <span className="product-price">£{product.price}</span>
                  {product.originalPrice && (
                    <span className="product-original-price">
                      £{product.originalPrice}
                    </span>
                  )}
                </div>
                
                <button className="add-to-cart-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;