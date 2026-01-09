import React, { useState } from 'react';
import { Calendar, CheckCircle, Clock, Check } from 'lucide-react';

export const BookingSection: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'booked'>('idle');

  const handleBooking = () => {
    if (!selectedSlot) return;
    // Simulate API call
    setTimeout(() => {
        setBookingStatus('booked');
    }, 800);
  };

  return (
    <section id="booking" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-brand-dark text-white rounded-4xl p-8 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative Blob */}
          <div className="absolute -left-20 -bottom-40 w-96 h-96 bg-zinc-800 rounded-full opacity-30 blur-3xl"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-6 block">Ready to start?</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Stop Losing Customers to Competitors.
              </h2>
              <p className="text-zinc-400 mb-10 text-xl leading-relaxed">
                Book a free 15-minute "Local Visibility Audit". We'll show you exactly why you aren't ranking #1.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <div className="bg-zinc-800 p-2 rounded-full"><CheckCircle className="text-brand-primary w-6 h-6" /></div>
                  <span className="font-bold text-lg">No obligation, 100% free insight</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="bg-zinc-800 p-2 rounded-full"><CheckCircle className="text-brand-primary w-6 h-6" /></div>
                  <span className="font-bold text-lg">Actionable steps you can do yourself</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="bg-zinc-800 p-2 rounded-full"><CheckCircle className="text-brand-primary w-6 h-6" /></div>
                  <span className="font-bold text-lg">South African market expertise</span>
                </li>
              </ul>
            </div>

            <div className="bg-white text-zinc-900 p-8 rounded-3xl shadow-xl transform md:rotate-2 hover:rotate-0 transition-all duration-500">
              
              {bookingStatus === 'idle' ? (
                <>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
                        <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                            <span className="font-black text-brand-primary text-xl">W</span>
                        </div>
                        <div>
                            <div className="font-black text-lg">William (Visiblr)</div>
                            <div className="text-sm text-zinc-500 font-medium">15 min Meeting</div>
                        </div>
                        </div>
                        <Calendar className="text-zinc-300 w-6 h-6" />
                    </div>

                    {/* Time Slots */}
                    <div className="text-center py-2">
                        <p className="text-sm font-bold text-zinc-400 mb-6 uppercase tracking-wider">Select a time for tomorrow</p>
                        <div className="grid grid-cols-3 gap-3 mb-8">
                        {['09:00', '11:30', '14:00'].map((time) => (
                            <button
                            key={time}
                            onClick={() => setSelectedSlot(time)}
                            className={`py-3 px-2 border-2 rounded-xl text-sm font-bold transition-all ${
                                selectedSlot === time 
                                ? 'border-brand-primary bg-brand-primary/5 text-brand-primary' 
                                : 'border-gray-100 hover:border-brand-primary hover:text-brand-primary'
                            }`}
                            >
                            {time}
                            </button>
                        ))}
                        </div>
                        <button 
                        onClick={handleBooking}
                        disabled={!selectedSlot}
                        className={`w-full font-black py-5 rounded-full transition-all shadow-lg text-lg flex items-center justify-center gap-2 ${
                            selectedSlot 
                            ? 'bg-brand-primary text-white hover:bg-green-600 hover:scale-105' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        >
                        Confirm Booking
                        </button>
                    </div>
                </>
              ) : (
                <div className="py-12 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black mb-2">You're Booked!</h3>
                    <p className="text-zinc-500 font-medium mb-8">
                        Calendar invite sent for <strong>tomorrow at {selectedSlot}</strong>.
                    </p>
                    <button 
                        onClick={() => setBookingStatus('idle')}
                        className="text-brand-primary font-bold hover:underline"
                    >
                        Book another time
                    </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};