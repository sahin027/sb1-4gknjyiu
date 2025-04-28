import React from 'react';
import { X, ShoppingCart, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  cartItems, 
  onClose, 
  onRemoveItem, 
  onUpdateQuantity 
}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300" 
        onClick={onClose}
      ></div>
      
      {/* Cart panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-xl transform transition-transform duration-300 animate-slideIn">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <ShoppingCart className="text-green-600 mr-2" size={20} />
                <h2 className="text-xl font-semibold text-green-800">Sepetim</h2>
                <span className="ml-2 bg-green-100 text-green-800 text-sm px-2 py-0.5 rounded-full">
                  {cartItems.length} ürün
                </span>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          
          {/* Cart items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                <ShoppingCart size={64} className="text-gray-300 mb-4" />
                <p className="text-lg font-medium mb-2">Sepetiniz boş</p>
                <p className="text-sm">Hemen alışverişe başlayın ve sepetinizi doldurun.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.product.id} className="flex bg-white rounded-lg p-3 border border-gray-100">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="text-green-800 font-medium">{item.product.name}</h3>
                        <button 
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-gray-500 text-sm">{item.product.price} ₺</p>
                      <div className="flex items-center mt-2">
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 flex items-center justify-center bg-gray-100 
                                    rounded-full text-gray-600 hover:bg-gray-200"
                        >
                          -
                        </button>
                        <span className="mx-3 w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-100 
                                    rounded-full text-gray-600 hover:bg-gray-200"
                        >
                          +
                        </button>
                        <span className="ml-auto font-medium text-green-700">
                          {(item.product.price * item.quantity).toFixed(2)} ₺
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Toplam</span>
              <span className="text-green-700">{totalPrice.toFixed(2)} ₺</span>
            </div>
            <button 
              disabled={cartItems.length === 0}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg
                        font-medium transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Siparişi Tamamla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;