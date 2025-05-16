import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formCon = useRef();
  const [isSending, setIsSending] = useState(false); // Stav pro sledování odesílání
  const [statusMessage, setStatusMessage] = useState(""); // Stav pro zprávu po odeslání

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true); // Zaneprázdněnost

    emailjs
      .sendForm(
        "service_on60v1w", // ID služby
        "template_kperi88", // ID template
        formCon.current,
        "Cv-DG9o89o2cH_DBs" // Public key
      )
      .then(
        (result) => {
          setIsSending(false);
          setStatusMessage("Děkujeme, zpráva byla odeslána.");
          formCon.current.reset();
        },
        (error) => {
          setIsSending(false);
          setStatusMessage(
            "Omlouváme se, došlo k chybě. Zkuste to prosím později."
          );
        }
      );
  };

  return (
    <div className="section">
      <div className="footer__contact">
        <h1>Kontakty</h1>
        <h2>Školící a poradenské centrum SIL</h2>
        <p>
          <img src="/phone.svg" alt="phone" /> +420 123 456 789
        </p>
        <p>
          <img src="/email.svg" alt="email" /> info@silporadenstvi.cz
        </p>

        {isSending ? (
          <div className="loading">
            <div className="spinner"></div> {/* Kolečko pro zaneprázdněnost */}
            <p>Odesílání...</p>
          </div>
        ) : (
          <>
            {statusMessage && <p className="message">{statusMessage}</p>}
            {/* Zpráva o stavu */}
            <form ref={formCon} onSubmit={sendEmail}>
              <h3>Zanechte nám zprávu:</h3>
              <label>
                Jméno:
                <input type="text" name="name" required />
              </label>

              <label>
                E-mail:
                <input type="email" name="email" required />
              </label>

              <label>
                Telefon:
                <input type="tel" name="phone" />
              </label>

              <label>
                Zpráva:
                <textarea name="message" rows="7" required></textarea>
              </label>

              <label className="checkbox-label">
                <input type="checkbox" name="terms" required />
                Souhlasím se
                <a href="../download/gdpr.pdf">zpracováním osobních údajů</a>.
              </label>

              <button type="submit">Odeslat</button>
            </form>
            {statusMessage && <p>{statusMessage}</p>} {/* Zpráva o stavu */}
          </>
        )}
      </div>
    </div>
  );
}

export default Contact;
