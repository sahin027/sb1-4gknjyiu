import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Mehmet Yılmaz',
    position: 'Pastane İşletmecisi',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: 'Ersan Fıstık\'tan aldığımız Antep fıstıkları lezzet ve tazelik açısından rakipsiz. Baklava ve kadayıflarımızın kalitesi bu sayede her zaman en üst seviyede.'
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    position: 'Ev Hanımı',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    text: '10 yıldır sadece Ersan Fıstık\'tan alışveriş yapıyorum. Ürünlerin kalitesi ve müşteri hizmetleri her zaman mükemmel. Tüm arkadaşlarıma tavsiye ediyorum.'
  },
  {
    id: 3,
    name: 'Ali Kaya',
    position: 'Şef',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    text: 'Profesyonel mutfağımız için Ersan Fıstık\'ın ürünlerini tercih ediyoruz. Kalite standardı her zaman yüksek ve bu bizim için çok önemli.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Müşteri Yorumları</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Müşterilerimizin bizim hakkımızda söyledikleri
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-green-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;