import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import OurStory from './components/OurStory';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import QuoteForm from './components/QuoteForm';
import StarField from './components/StarField';
import ProgressBar from './components/ProgressBar';
import HowWeWork from './components/HowWeWork';

const App: React.FC = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const openQuoteForm = () => {
    setShowQuoteForm(true);
  };

  const closeQuoteForm = () => {
    setShowQuoteForm(false);
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-[#080e1c]">
      <ProgressBar />
      <StarField />
      <Navbar openQuoteForm={openQuoteForm} />
      <main>
        <Hero openQuoteForm={openQuoteForm} />
        <About />
        <Services />
        <Process />
       
        <OurStory />
        <Testimonials />
        <Contact openQuoteForm={openQuoteForm} />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="919918096894" />
      <QuoteForm show={showQuoteForm} onClose={closeQuoteForm} />
    </div>
  );
};

export default App;