import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('features');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7130469/pexels-photo-7130469.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center"
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          SAI CHARAN PASUPULETI
        </motion.h1>
        <motion.span
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Cloud, DevOps & IoT Innovator
          </motion.span>
        

        <motion.p 
          className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Empowering innovation through cloud security, DevOps automation, and smart IoT systems.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <button
           onClick={() => {
            const workSection = document.getElementById('work');
            workSection?.scrollIntoView({ behavior: 'smooth' });
          }
          }
          className="px-8 py-4 rounded-full bg-white text-gray-900 font-medium text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
       >
            Explore My Work
          </button>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-white/10 text-white font-medium text-lg border border-white/30 hover:bg-white/20 transition-colors backdrop-blur-sm transform hover:scale-105"
          >
            Get in Touch
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-300 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        whileHover={{ y: 5 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>
    </section>
  );
};