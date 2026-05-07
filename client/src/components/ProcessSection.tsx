import React from 'react';
import { motion } from 'motion/react';
import { Search, Droplets, Sparkles, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Inspect",
    description: "We assess the surface type, stains, and drainage to choose the best cleaning method."
  },
  {
    icon: Droplets,
    title: "Deep Clean",
    description: "Our industrial-grade pressure washers remove moss, algae, and deep-seated grime."
  },
  {
    icon: Sparkles,
    title: "Restore",
    description: "We treat stubborn oil stains and re-sand joints to make the surface look brand new."
  },
  {
    icon: ShieldCheck,
    title: "Protect",
    description: "Optional premium sealing to prevent future growth and protect against the elements."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Our 4-Step Restoration Process</h2>
          <p className="text-lg md:text-xl text-slate-500">
            We don't just wash; we restore. Our systematic approach ensures a perfect finish every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-slate-100 z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-3xl bg-soft-white flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:-translate-y-2">
                  <step.icon size={40} />
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-primary border border-slate-50">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
