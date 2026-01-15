
import React, { useState } from 'react';
import { Menu, X, MapPin, ChevronRight, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AuditTool } from './components/AuditTool';
import { Services } from './components/Services';
import { BookingSection } from './components/BookingSection';
import { MapVisualization } from './components/MapVisualization';
import { CookieBanner } from './components/CookieBanner';
import { Logo } from './components/Logo';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-brand-primary selection:text-white">
      {/* Navigation - Transparent on Green */}
      <nav className="absolute top-0 left-0 w-full z-40 pt-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo 
            circleColor="bg-white" 
            iconColor="text-brand-primary" 
            textColor="text-white" 
            dotColor="text-white" 
          />

          <div className="hidden md:flex items-center gap-8 font-semibold text-white/90">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors cursor-pointer">Services</a>
            <a href="#audit-tool" onClick={(e) => scrollToSection(e, 'audit-tool')} className="hover:text-white transition-colors cursor-pointer">Free Audit</a>
            <a href="#blog" onClick={(e) => scrollToSection(e, 'blog')} className="hover:text-white transition-colors cursor-pointer">Blog</a>
            <a href="#booking" onClick={(e) => scrollToSection(e, 'booking')} className="bg-white text-brand-primary px-6 py-3 rounded-full font-bold hover:bg-zinc-100 transition-all hover:scale-105 cursor-pointer">
              Book Strategy Call
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-4 right-4 bg-white rounded-3xl p-6 flex flex-col gap-4 shadow-2xl z-50">
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="py-3 px-4 hover:bg-gray-50 rounded-xl font-bold cursor-pointer">Services</a>
            <a href="#audit-tool" onClick={(e) => scrollToSection(e, 'audit-tool')} className="py-3 px-4 hover:bg-gray-50 rounded-xl font-bold cursor-pointer">Free Audit</a>
            <a href="#booking" onClick={(e) => scrollToSection(e, 'booking')} className="py-3 px-4 bg-brand-primary text-white rounded-full font-bold text-center cursor-pointer">Book Strategy Call</a>
          </div>
        )}
      </nav>

      {/* Hero Section - The "Naked" Green Header */}
      <header className="bg-brand-primary pt-40 pb-32 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-12 tracking-tight text-white leading-[0.95]">
            Get Visiblr on <br/>
            your <span className="text-brand-dark">Business.</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#audit-tool" onClick={(e) => scrollToSection(e, 'audit-tool')} className="w-full sm:w-auto px-10 py-5 bg-brand-dark text-white font-bold text-lg rounded-full hover:bg-black transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-xl cursor-pointer">
              Audit My Business Free
            </a>
          </div>
        </div>
        
        {/* Decorative elements similar to screenshot */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/5 to-transparent"></div>
      </header>

      {/* Main Interactive Tool - Floating Card Style */}
      <div className="-mt-20 relative z-20 mb-20">
         <AuditTool />
      </div>

      {/* Social Proof Strip - Clean & Rounded */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm mb-8">People are loving Visiblr</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
               <div className="bg-gray-50 px-6 py-3 rounded-full flex items-center gap-2 font-bold text-zinc-600">
                  <CheckCircle className="text-brand-primary" /> Google Partner
               </div>
               <div className="bg-gray-50 px-6 py-3 rounded-full flex items-center gap-2 font-bold text-zinc-600">
                  <Star className="text-brand-primary" /> 5-Star Rated
               </div>
               <div className="bg-gray-50 px-6 py-3 rounded-full flex items-center gap-2 font-bold text-zinc-600">
                  Cape Town Local
               </div>
            </div>
        </div>
      </div>

      <Services />

      <BookingSection />

      {/* Problem/Solution Block - Redesigned to be "Naked" style (Clean, large type) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-16 leading-tight">
                Get up to <span className="text-brand-primary">3x more calls</span><br/>
                for claiming your spot.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Visual Map Component */}
                <MapVisualization />
                
                <div className="space-y-8">
                    <p className="text-2xl font-medium text-zinc-600 leading-relaxed">
                        46% of all Google searches are seeking local information. If your business doesn't appear in the top 3 map results, you are invisible.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                             <div className="w-10 h-10 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center">
                                <ArrowRight className="w-5 h-5" />
                             </div>
                             <span className="font-bold text-lg">Optimize for "Near Me" searches</span>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                             <div className="w-10 h-10 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center">
                                <ArrowRight className="w-5 h-5" />
                             </div>
                             <span className="font-bold text-lg">Increase phone calls & direction requests</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section id="blog" className="py-24 bg-brand-gray scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl font-black">Want to know more <span className="text-brand-primary">about SEO?</span></h2>
             <a href="#blog" onClick={(e) => scrollToSection(e, 'blog')} className="hidden md:flex items-center gap-2 font-bold border-2 border-zinc-900 rounded-full px-6 py-2 hover:bg-zinc-900 hover:text-white transition-all cursor-pointer">
                See all articles <ArrowRight className="w-4 h-4" />
             </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "How to get more 5-star reviews (Ethically)", category: "Reputation" },
              { title: "Why your GMB listing got suspended", category: "Troubleshooting" },
              { title: "The hidden power of GMB Posts", category: "Optimization" },
            ].map((post, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-brand-primary">
                <span className="inline-block px-3 py-1 bg-green-50 text-brand-primary text-xs font-bold uppercase tracking-wide mb-4 rounded-full">{post.category}</span>
                <h3 className="text-xl font-bold mb-6 group-hover:text-brand-primary transition-colors">{post.title}</h3>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-brand-primary group-hover:text-white transition-colors ml-auto">
                   <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-20 rounded-t-4xl mt-12 mx-2">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm">
          <div className="col-span-2">
            <Logo 
              className="mb-6"
              circleColor="bg-white" 
              iconColor="text-brand-dark" 
              textColor="text-white" 
              dotColor="text-brand-primary" 
            />
            <p className="text-zinc-400 max-w-sm text-lg leading-relaxed mb-8">
              Helping South African businesses get found, get trusted, and get booked.
            </p>
             <div className="flex flex-col gap-2 text-zinc-400 font-medium">
                <a href="mailto:hello@visiblragency.co.za" className="hover:text-brand-primary transition-colors">hello@visiblragency.co.za</a>
                <span>Cape Town, South Africa</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Services</h4>
            <ul className="space-y-4 text-zinc-400 font-medium">
              <li><a href="#service-creation" onClick={(e) => scrollToSection(e, 'service-creation')} className="hover:text-brand-primary transition-colors cursor-pointer">GBP Creation</a></li>
              <li><a href="#service-management" onClick={(e) => scrollToSection(e, 'service-management')} className="hover:text-brand-primary transition-colors cursor-pointer">Monthly Management</a></li>
              <li><a href="#service-optimization" onClick={(e) => scrollToSection(e, 'service-optimization')} className="hover:text-brand-primary transition-colors cursor-pointer">Optimisation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Legal</h4>
            <ul className="space-y-4 text-zinc-400 font-medium">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-16 pt-8 border-t border-zinc-800 text-xs text-zinc-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Visiblr Agency. Cape Town, South Africa.</p>
        </div>
      </footer>

      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}

export default App;
