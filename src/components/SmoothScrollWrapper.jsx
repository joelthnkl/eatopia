import { useEffect, useState } from 'react';
import './SmoothScrollWrapper.css';

function SmoothScrollWrapper({ children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add smooth scrolling behavior
    const smoothScroll = (e) => {
      if (e.deltaY) {
        e.preventDefault();
        window.scrollTo({
          top: window.scrollY + e.deltaY * 0.8,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', smoothScroll, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', smoothScroll);
    };
  }, []);

  return (
    <div className="smooth-scroll-wrapper">
      {children}
    </div>
  );
}

export default SmoothScrollWrapper;
