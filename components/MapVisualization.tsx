import React from 'react';
import { MapPin, Star, MoreVertical, Search } from 'lucide-react';

export const MapVisualization: React.FC = () => {
  return (
    <div className="bg-gray-100 rounded-4xl p-8 aspect-square flex flex-col relative overflow-hidden shadow-inner">
      {/* Search Bar Simulation */}
      <div className="bg-white rounded-full p-4 shadow-sm flex items-center gap-3 mb-6 relative z-10">
        <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center">
            <Search className="w-4 h-4" />
        </div>
        <div className="h-2 bg-gray-100 rounded-full w-32"></div>
        <MoreVertical className="w-5 h-5 text-gray-300 ml-auto" />
      </div>

      {/* Map Area */}
      <div className="flex-1 relative">
         {/* Roads */}
         <div className="absolute top-1/4 left-0 w-full h-8 bg-white/50 -rotate-6 transform scale-125"></div>
         <div className="absolute top-0 right-1/4 h-full w-8 bg-white/50 rotate-12 transform scale-125"></div>

         {/* Competitor Pins (Gray) */}
         <div className="absolute top-10 left-10 animate-bounce" style={{ animationDuration: '3s' }}>
             <div className="w-12 h-12 bg-gray-300 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white">
                 <MapPin className="w-6 h-6" />
             </div>
         </div>
         <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDuration: '4s' }}>
             <div className="w-12 h-12 bg-gray-300 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white">
                 <MapPin className="w-6 h-6" />
             </div>
         </div>

         {/* Hero Pin (Brand) */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative group">
                {/* Ranking Badge */}
                <div className="absolute -top-4 -right-4 bg-brand-dark text-white text-xs font-black px-2 py-1 rounded-lg z-30 shadow-lg scale-110">
                    #1 RANK
                </div>
                
                {/* Main Pin */}
                <div className="w-16 h-16 bg-brand-primary rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white transform transition-transform hover:scale-110 cursor-pointer">
                    <MapPin className="w-8 h-8 fill-current" />
                </div>

                {/* Pulse Effect */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-brand-primary rounded-full animate-ping opacity-20 -z-10"></div>

                {/* Info Card Popover */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white p-4 rounded-xl shadow-xl w-48 text-center transition-opacity opacity-0 group-hover:opacity-100">
                    <div className="font-black text-zinc-800 mb-1">Your Business</div>
                    <div className="flex justify-center gap-1 mb-2">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <div className="text-xs font-bold text-green-600 bg-green-50 rounded-md py-1">Open Now</div>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};