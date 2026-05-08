import React from 'react';
import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32">
      <div className="container mx-auto px-6 mb-16 md:mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          {/* Left Side: Text */}
          <div className="lg:w-1/2 text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Contact Our Team
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-500 leading-relaxed"
            >
              Have a question or ready to book your transformation? Get in touch today for a free, no-obligation quote. Our experts are ready to restore your property to its former glory.
            </motion.p>
          </div>

          {/* Right Side: Single Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <img 
              src="/contact/1.png" 
              alt="Professional Cleaning Result"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      <ContactForm />

      {/* Map Section */}
      <div className="container mx-auto px-6 mb-16 md:mb-24">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
          <p className="text-lg text-slate-500">Find us here - we're ready to help you transform your property</p>
        </div>
        <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-[400px] md:h-[500px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76091.05708208203!2d-2.2314619474234063!3d53.417588603415204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a3515ca33c427%3A0xf418f67b823efe48!2sStockport%2C%20UK!5e0!3m2!1sen!2s!4v1778225129636!5m2!1sen!2s" width="1250" height="450" style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"></iframe>
        </div>
      </div>
    </div>
  );
}

