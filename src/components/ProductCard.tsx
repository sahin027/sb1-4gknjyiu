import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button 
          className="absolute top-3 right-3 p-2 bg-white rounded-full text-green-600 opacity-0 
                    group-hover:opacity-100 transition-all duration-300 hover:bg-green-50"
        >
          <Heart size={18} />
        </button>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-green-800">{product.name}</h3>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-700">{product.price} ₺</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 
                      rounded-full transition-colors"
          >
            <ShoppingCart size={16} />
            <span>Sepete Ekle</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;