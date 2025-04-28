import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">İletişim</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sorularınız veya siparişleriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <form className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Adınız Soyadınız
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta Adresiniz
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Konu
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="Mesajınızın konusu"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesajınız
                </label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
              >
                Gönder
              </button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-xl font-semibold text-green-800 mb-6">İletişim Bilgilerimiz</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-green-600 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">Adres</h4>
                    <p className="text-gray-600">
                      Karataş Mahallesi, Fevzi Çakmak Bulvarı No: 120,<br />
                      Şahinbey / Gaziantep
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-green-600 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">Telefon</h4>
                    <p className="text-gray-600">+90 342 123 45 67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-green-600 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">E-posta</h4>
                    <p className="text-gray-600">info@ersanfistik.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-green-600 mt-1 mr-4" size={20} />
                  <div>
                    <h4 className="font-medium text-green-800 mb-1">Çalışma Saatleri</h4>
                    <p className="text-gray-600">
                      Pazartesi - Cumartesi: 08:30 - 18:30<br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;