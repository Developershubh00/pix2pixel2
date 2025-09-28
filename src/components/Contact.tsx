import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  openQuoteForm: () => void;
}

const Contact: React.FC<ContactProps> = ({ openQuoteForm }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-12 md:py-20 relative bg-white dot-grid">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            <span className="text-[#1A237E] font-bold">Let's Connect</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to elevate your brand? Get in touch with us today and let's start creating something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 md:p-8 rounded-lg border border-gray-200 shadow-lg"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#1A237E]">Contact Information</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start">
                <div className="text-[#00BCD4] mr-3 md:mr-4 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base text-[#1A237E]">Address</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Tedhi Puliya, Lucknow, Uttar Pradesh</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00BCD4] mr-3 md:mr-4 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base text-[#1A237E]">Email</h4>
                  <p className="text-gray-600 text-xs md:text-sm">info@pix2pixel.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#00BCD4] mr-3 md:mr-4 mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-sm md:text-base text-[#1A237E]">Phone</h4>
                  <p className="text-gray-600 text-xs md:text-sm">+91 9918096894</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base text-[#1A237E]">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#00BCD4] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#00BCD4] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#00BCD4] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-[#00BCD4] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#1A237E]">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
              Fill out our quick form and we'll get back to you within 24 hours to discuss your project needs and how we can help bring your vision to life.
            </p>
            <div className="space-y-4">
              <motion.button
                onClick={openQuoteForm}
                className="blue-gradient-btn text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium w-full md:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
              <p className="text-gray-500 text-xs md:text-sm text-center mt-4">
                No obligation, just a conversation to see if we're a good fit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;