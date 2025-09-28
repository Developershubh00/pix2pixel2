import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Palette, BarChart, MonitorSmartphone, Database, ShieldCheck } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  inView: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="service-card relative group cursor-pointer"
    >
      {/* Card background with hover effect */}
      <motion.div
        className="absolute inset-0 bg-white rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-[#00BCD4]/30"
      />
      
      {/* Animated border on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#00BCD4] via-[#673AB7] to-[#00E5FF] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ padding: '2px' }}
      >
        <div className="w-full h-full bg-white rounded-lg" />
      </motion.div>
      
      <div className="relative z-10 p-6">
        {/* Icon with animation */}
        <motion.div
          className="mb-4 text-[#00BCD4] bg-[#00BCD4]/10 p-3 rounded-full w-fit group-hover:bg-[#00BCD4]/20 transition-colors duration-300"
          whileHover={{ 
            rotate: 360,
            scale: 1.1
          }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="text-lg font-bold mb-3 text-[#1A237E] group-hover:text-[#00BCD4] transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-[#424242] text-sm leading-relaxed group-hover:text-[#1A237E] transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {description}
        </motion.p>
        
        {/* Hover effect particles */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            className="w-2 h-2 bg-[#00BCD4] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      title: "Graphic Design",
      description: "Our designers craft everything from logos to complete visual identities, ensuring your brand not only looks great but also communicates effectively.",
      icon: <Palette size={20} />
    },
    {
      title: "Marketing",
      description: "Our marketing experts develop comprehensive strategies that drive engagement, enhance your brand presence and deliver measurable results.",
      icon: <BarChart size={20} />
    },
    {
      title: "Social Media Management",
      description: "Our brand strategists ensure that all our creative efforts align with your business goals, making every solution we provide both effective and sustainable.",
      icon: <MonitorSmartphone size={20} />
    },
    {
      title: "Network Solutions",
      description: "Our networking specialists optimize and secure your digital infrastructure, ensuring seamless connectivity and robust protection.",
      icon: <Database size={20} />
    },
    {
      title: "IT Security",
      description: "Protecting your business from digital threats with comprehensive security solutions and monitoring systems.",
      icon: <ShieldCheck size={20} />
    },
    {
      title: "Video Production",
      description: "Creating compelling video content that captivates your audience and tells your brand story effectively.",
      icon: <Zap size={20} />
    }
  ];

  return (
    <section id="services" className="py-12 md:py-16 relative bg-[#F5F5F5]">
      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #00BCD4 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#00BCD4]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#673AB7]/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#00BCD4] to-[#673AB7] rounded-full flex items-center justify-center shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            <span className="text-[#1A237E] font-bold">OUR SERVICES</span>
          </h2>
          <p className="text-sm md:text-base text-[#424242] max-w-3xl mx-auto leading-relaxed">
            We offer IT solutions, system integration, marketing, and graphic design services to give our clients a competitive edge in the market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
            className="relative overflow-hidden bg-gradient-to-r from-[#673AB7] to-[#2196F3] text-white px-6 md:px-8 py-3 text-sm md:text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 188, 212, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00BCD4] to-[#00E5FF] opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            />
            <span className="relative z-10">Get Started Today</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;