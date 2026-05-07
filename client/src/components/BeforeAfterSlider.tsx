import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const showBefore = () => setSliderPos(100);
  const showAfter = () => setSliderPos(0);

  return (
    <section className="py-16 md:py-24 bg-soft-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6"
          >
            The PureJet Transformation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500"
          >
            Drag the slider to see how we restore even the most neglected surfaces to their original glory.
          </motion.p>
        </div>

        {/* Mobile Buttons */}
        <div className="flex justify-center gap-4 mb-4 md:hidden">
          <button 
            onClick={showBefore}
            className="px-6 py-3 bg-primary text-white rounded-full font-bold shadow-lg"
          >
            BEFORE
          </button>
          <button 
            onClick={showAfter}
            className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-full font-bold shadow-lg"
          >
            AFTER
          </button>
        </div>

        <div 
          ref={containerRef}
          className="relative aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl cursor-ew-resize select-none border-4 border-white"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Clean) - Full background */}
          <div className="absolute inset-0">
            <img 
              src="/slider/1.png" 
              alt="Clean Driveway"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Before Image (Dirty) - Clipped */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          >
            <img 
              src="/slider/2.png" 
              alt="Dirty Driveway"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Labels */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/80 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-primary shadow-lg text-sm md:text-base">
            AFTER
          </div>
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full font-bold text-white shadow-lg text-sm md:text-base">
            BEFORE
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white z-10 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-primary border-4 border-primary/10">
              <MoveHorizontal size={20} className="md:size-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
