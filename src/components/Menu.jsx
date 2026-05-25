export default function Menu() {
  return (
    <section id="menu">
      <h2>Our Flavors</h2>
      <div className="menu-item">
        <div className="menu-image">
          <img src={`${import.meta.env.BASE_URL}mango.jpg`} />
        </div>
        <div className="menu-info">
          <h3>Mango Shaved Snow</h3>
          <p>
            Made with real mango and creamy Taiwanese snow ice.
            Light, refreshing, and naturally sweet.
          </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="menu-image">
          <img src={`${import.meta.env.BASE_URL}matcha.jpg`} />
        </div>
        <div className="menu-info">
          <h3>Matcha Shaved Snow</h3>
          <p>
            Premium Japanese matcha blended into smooth milk snow.
            Rich and slightly bitter flavor.
          </p>
        </div>
      </div>

      <div className="menu-item">
        <div className="menu-image">
          <img src={`${import.meta.env.BASE_URL}strawberries.jpg`} />
        </div>
        <div className="menu-info">
          <h3>Strawberry Shaved Snow</h3>
          <p>
            Fresh strawberry flavor with a creamy base.
            Sweet with a light tangy finish.
          </p>
        </div>
      </div>
    </section>
  )
}