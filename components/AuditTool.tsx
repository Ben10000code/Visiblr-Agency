import React, { useState } from 'react';
import { Search, Loader2, MapPin, AlertCircle, TrendingUp, Mail } from 'lucide-react';
import { performBusinessAudit } from '../services/geminiService';
import { AuditResult } from '../types';

export const AuditTool: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !city || !email) return;

    setLoading(true);
    setResult(null);

    try {
      const data = await performBusinessAudit({
        businessName,
        city,
        category: "Local Business"
      });
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="audit-tool" className="w-full max-w-4xl mx-auto px-4 scroll-mt-32">
      <div className="bg-white rounded-4xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-gray-100">
        
        <div className="text-center mb-10">
          <span className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">
            Free Analysis
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark mb-4">
            Is Your Business Invisible?
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto text-lg">
            Enter your details below to unlock your Google Map ranking report.
          </p>
        </div>

        <form onSubmit={handleAudit} className="flex flex-col gap-4 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Business Name"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="w-full h-16 pl-14 pr-6 bg-gray-50 border-2 border-transparent text-zinc-900 font-bold focus:outline-none focus:border-brand-primary focus:bg-white transition-all naked-pill-input text-lg placeholder:font-medium placeholder:text-zinc-400"
                required
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 w-6 h-6" />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="City / Area"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full h-16 pl-14 pr-6 bg-gray-50 border-2 border-transparent text-zinc-900 font-bold focus:outline-none focus:border-brand-primary focus:bg-white transition-all naked-pill-input text-lg placeholder:font-medium placeholder:text-zinc-400"
                required
              />
              <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 w-6 h-6" />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
             <div className="relative flex-1">
              <input
                type="email"
                placeholder="Email Address (where to send report)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-16 pl-14 pr-6 bg-gray-50 border-2 border-transparent text-zinc-900 font-bold focus:outline-none focus:border-brand-primary focus:bg-white transition-all naked-pill-input text-lg placeholder:font-medium placeholder:text-zinc-400"
                required
              />
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 w-6 h-6" />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="h-16 bg-brand-dark hover:bg-black text-white font-bold px-10 rounded-full transition-all hover:scale-105 flex items-center justify-center min-w-[200px] shadow-lg text-lg whitespace-nowrap"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Get Free Audit"}
            </button>
          </div>
        </form>

        {result && (
          <div className="animate-fade-in border-t border-gray-100 pt-10 mt-6">
            <div className="bg-green-50 text-green-800 p-4 rounded-xl text-center font-medium mb-8">
                Report for <strong>{result.businessName}</strong> has been generated and sent to {email}.
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Score Card */}
              <div className="col-span-1 bg-gray-50 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                <div className="text-zinc-500 text-sm font-bold uppercase mb-4 tracking-wide">Visibility Score</div>
                <div className={`text-7xl font-black mb-4 ${
                  result.visibilityScore > 80 ? 'text-brand-primary' : 
                  result.visibilityScore > 50 ? 'text-yellow-500' : 'text-red-500'
                }`}>
                  {result.visibilityScore}
                </div>
                <div className="text-sm font-bold text-zinc-400">out of 100</div>
              </div>

              {/* Analysis */}
              <div className="md:col-span-2">
                <h3 className="text-2xl font-black text-brand-dark mb-4">Audit Summary</h3>
                <p className="text-zinc-600 mb-8 text-lg leading-relaxed">{result.summary}</p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-2xl">
                    <h4 className="flex items-center gap-2 font-black text-red-600 mb-4 text-sm uppercase tracking-wide">
                      <AlertCircle className="w-5 h-5" /> Weaknesses
                    </h4>
                    <ul className="space-y-3">
                      {result.weaknesses.map((item, idx) => (
                        <li key={idx} className="text-sm font-medium text-zinc-700 flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0"></span>
                            {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-2xl">
                    <h4 className="flex items-center gap-2 font-black text-green-600 mb-4 text-sm uppercase tracking-wide">
                      <TrendingUp className="w-5 h-5" /> Opportunities
                    </h4>
                    <ul className="space-y-3">
                      {result.recommendations.map((item, idx) => (
                        <li key={idx} className="text-sm font-medium text-zinc-700 flex items-start gap-2">
                             <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"></span>
                            {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {result.sources.length > 0 && (
                  <div className="mt-8">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Sources:</p>
                    <div className="flex flex-wrap gap-2">
                      {result.sources.map((source, idx) => (
                        <a 
                          key={idx} 
                          href={source.uri} 
                          target="_blank" 
                          rel="noreferrer"
                          className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-zinc-500 hover:text-brand-primary hover:bg-green-50 transition-colors truncate max-w-[200px]"
                        >
                          {source.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <a href="#booking" className="inline-flex items-center gap-2 text-brand-primary font-black text-lg hover:underline decoration-2 underline-offset-4">
                Book a Full Consultation <TrendingUp className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};