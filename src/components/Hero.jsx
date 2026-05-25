import taiwanSnowLogo from "../assets/Taiwan_Snow_Logo.png";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img
          src={taiwanSnowLogo.src}
          className="hero-logo"
          alt="Taiwan Shaved Snow logo"
        />
        <h1>Taiwan Snow</h1>
        <p>Fluffy, creamy Taiwanese shaved snow.</p>
        <a href="#menu" className="hero-button">
          View Menu
        </a>
      </div>
    </section>
  );
}

export default Hero;
