import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
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
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // EmailJS configuration - Replace these with your actual values
    const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      message: formData.message,
      to_email: 'your-email@example.com' // Replace with your email
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
            className="form-container bg-white dark:bg-[#111827] text-gray-900 dark:text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="gradient-text text-gray-900 dark:text-white">Get a Quote</span>
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  className="form-input bg-gray-100 dark:bg-[#1f2937] border-gray-300 dark:border-[#374151] text-gray-900 dark:text-white"
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
                  className="form-input bg-gray-100 dark:bg-[#1f2937] border-gray-300 dark:border-[#374151] text-gray-900 dark:text-white"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="form-input bg-gray-100 dark:bg-[#1f2937] border-gray-300 dark:border-[#374151] text-gray-900 dark:text-white"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-4">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="form-input bg-gray-100 dark:bg-[#1f2937] border-gray-300 dark:border-[#374151] text-gray-900 dark:text-white"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mb-4">
                <select
                  name="service"
                  className="form-input bg-gray-100 dark:bg-[#1f2937] border-gray-300 dark:border-[#374151] text-gray-900 dark:text-white"
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
                  className="form-input bg-gray-100 dark:bg-[#1f2937] border-gray-300 dark:border-[#374151] text-gray-900 dark:text-white"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded">
                  Thank you! Your quote request has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded">
                  Sorry, there was an error sending your request. Please try again.
                </div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`gradient-btn text-white px-8 py-3 text-lg font-medium w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteForm;