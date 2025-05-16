import React from "react";

function AboutUs() {
  return (
    <>
      <div className="section">
        <div className="intro">
          <h1>Školící a poradenské centrum SIL</h1>
          <p>
            Za každým příběhem je člověk – a&nbsp;my jsme tu proto, abychom
            naslouchali a&nbsp;pomáhali.
          </p>
          <p>
            Jsme tu pro vás – ať už procházíte náročným obdobím, potřebujete
            pomoc s&nbsp;úřady nebo daňovým přiznáním. Věříme v&nbsp;osobní
            růst, a&nbsp;proto nabízíme školení a&nbsp;mentoring šité na míru.
            Vaše důvěra je pro nás závazkem.
          </p>
          <p>
            Náš tým tvoří odborníci, kteří vám budou oporou v každé situaci.
          </p>
        </div>
        <div className="boxs">
          <div className="box">
            <div className="portret">
              <img src="/ki.png" />
            </div>
            <div className="medailon">
              <h2>Irena Sedláčková</h2>
              <p>Ekonomka a&nbsp;odbornice na daně. </p>
              <p>
                Kromě školení se vyzná v&nbsp;administrativních záležitostech
                a&nbsp;pomůže vám najít správné úřední informace.{" "}
              </p>
              <p>Je vynikajícím mentorem s&nbsp;hlubokými znalostmi.</p>
            </div>
          </div>
          <div className="box">
            <div className="portret">
              <img src="/ks.png" />
            </div>
            <div className="medailon">
              <h2>Stanislav Blaha</h2>
              <p>
                Zkušený ekonom a&nbsp;odborník na poradenství a&nbsp;jednání
                s&nbsp;úřady.
              </p>
              <p>
                Specializuje se na školení s&nbsp;ekonomickým a&nbsp;právním
                zaměřením. Pomůže vám najít správné cesty i&nbsp;v&nbsp;těch
                nejnáročnějších situacích.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="portret">
              <img src="/kl.png" />
            </div>
            <div className="medailon">
              <h2>Ludmila Čaňková</h2>
              <p>
                Specialistka na IT školení a&nbsp;technické záludnosti při
                jednání s&nbsp;úřady.
              </p>
              <p>
                S její pomocí se snadno zorientujete v&nbsp;elektronických
                žádostech a&nbsp;technických problémech spojených
                s&nbsp;administrativními úkony.&nbsp;&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
