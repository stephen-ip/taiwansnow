import businessInfo from "../data/businessInfo";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-content">
        <h2>Contact Us</h2>
        <p>
          Email:{" "}
          <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
        </p>
        <p>
          Instagram:{" "}
          <a
            href={`https://www.instagram.com/${businessInfo.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            @{businessInfo.instagram}
          </a>
        </p>
        <p>
          Phone: <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
