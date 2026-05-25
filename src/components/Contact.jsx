import businessInfo from "../data/businessInfo";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-content">
        <h2>Contact Us</h2>
        <p>Email: {businessInfo.email}</p>
        <a
          className="instagram"
          href="https://www.instagram.com/taiwanshavedsnow/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram: @{businessInfo.instagram}
        </a>

        <p>Phone: {businessInfo.phone}</p>
      </div>
    </section>
  );
}

export default Contact;