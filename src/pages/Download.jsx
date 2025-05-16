import React from "react";

function Download() {
  return (
    <>
      <div className="section">
        <div className="download">
          <h1>Ke stažení</h1>
          <ul>
            <li>
              <img src="/pdf.png" alt="pdf" />
              <a href="/plna_moc.pdf">Plná moc</a>
            </li>
            <li>
              <img src="/pdf.png" alt="pdf" />
              <a href="/gdpr.pdf">GDPR</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Download;
