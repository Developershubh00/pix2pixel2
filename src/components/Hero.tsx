import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  openQuoteForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ openQuoteForm }) => {
  const waveRef = useRef<HTMLDivElement>(null);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919918096894', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-12 flex items-center overflow-hidden bg-[#080e1c] hero-mobile">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#03e9f4]/10 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7928ca]/10 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      <div ref={waveRef} className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#03e9f4]/20 blur-[100px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7928ca]/20 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-6 md:gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight hero-title-mobile"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  We Don't Just Edit.
                </motion.span>
                <br />
                <motion.span 
                  className="gradient-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  We Brand
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed hero-subtitle-mobile"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                In a world where digital presence is everything, Pix2Pixel offers more than just services—we create lasting connections between your brand and its audience.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start hero-buttons-mobile"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <motion.button
                  onClick={openQuoteForm}
                  className="gradient-btn text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium hero-button-mobile touch-target"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 0, 128, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  Get Started <ArrowRight className="ml-2 inline" size={20} />
                </motion.button>
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="border border-[#03e9f4] text-[#03e9f4] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-full text-center hover:bg-[#03e9f4]/10 transition-colors flex items-center justify-center hero-button-mobile touch-target"
                  whileHover={{ scale: 1.05, borderColor: "#60efff" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                >
                  Connect on WhatsApp
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-[#03e9f4]/20 rounded-full blur-xl"
                  animate={{
                    y: [-10, 10, -10],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-10 h-10 md:w-16 md:h-16 bg-[#7928ca]/20 rounded-full blur-xl"
                  animate={{
                    y: [10, -10, 10],
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <motion.img 
                    src="https://images.pexels.com/photos/8102680/pexels-photo-8102680.jpeg" 
                    alt="Digital Marketing" 
                    className="rounded-lg shadow-2xl relative z-10 w-full h-full object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;