import "../styles/Product.css";

function Product() {
  return (
    <section id="product" className="section">
      <div className="container">
        <p className="section-kicker">Offerings</p>
        <h2>Fresh snow ice, served your way</h2>

        <div className="card-grid">
          <div className="card">
            <span>01</span>
            <h3>Snow Ice Cups</h3>
            <p>
              Perfect for farmers markets, pop-ups, and quick service events.
              Our snow ice cups are easy to enjoy on the go.
            </p>
          </div>

          <div className="card">
            <span>02</span>
            <h3>Private Events</h3>
            <p>
              Great for birthdays, school events, parties, and celebrations.
              Bring a fun and refreshing dessert experience to your guests.
            </p>
          </div>

          <div className="card">
            <span>03</span>
            <h3>Custom Flavors</h3>
            <p>
              We offer seasonal flavors and special menu ideas for unique events
              and custom orders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
