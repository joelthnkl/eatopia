import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">Eatopia</div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#restaurants">Restaurants</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eatopia. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
