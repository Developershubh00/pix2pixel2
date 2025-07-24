import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a101f] py-6 md:py-10 border-t border-[#1f2937] footer-mobile">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center footer-content-mobile">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl md:text-2xl font-bold">
              <span className="gradient-text">PIX2PIXEL</span>
            </a>
            <p className="text-gray-400 mt-1 md:mt-2 text-sm md:text-base">
              Strategize, Secure, Succeed
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4 mb-4 md:mb-0 footer-links-mobile">
            <a href="#home" className="text-gray-300 hover:text-[#03e9f4] transition-colors text-sm md:text-base">Home</a>
            <a href="#about" className="text-gray-300 hover:text-[#03e9f4] transition-colors text-sm md:text-base">About</a>
            <a href="#services" className="text-gray-300 hover:text-[#03e9f4] transition-colors text-sm md:text-base">Services</a>
            <a href="#process" className="text-gray-300 hover:text-[#03e9f4] transition-colors text-sm md:text-base">Process</a>
            <a href="#testimonials" className="text-gray-300 hover:text-[#03e9f4] transition-colors text-sm md:text-base">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-[#03e9f4] transition-colors text-sm md:text-base">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-[#1f2937] mt-4 md:mt-8 pt-4 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-0">
            &copy; {currentYear} Pix2Pixel. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#03e9f4] transition-colors text-xs md:text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#03e9f4] transition-colors text-xs md:text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;