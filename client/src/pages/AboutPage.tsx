import React from 'react';
import { Shield, Sparkles, Clock, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Restoring Pride in Every Property</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              PureJet Surface Care is a family-run business dedicated to providing the highest standard of exterior cleaning across the UK.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              We started with a single pressure washer and a passion for transformation. Today, we use the industry's most advanced equipment to deliver results that our competitors simply can't match. Our commitment to quality, reliability, and customer satisfaction remains at the heart of everything we do.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Shield size={24} />
                </div>
                <span className="font-bold">Fully Insured</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Sparkles size={24} />
                </div>
                <span className="font-bold">Eco-Friendly</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="/about/aboutus.png" 
              alt="Cleaning in progress" 
              className="rounded-[3rem] shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 glass-card p-8 rounded-3xl">
              <p className="text-4xl font-bold text-primary mb-1">100%</p>
              <p className="text-slate-500 font-medium">Satisfaction Rate</p>
            </div>
          </div>
        </div>

        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-white">Why Choose PureJet?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold">Reliable Service</h3>
                <p className="text-white/70">We value your time. We show up when we say we will and work efficiently.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-xl font-bold">Expert Results</h3>
                <p className="text-white/70">Our deep-cleaning methods remove even the most stubborn stains and moss.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto">
                  <MapPin size={32} />
                </div>
                <h3 className="text-xl font-bold">Local Experts</h3>
                <p className="text-white/70">Serving communities across the UK with local knowledge and care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
