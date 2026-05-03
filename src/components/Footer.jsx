import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__brand-col">
          <div className="footer__brand">Archibald Innovations</div>
          <p className="footer__tagline">
            A digital studio helping small businesses harness AI, build powerful
            websites, and ship apps that scale.
          </p>
        </div>

        <div>
          <div className="footer__col-title">Services</div>
          <ul className="footer__links">
            <li><a href="#services">AI Consulting</a></li>
            <li><a href="#services">Website Design</a></li>
            <li><a href="#services">App Development</a></li>
          </ul>
        </div>

        <div>
          <div className="footer__col-title">Company</div>
          <ul className="footer__links">
            <li><a href="#process">Our Process</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="mailto:archibaldinnovations@gmail.com">archibaldinnovations@gmail.com</a></li>
          </ul>
        </div>
      </footer>

      <div className="footer__bottom">
        <div className="footer__copy">© 2025 Archibald Innovations. All rights reserved.</div>
        <div className="footer__made">
          Warner Robins, GA · <span>Built with intention</span>
        </div>
      </div>
    </>
  );
}
