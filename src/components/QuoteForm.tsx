import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
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
  const [statusMessage, setStatusMessage] = useState('');
  
  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [show]);

  // Initialize EmailJS (you'll need to replace these with your actual values)
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration - Replace with your actual service ID, template ID, etc.
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
        to_email: 'admin@pix2pixel.com'
      };

      // Send email using EmailJS
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams
      );

      setSubmitStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setSubmitStatus('idle');
        onClose();
      }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppFallback = () => {
    const { name, email, phone, company, service, message } = formData;

    const whatsappText = `*New Quote Request* 🚀

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Company:* ${company}
*Service:* ${service}
*Message:* ${message}`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappNumber = '919918096894';
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    window.open(whatsappLink, '_blank');
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
            
            <h3 className="text-2xl font-bold mb-6 text-center text-[#1A237E]">
              Get a Quote
            </h3>
            
            {submitStatus === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
              >
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <p className="text-green-700 text-sm">{statusMessage}</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
              >
                <AlertCircle className="text-red-500 mr-3" size={20} />
                <div>
                  <p className="text-red-700 text-sm mb-2">{statusMessage}</p>
                  <button
                    onClick={handleWhatsAppFallback}
                    className="text-[#00BCD4] text-sm underline hover:text-[#00E5FF]"
                  >
                    Send via WhatsApp instead
                  </button>
                </div>
              </motion.div>
            )}
            
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="mb-4">
                <select
                  name="service"
                  className="form-input"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <div className="flex gap-3">
                <motion.button
                  type="submit"
                  className={`gradient-btn text-white px-8 py-3 text-lg font-medium flex-1 flex items-center justify-center ${
                    isSubmitting ? 'loading' : ''
                  }`}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Submit Request
                    </>
                  )}
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={handleWhatsAppFallback}
                  className="border-2 border-[#25D366] text-[#25D366] px-6 py-3 text-lg font-medium rounded-full hover:bg-[#25D366]/10 transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  WhatsApp
                </motion.button>
              </div>
              
              <p className="text-gray-500 text-xs text-center mt-4">
                We'll respond within 24 hours. Your information is secure and will never be shared.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteForm;