import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consented = localStorage.getItem('visiblr_consent');
    if (!consented) {
      setTimeout(() => setVisible(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('visiblr_consent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-brand-dark text-white rounded-3xl p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800">
        <div className="text-sm md:text-base font-medium text-zinc-300">
          <span className="font-bold text-white">We respect your privacy.</span> We use cookies to ensure Visiblr works perfectly for you and to analyze our traffic (POPIA Compliant).
        </div>
        <div className="flex gap-3 w-full md:w-auto">
             <button 
                onClick={() => setVisible(false)} 
                className="flex-1 md:flex-none px-6 py-3 font-bold text-zinc-400 hover:text-white transition-colors"
             >
                Decline
            </button>
            <button 
                onClick={handleAccept} 
                className="flex-1 md:flex-none px-8 py-3 bg-brand-primary text-white font-bold rounded-full hover:bg-green-600 transition-all shadow-lg whitespace-nowrap"
            >
                Accept All
            </button>
        </div>
      </div>
    </div>
  );
};