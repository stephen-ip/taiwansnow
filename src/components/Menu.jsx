import mango from "../assets/mango.jpg";
import matcha from "../assets/matcha.jpg";
import strawberries from "../assets/strawberries.jpg";
import "../styles/Menu.css";

export default function Menu() {
  return (
    <section id="menu">
      <div className="container">
        <p className="section-kicker">Menu</p>
        <h2>Signature Flavors</h2>
        <div className="menu-grid">
          <article className="menu-item">
            <div className="menu-image">
              <img src={mango.src} alt="Mango shaved snow" />
            </div>
            <div className="menu-info">
              <span className="menu-tag">Bright + tropical</span>
              <h3>Mango Shaved Snow</h3>
              <p>
                Made with real mango and creamy Taiwanese snow ice. Light,
                refreshing, and naturally sweet.
              </p>
            </div>
          </article>

          <article className="menu-item">
            <div className="menu-image">
              <img src={matcha.src} alt="Matcha shaved snow" />
            </div>
            <div className="menu-info">
              <span className="menu-tag">Earthy + creamy</span>
              <h3>Matcha Shaved Snow</h3>
              <p>
                Premium Japanese matcha blended into smooth milk snow. Rich and
                slightly bitter flavor.
              </p>
            </div>
          </article>

          <article className="menu-item">
            <div className="menu-image">
              <img src={strawberries.src} alt="Strawberry shaved snow" />
            </div>
            <div className="menu-info">
              <span className="menu-tag">Fresh + tangy</span>
              <h3>Strawberry Shaved Snow</h3>
              <p>
                Fresh strawberry flavor with a creamy base. Sweet with a light
                tangy finish.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
