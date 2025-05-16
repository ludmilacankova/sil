//import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__contacts">
          <div className="footer__contact">
            <p>
              <img src="/phone.svg" alt="phone" /> +420 123 456 789
            </p>
            <p>
              <img src="/email.svg" alt="email" /> info@silporadenstvi.cz
            </p>
          </div>

          <div className="footer__social">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>

        <div className="footer__copyright">
          © 2025 Školící a poradenské centrum SIL. Všechna práva vyhrazena.
        </div>
      </footer>
    </>
  );
}

export default Footer;
