import mango from "../assets/mango.jpg";
import matcha from "../assets/matcha.jpg";
import strawberries from "../assets/strawberries.jpg";
import "../styles/Menu.css";

export default function Menu() {
  return (
    <section id="menu">
      <h2>Our Flavors</h2>
      <div className="menu-item">
        <div className="menu-image">
          <img src={mango.src} alt="Mango shaved snow" />
        </div>
        <div className="menu-info">
          <h3>Mango Shaved Snow</h3>
          <p>
            Made with real mango and creamy Taiwanese snow ice. Light,
            refreshing, and naturally sweet.
          </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="menu-image">
          <img src={matcha.src} alt="Matcha shaved snow" />
        </div>
        <div className="menu-info">
          <h3>Matcha Shaved Snow</h3>
          <p>
            Premium Japanese matcha blended into smooth milk snow. Rich and
            slightly bitter flavor.
          </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="menu-image">
          <img src={strawberries.src} alt="Strawberry shaved snow" />
        </div>
        <div className="menu-info">
          <h3>Strawberry Shaved Snow</h3>
          <p>
            Fresh strawberry flavor with a creamy base. Sweet with a light tangy
            finish.
          </p>
        </div>
      </div>
    </section>
  );
}
