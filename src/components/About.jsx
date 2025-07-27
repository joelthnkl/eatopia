import './About.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function About() {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  
  return (
    <section 
      ref={ref}
      id="about" 
      className={`about-section ${hasIntersected ? 'section-fade-in' : ''}`}
    >
      <h2>About Eatopia</h2>
      <p>
        Eatopia was born out of a simple idea — bringing people together through the love of food. 
        Whether you're craving a late-night snack or planning a family feast, we've got your back.
      </p>

      <div className="about-cards">
        <div className="about-card" style={{ animationDelay: hasIntersected ? '0.1s' : '0s' }}>
          <h3>Our Mission</h3>
          <p>
            To make food more accessible, more local, and more personal — one meal at a time.
          </p>
        </div>

        <div className="about-card" style={{ animationDelay: hasIntersected ? '0.3s' : '0s' }}>
          <h3>Our Vision</h3>
          <p>
            We envision a world where people feel more connected through shared dining experiences, 
            powered by seamless technology and real flavors.
          </p>
        </div>

        <div className="about-card" style={{ animationDelay: hasIntersected ? '0.5s' : '0s' }}>
          <h3>Why Eatopia?</h3>
          <p>
            Local restaurants, faster delivery, honest pricing, and an experience that feels like home.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
