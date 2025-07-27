import './Restaurants.css';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import book from '../assets/book.jpg';
import cat from '../assets/cat.jpg';
import couple from '../assets/couple.jpg';

function Restaurants() {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
  
  const restaurantList = [
    {
      name: ' Cafes',
      tagline: 'Books, brews, and cozy vibes.',
      image: book,
    },
    {
      name: 'Pet Cafes',
      tagline: 'Paws, treats, and cozy cuddles.',
      image: cat,
    },
    {
      name: 'Couple-Friendly Cafes',
      tagline: 'Romantic sips moments.',
      image: couple,
    },
  ];

  return (
    <section 
      ref={ref}
      className={`restaurants ${hasIntersected ? 'section-fade-in' : ''}`} 
      id="restaurants"
    >
      <h2>Popular Restaurants</h2>
      <div className="restaurant-cards">
        {restaurantList.map((rest, index) => (
          <div 
            className="card" 
            key={index}
            style={{
              animationDelay: hasIntersected ? `${index * 0.2}s` : '0s'
            }}
          >
            <img src={rest.image} alt={rest.name} />
            <div className="card-content">
              <h3>{rest.name}</h3>
              <p>{rest.tagline}</p>
              <button>View Cafes</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Restaurants;
