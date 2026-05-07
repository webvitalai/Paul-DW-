import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import ServiceCard from '../components/ServiceCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ProcessSection from '../components/ProcessSection';
import ContactForm from '../components/ContactForm';

const services = [
  {
    title: "Driveway Cleaning",
    description: "Deep restoration for block paving, concrete, and tarmac surfaces. We remove all moss, weeds, and grime.",
    image: "/services/drivewaycleaning2.png",
    dirtyImage: "/services/drivewaycleaning1.png"
  },
  {
    title: "Patio & Path Cleaning",
    description: "Restore the natural beauty of your Indian sandstone, limestone, or porcelain patio tiles.",
    image: "/services/patiopathcleaning2.png",
    dirtyImage: "/services/patiopathcleaning1.png"
  },
  {
    title: "Oil & Stain Removal",
    description: "Specialist chemical treatments to lift stubborn oil, rust, and tyre marks from your driveway.",
    image: "/services/oilstainremoval2.png",
    dirtyImage: "/services/oilstainremoval1.png"
  },
  {
    title: "Sealing & Protection",
    description: "Premium protective coatings that prevent weed growth, repel stains, and enhance surface color.",
    image: "/services/sealingprotection2.png",
    dirtyImage: "/services/sealingprotection1.png"
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Popular Services</h2>
              <p className="text-lg md:text-xl text-slate-500">
                We use industrial-grade equipment and eco-friendly solutions to deliver results that last.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>
      <BeforeAfterSlider />
      <ProcessSection />
      
      {/* Professional CTA Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to Transform Your Property?</h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Join hundreds of satisfied homeowners across the UK who have restored their driveways and patios to their original glory.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-highlight transition-all shadow-2xl">
                Request a Free Quote
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-[120px]" />
        </div>
      </section>
    </>
  );
}
