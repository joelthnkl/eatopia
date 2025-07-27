import './Hero.css';
import heroImage from '../assets/hotel2.jpg';
import { useEffect, useState } from 'react';

function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div 
        className="hero-background"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: Math.max(0, 1 - scrollY / window.innerHeight)
        }}
      >
        <img src={heroImage} alt="Food delivery" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div 
        className="hero-content" 
        data-aos="fade-up"
        style={{
          opacity: Math.max(0, 1 - scrollY / (window.innerHeight * 0.8))
        }}
      >
        <h1>Bringing Food & People Together</h1>
        <p>
          Swipe the mood. Pick the crew. Find your perfect place.
        </p>
        <div className="hero-buttons">
          <button className="get-started-btn">Get Started</button>
          <button className="see-restaurants-btn">See Restaurants</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
