import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  dirtyImage: string;
  index: number;
}

export default function ServiceCard({ title, description, image, dirtyImage, index }: ServiceCardProps) {
  const [isAutoActive, setIsAutoActive] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAutoActive((prev) => !prev);
    }, 3000); // Toggle every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
    >
      <div className="relative h-64 overflow-hidden">
        {/* Dirty Image (Base) */}
        <img 
          src={dirtyImage} 
          alt={`${title} dirty`}
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] contrast-[1.2]"
          loading="lazy"
        />
        
        {/* Clean Image (Overlay with mask) */}
        <motion.div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: isAutoActive ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img 
            src={image} 
            alt={`${title} clean`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
        </motion.div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <motion.span 
            animate={{ 
              backgroundColor: isAutoActive ? 'rgba(16, 185, 129, 1)' : 'rgba(30, 41, 59, 0.5)',
            }}
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors duration-500"
          >
            {isAutoActive ? 'Restored' : 'Needs Care'}
          </motion.span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-500 mb-6 leading-relaxed">
          {description}
        </p>
        <button className="flex items-center gap-2 font-bold text-primary group/btn">
          Learn More 
          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}
