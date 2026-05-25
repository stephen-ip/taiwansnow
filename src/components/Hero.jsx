import taiwanSnowLogo from "../assets/Taiwan_Snow_Logo.png";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-layout">
        <div className="hero-content">
          <img
            src={taiwanSnowLogo.src}
            className="hero-logo"
            alt="Taiwan Snow logo"
          />
          <p className="eyebrow">Authentic Taiwanese shaved snow</p>
          <h1>Taiwan Snow</h1>
          <p className="hero-copy">Fluffy, creamy Taiwanese shaved snow</p>
          <div className="hero-actions">
            <a href="#menu" className="hero-button primary">
              View Menu
            </a>
            <a href="#contact" className="hero-button secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
