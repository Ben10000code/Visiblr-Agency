import React from 'react';
import { Map, Star, BarChart3, Check, Settings, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: "service-creation",
    icon: Map,
    title: "Profile Creation & Verification",
    frequency: "Once-Off",
    description: "We handle the entire setup and verification process to ensure your business is officially listed.",
    features: ["Google Ownership Claim", "Video Verification Assistance", "Category Configuration"]
  },
  {
    id: "service-optimization",
    icon: Settings,
    title: "Profile Optimisation",
    frequency: "Once-Off",
    description: "A comprehensive audit and update to maximize your visibility and appeal to local customers.",
    features: ["SEO Keyword Integration", "Photo Gallery Curation", "Service Area Refinement"]
  },
  {
    id: "service-management",
    icon: BarChart3,
    title: "Monthly Profile Management",
    frequency: "Monthly",
    description: "Ongoing active management to maintain rankings, fight spam, and engage with reviews.",
    features: ["Weekly GMB Posts", "Review Response Management", "Performance Reporting"]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-gray scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-6 tracking-tight">
            The "Map Pack" Strategy
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            100% digital management for your local presence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} id={service.id} className="bg-white p-10 rounded-4xl hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2 scroll-mt-32 relative overflow-hidden">
              <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <service.icon className="w-8 h-8" />
              </div>
              
              <div className="absolute top-10 right-10">
                 <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${service.frequency === 'Monthly' ? 'bg-blue-50 text-brand-blue' : 'bg-green-50 text-brand-primary'}`}>
                    {service.frequency}
                 </span>
              </div>

              <h3 className="text-2xl font-black text-brand-dark mb-4">{service.title}</h3>
              <p className="text-zinc-500 mb-8 leading-relaxed font-medium">
                {service.description}
              </p>
              
              <div className="border-t border-gray-100 pt-6">
                <ul className="space-y-4">
                    {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm font-bold text-zinc-600">
                        <Check className="w-5 h-5 text-brand-primary mr-3" />
                        {feature}
                    </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};