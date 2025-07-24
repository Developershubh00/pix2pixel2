import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Shield, Users, Award } from 'lucide-react';

const AnimatedCounter: React.FC<{ end: number; suffix: string; duration?: number }> = ({ 
  end, 
  suffix, 
  duration = 2 
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-2xl md:text-3xl font-bold text-[#03e9f4] mb-2">
      {count}{suffix}
    </div>
  );
};

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      {/* Stand Out Section */}
      <section className="py-12 md:py-16 relative bg-[#080e1c]">
        <div className="container mx-auto px-4">
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-[#03e9f4]/10 rounded-full blur-xl"
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-24 h-24 bg-[#7928ca]/10 rounded-full blur-xl"
              animate={{
                y: [20, -20, 20],
                x: [10, -10, 10],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#03e9f4] to-[#7928ca] rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              <span className="gradient-text">Stand Out in the Crowd</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We help your brand rise above the clutter. Through our expert solutions, we position you as an industry leader. This not only strengthens your brand but also helps you hire top talent, generate valuable leads, and secure your brand. In a world full of noise, we ensure your voice stands out and makes an impact.

            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              { number: 70, suffix: '+', label: 'Client', icon: Users },
              { number: 60, suffix: '+', label: 'Successful Projects', icon: Award },
              { number: 10, suffix: '+', label: 'Profressional', icon: Users },
              { number: 5, suffix: '+', label: 'Years Of Experience', icon: Shield }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#111827]/60 backdrop-blur-md p-4 md:p-6 rounded-lg border border-[#03e9f4]/20 text-center hover:border-[#03e9f4]/40 transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="mb-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  <stat.icon className="w-6 h-6 mx-auto text-[#03e9f4] group-hover:text-[#60efff] transition-colors" />
                </motion.div>
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 md:py-16 relative dot-grid">
        <div className="container mx-auto px-4">
          {/* Animated background grid */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(3, 233, 244, 0.3) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                <span className="gradient-text">Powering Brands with Stories and Security</span>
              </h2>
              <p className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Pix2Pixel, we specialize in blending cutting-edge network solutions with creative digital content to empower businesses in the modern world. We recognized the need for businesses to not only have a robust IT infrastructure but also engaging content that resonates with their audience. This unique combination helps businesses stay connected, grow, and tell their stories effectively.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#111827]/60 backdrop-blur-md p-6 md:p-8 rounded-lg border border-[#03e9f4]/20 hover:border-[#03e9f4]/40 transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Shield className="w-8 h-8 text-[#03e9f4] group-hover:text-[#60efff] transition-colors" />
                </motion.div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#03e9f4]">Network Solutions</h4>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  From setup to security, we provide the infrastructure that keeps your business running smoothly and securely.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#111827]/60 backdrop-blur-md p-6 md:p-8 rounded-lg border border-[#03e9f4]/20 hover:border-[#03e9f4]/40 transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Zap className="w-8 h-8 text-[#03e9f4] group-hover:text-[#60efff] transition-colors" />
                </motion.div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#03e9f4]">Digital Content</h4>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  Our creative team brings your brand's story to life through compelling content and design.
                </p>
              </motion.div>
            </div>

            {/* Why Pix2Pixel Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-8 md:mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block mb-4"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-[#7928ca] to-[#ff0080] rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
                <span className="gradient-text">Why Pix2Pixel?</span>
              </h3>
              <p className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We’re the spark behind secure systems and unforgettable stories. While others offer services, we build legacies — protecting your brand and amplifying its voice in a noisy world. With us, you're not just seen. You're remembered.

              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="gradient-btn text-white px-6 md:px-8 py-3 text-sm md:text-base font-medium transform hover:scale-105 transition-all duration-300"
              >
                Transform Your Brand
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;