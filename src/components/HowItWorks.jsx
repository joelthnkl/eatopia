import './HowItWorks.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

function HowItWorks() {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  
  const steps = [
    {
      title: 'Choose your Group Size',
      description: 'Browse through the size you want.',
    },
    {
      title: 'Select Your Vibe',
      description: 'Pick your favorite vibe.',
    },
    {
      title: 'Enjoy',
      description: 'Sit back and relax while we do the work.',
    },
  ];

  return (
    <section 
      ref={ref}
      className={`how-it-works ${hasIntersected ? 'section-fade-in' : ''}`} 
      id="how-it-works"
    >
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div 
            className="step-card" 
            key={index}
            style={{
              animationDelay: hasIntersected ? `${index * 0.2}s` : '0s'
            }}
          >
            <div className="step-number">{index + 1}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
