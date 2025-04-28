import React from 'react';
import { Nut } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Nut className="text-green-600 h-8 w-8 mr-2" />
      <div className="flex flex-col">
        <span className="font-bold text-green-800 text-xl tracking-tight">ERSAN</span>
        <span className="text-green-600 text-xs uppercase tracking-widest -mt-1">FISTIK</span>
      </div>
    </div>
  );
};

export default Logo;