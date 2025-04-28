import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/70">
        <img 
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg" 
          alt="Antep Fıstığı" 
          className="object-cover w-full h-full opacity-50"
        />
      </div>
      
      {/* Hero content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Türkiye'nin Güvenilir <span className="text-green-300">Antep Fıstığı</span> Tedarikçisi
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              1982'den beri Gaziantep'in bereketli topraklarından, ISO 22000 ve HACCP sertifikalı 
              tesislerimizde üretilen premium kalite Antep fıstıkları.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#products" 
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full 
                          transition-all transform hover:scale-105 font-medium text-lg
                          shadow-lg hover:shadow-xl"
              >
                Ürünlerimiz
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-white hover:bg-green-50 text-green-800 rounded-full 
                          transition-all transform hover:scale-105 font-medium text-lg
                          shadow-lg hover:shadow-xl"
              >
                İletişime Geçin
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,96L60,112C120,128,240,160,360,165.3C480,171,600,149,720,138.7C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;