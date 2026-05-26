function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong>NoteMindAI</strong>
            <p>
              A calm study workspace built for students who want to revise faster, understand their
              notes better, and stay focused during exam season.
            </p>
          </div>
          <div className="footer-links">
            <strong>Product</strong>
            <a href="#dashboard-preview">My Notes</a>
            <a href="#dashboard-preview">Upload</a>
            <a href="#dashboard-preview">Chat with Notes</a>
          </div>
          <div className="footer-links">
            <strong>Support</strong>
            <a href="#help">Help Center</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="copyright">
          <small>&copy; 2026 NoteMindAI. All rights reserved.</small>
          <small>Designed for focused exam preparation and distraction-free study.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
