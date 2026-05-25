import businessInfo from "../data/businessInfo";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img 
          src={`${import.meta.env.BASE_URL}Taiwan_Snow_Logo.png`} 
          className="hero-logo"
          alt="Taiwan Shaved Snow logo"
        />
        <h1>Taiwan Snow</h1>
        <p>Fluffy, creamy Taiwanese shaved snow.</p>
        <a href="#menu" className="hero-button">View Menu</a>
      </div>
    </section>
  );
}

export default Hero;