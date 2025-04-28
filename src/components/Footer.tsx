import React from 'react';
import Logo from './Logo';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-green-100">
              Türkiye'nin en kaliteli Antep fıstığı üreticisi ve pazarlamacısı olarak 1982'den beri hizmetinizdeyiz.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Ana Sayfa</a></li>
              <li><a href="#products" className="text-green-200 hover:text-white transition-colors">Ürünlerimiz</a></li>
              <li><a href="#about" className="text-green-200 hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#contact" className="text-green-200 hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ürün Kategorileri</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Kavrulmuş Fıstık</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Çiğ Fıstık</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Tuzlu Fıstık</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Fıstık Ezmesi</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Müşteri Hizmetleri</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Sipariş Takibi</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">İade Politikası</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="text-green-200 hover:text-white transition-colors">Teslimat Bilgileri</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-12 pt-8 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} Ersan Fıstık İşletmesi. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;