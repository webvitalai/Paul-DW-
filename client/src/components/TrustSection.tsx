import React from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Users, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Users, label: "Happy Customers", value: "500+" },
  { icon: Star, label: "5-Star Reviews", value: "100%" },
  { icon: Shield, label: "Fully Insured", value: "£5M" },
  { icon: CheckCircle, label: "Years Experience", value: "10+" },
];

export default function TrustSection() {
  return (
    <section className="py-12 md:py-20 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <stat.icon size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
