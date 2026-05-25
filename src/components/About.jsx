import businessInfo from "../data/businessInfo";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="section light-section">
      <div className="about">
        <div className="about-copy">
          <p className="section-kicker">About Our Business</p>
          <p className="about-lede">{businessInfo.description}</p>
          <p>
            Unlike traditional shaved ice, our snow ice is made from flavored
            milk blocks, creating a smooth and creamy texture that melts in your
            mouth. We serve at farmers markets, school events, and private
            caterings.
          </p>
        </div>
        <div className="about-highlights" aria-label="Taiwan Snow highlights">
          <div>
            <strong>Milk snow</strong>
            <span>Creamy, ribbon-like texture</span>
          </div>
          <div>
            <strong>Pop-up ready</strong>
            <span>Markets, schools, parties</span>
          </div>
          <div>
            <strong>Seasonal</strong>
            <span>Fruit-forward flavor ideas</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
