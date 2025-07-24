import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import storyImage from '../assets/story.png';

const OurStory: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919918096894', '_blank');
  };

  return (
    <section className="py-12 md:py-16 relative bg-[#080e1c]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Our Story</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px]  rounded-lg overflow-hidden border border-[#03e9f4]/30">
              {/* Placeholder for your image */}
              {/* Background Image with 50% opacity */}
  <img
    src={storyImage}
    alt="Story Background"
    className="
      absolute inset-0
      w-[400px] h-[500px]         // mobile view
      md:w-[600px] md:h-[600px]   // desktop view
      object-cover mx-auto opacity-100
    "
  />

 
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-[#03e9f4]/20 rounded-full blur-xl"
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
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#7928ca]/20 rounded-full blur-xl"
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
            </div>
          </motion.div>

          {/* Right side - Story content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-2xl md:text-2xl lg:text-3xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Every brand has a story.
            </motion.h3>
            
            <motion.div 
              className="space-y-4 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-sm md:text-base leading-relaxed">
                Ours began with friendship, late nights, crazy ideas, a little courage, and a lot of coffee.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                We believed that creativity and technology could light up any business — if used the right way.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Pix2Pixel became our way of saying to every brand out there:
              </p>
              <p className="text-[#03e9f4] font-semibold text-base md:text-lg">
                "You're not alone. Let's build your dream, pixel by pixel."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-4"
            >
              <button 
                onClick={handleWhatsAppClick}
                className="gradient-btn text-white px-6 md:px-8 py-3 text-sm md:text-base font-medium"
              >
                Start Your Journey
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;