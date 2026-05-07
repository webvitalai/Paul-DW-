import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  "/banner/1.png",
  "/banner/2.png",
  "/banner/3.png"
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[90vh] overflow-hidden bg-soft-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          {/* Left Side: Text Content - 40% */}
          <div className="w-full lg:w-2/5 order-2 lg:order-1">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-2 mb-6 md:mb-8 rounded-lg bg-primary/10 text-primary text-xs md:text-sm font-bold tracking-widest uppercase border border-primary/20"
            >
              UK's Premium Surface Care
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary leading-[1.1] md:leading-[0.9] mb-6 md:mb-8"
            >
              Restore Your <br />
              <span className="text-secondary">
                Driveway
              </span> <br />
              To Perfection
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 max-w-xl leading-relaxed font-medium"
            >
              Experience the ultimate cleaning transformation. We bring back the "new home" feeling to your property with professional-grade restoration.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-5"
            >
              <Link to="/contact" className="btn-primary w-full sm:w-auto text-center">
                Get a Free Quote
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full font-bold border-2 border-primary/20 text-primary hover:bg-primary/5 transition-all w-full sm:w-auto text-center">
                Explore Services
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Image Slider - 60% */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-3/5 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img 
                    src={images[currentIndex]}
                    alt="Clean driveway transformation"
                    className="w-full h-full object-cover"
                    fetchPriority="high"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Page Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex ? 'bg-primary w-8' : 'bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
