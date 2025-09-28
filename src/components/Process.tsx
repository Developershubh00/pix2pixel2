import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProcessGraphic: React.FC<{ inView: boolean }> = ({ inView }) => {
  const steps = [
    { x: 150, y: 200, icon: "💡", title: "Discover", delay: 0 },
    { x: 350, y: 120, icon: "🎯", title: "Strategize", delay: 0.5 },
    { x: 550, y: 180, icon: "⚡", title: "Create", delay: 1 },
    { x: 750, y: 100, icon: "🛠️", title: "Support", delay: 1.5 }
  ];

  return (
    <div className="relative w-full h-[350px] mb-8 overflow-hidden">
      <svg viewBox="0 0 900 300" className="w-full h-full">
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 188, 212, 0.1)" strokeWidth="1"/>
          </pattern>
          <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00BCD4" />
            <stop offset="33%" stopColor="#673AB7" />
            <stop offset="66%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#00BCD4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />
        
        {/* Main connecting path */}
        <motion.path
          d="M 150 200 Q 250 80 350 120 Q 450 160 550 180 Q 650 120 750 100"
          stroke="url(#processGradient)"
          strokeWidth="4"
          fill="none"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          filter="url(#glow)"
          animate={inView ? { strokeDashoffset: 0 } : { strokeDashoffset: 2000 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Flowing particles along the path */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            r="3"
            fill="#00BCD4"
            opacity="0.8"
            animate={inView ? {
              offsetDistance: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3 + 1,
              ease: "linear"
            }}
            style={{
              offsetPath: "path('M 150 200 Q 250 80 350 120 Q 450 160 550 180 Q 650 120 750 100')",
            }}
          />
        ))}

        {/* Step circles with enhanced animations */}
        {steps.map((step, index) => (
          <motion.g key={index}>
            {/* Outer ring animation */}
            <motion.circle
              cx={step.x}
              cy={step.y}
              r="45"
              fill="none"
              stroke="rgba(0, 188, 212, 0.3)"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { 
                scale: [0, 1.2, 1], 
                opacity: [0, 0.6, 0.3] 
              } : { scale: 0, opacity: 0 }}
              transition={{ 
                duration: 1, 
                delay: step.delay + 1,
                type: "spring",
                stiffness: 100
              }}
            />
            
            {/* Main circle */}
            <motion.circle
              cx={step.x}
              cy={step.y}
              r="35"
              fill="url(#processGradient)"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { 
                scale: [0, 1.1, 1], 
                opacity: 1 
              } : { scale: 0, opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: step.delay + 1.2,
                type: "spring",
                stiffness: 150
              }}
            />
            
            {/* Icon */}
            <motion.text
              x={step.x}
              y={step.y + 8}
              textAnchor="middle"
              className="text-2xl fill-white"
              initial={{ opacity: 0 }}
              animate={inView ? { 
                opacity: 1,
                scale: [0, 1.2, 1]
              } : { opacity: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: step.delay + 1.5 
              }}
            >
              {step.icon}
            </motion.text>
            
            {/* Pulsing effect */}
            <motion.circle
              cx={step.x}
              cy={step.y}
              r="35"
              fill="none"
              stroke="#00BCD4"
              strokeWidth="2"
              opacity="0"
              animate={inView ? {
                scale: [1, 1.5],
                opacity: [0.8, 0],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: step.delay + 2,
              }}
            />
          </motion.g>
        ))}

        {/* Background floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i}
            cx={100 + i * 70}
            cy={150 + Math.sin(i) * 80}
            r={2 + Math.random() * 3}
            fill={i % 2 === 0 ? "#00BCD4" : "#673AB7"}
            opacity="0.4"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
      
      {/* Step labels */}
      <div className="absolute inset-0 pointer-events-none">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="absolute text-center"
            style={{ 
              left: `${(step.x / 900) * 100}%`, 
              top: `${(step.y / 300) * 100 + 20}%`,
              transform: 'translateX(-50%)'
            }}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={inView ? { 
              opacity: 1, 
              y: 0, 
              scale: 1 
            } : { 
              opacity: 0, 
              y: 20, 
              scale: 0.8 
            }}
            transition={{ 
              duration: 0.6, 
              delay: step.delay + 1.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#00BCD4]/30 shadow-lg">
              <div className="text-sm font-semibold text-[#1A237E]">{step.title}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const steps = [
    {
      title: "Consultation",
      description: "We dive deep into your brand, your dreams, and your goals.",
      icon: "💡",
      detail: "Understanding your vision and requirements"
    },
    {
      title: "Strategize", 
      description: "We craft a custom game plan, blending tech strength with creative magic.",
      icon: "🎯",
      detail: "Tailored strategies for your success"
    },
    {
      title: "Create & Secure",
      description: "We build, edit, secure, and story tell — making sure every detail shines.",
      icon: "⚡",
      detail: "Implementation with latest technology"
    },
    {
      title: "Grow Together",
      description: "We stick around, fine-tuning and supporting you as your business evolves.",
      icon: "🛠️",
      detail: "Continuous support and maintenance"
    }
  ];

  return (
    <section id="process" className="py-12 md:py-16 relative bg-[#F5F5F5] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00BCD4]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#673AB7]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#00BCD4] to-[#673AB7] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">⚡</span>
            </div>
          </motion.div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            <span className="text-[#1A237E] font-bold">HOW WE WORK</span>
          </h2>
          <p className="text-sm md:text-base text-[#424242] max-w-3xl mx-auto leading-relaxed">
            Our proven process ensures consistent quality and results
          </p>
        </motion.div>

        {/* Desktop/Tablet View - Curved Path */}
        <div className="hidden lg:block relative max-w-7xl mx-auto mb-12">
          <ProcessGraphic inView={inView} />
        </div>

        {/* Process Steps Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 text-[#1A237E]">
            Here's how we turn your vision into reality:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#00BCD4] transition-all duration-300 group shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start">
                  <motion.div
                    className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-[#1A237E] group-hover:text-[#00BCD4] transition-colors">
                      {index + 1}. {step.title}
                    </h4>
                    <p className="text-[#424242] text-sm leading-relaxed group-hover:text-[#1A237E] transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-center text-lg text-[#00BCD4] font-semibold mt-8"
          >
            Because for us, it's not just a project. It's a partnership for the long run.
          </motion.p>
        </motion.div>

        {/* Mobile/Tablet View - Simplified Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00BCD4] to-[#673AB7] rounded-full"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: 'top' }}
            />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                className="relative flex items-start mb-6 last:mb-0"
              >
                {/* Dot */}
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-[#00BCD4] to-[#673AB7] rounded-full flex items-center justify-center text-lg z-10 flex-shrink-0 shadow-lg"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: [0, 1.2, 1] } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {step.icon}
                </motion.div>
                
                {/* Content */}
                <div className="ml-4 bg-white p-4 rounded-lg border border-gray-200 flex-1 hover:border-[#00BCD4] transition-all duration-300 shadow-lg">
                  <h3 className="text-sm font-semibold mb-2 text-[#1A237E]">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-xs text-[#424242] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;