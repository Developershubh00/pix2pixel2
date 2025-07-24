import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface QuoteFormProps {
  show: boolean;
  onClose: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [show]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, company, service, message } = formData;

    const whatsappText = `*New Quote Request* 🚀

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Company:* ${company}
*Service:* ${service}
*Message:* ${message}`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappNumber = '919918096894'; // With country code
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappLink, '_blank');

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          className={`form-popup ${show ? 'open' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="form-container"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text">Get a Quote</span>
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  required
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="form-input"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-4">
                <select
                  name="service"
                  className="form-input"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select Service *</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="network-solutions">Network Solutions</option>
                  <option value="it-security">IT Security</option>
                  <option value="video-production">Video Production</option>
                </select>
              </div>
              
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Tell us about your project *"
                  rows={4}
                  required
                  className="form-input"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="gradient-btn text-white px-8 py-3 text-lg font-medium w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteForm;
