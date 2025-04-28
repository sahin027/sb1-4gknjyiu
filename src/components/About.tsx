import React from 'react';
import { Award, Leaf, Truck, Factory } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">Ersan Fıstık İşletmesi</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              1982 yılında Gaziantep'te kurulan Ersan Fıstık, Türkiye'nin önde gelen Antep fıstığı üreticisi ve 
              tedarikçisi olarak sektörde öncü konumdadır. 40 yılı aşkın tecrübemizle, en kaliteli Antep fıstığı 
              ürünlerini müşterilerimize sunmaktayız.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Modern üretim tesislerimizde, geleneksel değerlerimizi koruyarak, ISO 22000 Gıda Güvenliği Yönetim 
              Sistemi ve HACCP standartlarına uygun üretim yapıyoruz. Üretimden paketlemeye kadar her aşamada 
              kalite kontrollerimiz titizlikle uygulanmaktadır.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="text-center">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory size={28} />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Modern Üretim</h3>
                <p className="text-gray-600 text-sm">ISO 22000 ve HACCP sertifikalı modern üretim tesisleri</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={28} />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Kalite Garantisi</h3>
                <p className="text-gray-600 text-sm">Sürekli kalite kontrol ve laboratuvar analizleri</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf size={28} />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Doğal Ürünler</h3>
                <p className="text-gray-600 text-sm">Katkısız ve doğal yöntemlerle üretim</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck size={28} />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Güvenilir Tedarik</h3>
                <p className="text-gray-600 text-sm">Türkiye'nin her yerine güvenli sevkiyat</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-100 rounded-full z-0"></div>
            
            <img 
              src="https://images.pexels.com/photos/6157054/pexels-photo-6157054.jpeg" 
              alt="Antep Fıstığı" 
              className="rounded-lg shadow-xl relative z-10 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;