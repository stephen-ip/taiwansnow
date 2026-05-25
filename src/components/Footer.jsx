import businessInfo from "../data/businessInfo";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2026 {businessInfo.name}</p>
      </div>
    </footer>
  );
}

export default Footer;