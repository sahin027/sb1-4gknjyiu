import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const categories = ['Tümü', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = activeCategory === 'Tümü' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Ürünlerimiz</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En taze ve lezzetli Antep fıstıklarımızı keşfedin. Tüm ürünlerimiz doğal ve katkısızdır.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                          ${activeCategory === category 
                            ? 'bg-green-600 text-white' 
                            : 'bg-white text-green-800 hover:bg-green-100'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;