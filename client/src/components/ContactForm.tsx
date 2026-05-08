import React from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-soft-white">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl border-white/40">
          {/* Info Side */}
          <div className="lg:w-2/5 bg-primary p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Get Your Free <br />Quote Today</h2>
              <p className="text-white/70 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
                Fill out the form and our team will get back to you within 24 hours with a personalized estimate for your property.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-xl font-bold">0777 883 3981</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-xl font-bold">info@paul.co.uk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-1">Our Location</p>
                    <p className="text-xl font-bold">Stockport,Manchester United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-8 md:p-12 bg-white/50">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="07778 833981"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Service Required</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all appearance-none">
                  <option>Driveway Cleaning</option>
                  <option>Patio Cleaning</option>
                  <option>Stain Removal</option>
                  <option>Sealing & Protection</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none"
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full btn-primary flex items-center justify-center gap-3 py-5 text-lg">
                  Send Request <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
