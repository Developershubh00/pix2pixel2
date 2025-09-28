import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight * 3; // Make it taller for scrolling
    
    // Create stars
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Random position
      star.style.left = `${Math.random() * containerWidth}px`;
      star.style.top = `${Math.random() * containerHeight}px`;
      
      // Random size
      const size = Math.random() * 1.5 + 0.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Set color to match new theme
      star.style.backgroundColor = '#00BCD4';
      star.style.opacity = '0.3';
      
      // Random delay
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(star);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ height: '300vh' }}
    ></div>
  );
};

export default StarField;