import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  const phoneNumber = "01234567890";
  const whatsappNumber = "441234567890"; // UK format for WhatsApp

  return (
    <div className="fixed bottom-8 right-6 z-[100] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20ba5a] transition-colors"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={30} fill="currentColor" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ opacity: 0, scale: 0.5, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-primary/90 transition-colors"
        title="Call Us Now"
      >
        <Phone size={28} fill="currentColor" />
      </motion.a>
    </div>
  );
}
