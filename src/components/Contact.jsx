import businessInfo from "../data/businessInfo";
import "../styles/Contact.css";

function Contact() {
  const icons = {
    email: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
    instagram: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M17.5 6.8h.01" />
      </svg>
    ),
    phone: (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
      </svg>
    ),
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-content">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Get in touch with Taiwan Snow</h2>
          <p className="contact-intro">
            Questions? Send us a note and we will follow up!
          </p>
        </div>
        <div className="contact-links" aria-label="Contact options">
          <a href={`mailto:${businessInfo.email}`}>
            {icons.email}
            <span>{businessInfo.email}</span>
          </a>
          <a
            href={`https://www.instagram.com/${businessInfo.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            {icons.instagram}
            <span>@{businessInfo.instagram}</span>
          </a>
          <a href={`tel:${businessInfo.phone}`}>
            {icons.phone}
            <span>{businessInfo.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
