import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel: React.FC<{ inView: boolean }> = ({ inView }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO",
      company: "TechStart Solutions",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      testimonial: "Pix2Pixel transformed our brand completely. Their network solutions and creative design helped us scale from a startup to industry leader.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Marketing Director",
      company: "Digital Innovations",
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      testimonial: "Outstanding service! Their social media management increased our engagement by 300%. Highly professional team.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Founder",
      company: "EcoTech India",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      testimonial: "Their IT security solutions saved our business from potential threats. Excellent technical expertise and support.",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      role: "Brand Manager",
      company: "Fashion Forward",
      image: "https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      testimonial: "Creative brilliance at its best! Our brand identity and marketing campaigns exceeded all expectations.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Operations Head",
      company: "LogiFlow Systems",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      testimonial: "Network infrastructure setup was seamless. Zero downtime and excellent performance. Truly professional service.",
      rating: 5
    },
    {
      name: "Kavya Reddy",
      role: "Digital Head",
      company: "HealthCare Plus",
      image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      testimonial: "Their video production quality is exceptional. Our promotional videos went viral and brought tremendous growth.",
      rating: 5
    }
  ];

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main testimonial display */}
      <div className="relative overflow-hidden rounded-xl">
        <motion.div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#111827]/80 backdrop-blur-md p-8 rounded-xl border border-[#03e9f4]/30 relative group hover:border-[#03e9f4]/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-[#03e9f4]/20 group-hover:text-[#03e9f4]/40 transition-colors">
                  <Quote size={32} />
                </div>
                
                {/* Stars */}
                <div className="flex mb-6 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 + 0.5 }}
                    >
                      <Star 
                        size={20} 
                        className="text-yellow-400 fill-current mx-1" 
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Testimonial text */}
                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed mb-8 text-center italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  "{testimonial.testimonial}"
                </motion.p>
                
                {/* Author info */}
                <motion.div 
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#03e9f4]/30"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="text-center">
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-[#03e9f4] text-sm font-medium">{testimonial.company}</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-[#03e9f4]/20 hover:bg-[#03e9f4]/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-[#03e9f4]/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-[#03e9f4]/20 hover:bg-[#03e9f4]/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-[#03e9f4]/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#03e9f4] scale-125' 
                : 'bg-[#03e9f4]/30 hover:bg-[#03e9f4]/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919918096894', '_blank');
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 relative dot-grid">
      <div className="container mx-auto px-4">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#03e9f4]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-[#7928ca]/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 12,
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
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#03e9f4] to-[#7928ca] rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <TestimonialCarousel inView={inView} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center px-6 md:px-8 py-4 "
        >
          <motion.button 
            onClick={handleWhatsAppClick}
            className="blue-gradient-btn text-white px-6 md:px-8 py-4 text-sm md:text-base font-medium"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(3, 233, 244, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Happy Clients
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;