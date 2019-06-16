import React from "react";

import Header from "../../header";
import Footer from "../../footer";

const Impressum = () => {
  return (
    <React.Fragment>
      <Header />
      <div style={impressumContainerStyle}>
        <div style={impressumStyle} className="impressum">
          <h1>Impressum</h1>
          <h3 style={impressumContainerH3Style}>
            Angaben gem&auml;&szlig; &sect; 5 TMG
          </h3>
          <p>Thomas Miller</p>
          <h3 style={impressumContainerH3Style}>Kontakt</h3>
          <p>E-Mail: info@thomasmiller.tk</p>
          <h3 style={impressumContainerH3Style}>
            Verantwortlich f&uuml;r den Inhalt nach &sect; 55 Abs. 2 RStV
          </h3>
          <p>
            Thomas, Miller
            <br />
            info@thomasmiller.tk
          </p>
          <h3 style={impressumContainerH3Style}>
            Haftung f&uuml;r Inhalte
          </h3>{" "}
          <p>
            Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
            f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
            gespeicherte fremde Informationen zu &uuml;berwachen oder nach
            Umst&auml;nden zu forschen, die auf eine rechtswidrige
            T&auml;tigkeit hinweisen.
          </p>{" "}
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
            dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
            m&ouml;glich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>{" "}
          <h3 style={impressumContainerH3Style}>Haftung f&uuml;r Links</h3>{" "}
          <p>
            Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
            deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
            f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
            &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
            stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
            &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
            Verlinkung nicht erkennbar.
          </p>{" "}
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>{" "}
          <h3 style={impressumContainerH3Style}>Urheberrecht</h3>{" "}
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
            bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
            den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>{" "}
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
          <br />
          <h3 style={impressumContainerH3Style}>Blog Comment Policy</h3>
          <p>
            <ul>
              <li>
                {" "}
                Use of any of the curse words and/or slurs we have on our
                blacklist will automatically flag a comment so it won’t appear
                on our site. Sometimes these words are used as part of a good
                discussion, these comments will be approved by a moderator when
                appropriate.
              </li>
              <li>
                Using a Disqus account without a verified email address will
                automatically flag a comment.
              </li>
              <li>
                Fluctuations in the space time continuum. Sometimes things just
                get auto-flagged and we don’t know why.
              </li>
              <li>
                Comments can also be flagged for review by our readership
                (please do not abuse this option for other users you simply
                disagree with, it makes our moderation jobs a lot harder).
              </li>
            </ul>
          </p>
          <h4>Here are some things which will get your comment deleted.</h4>
          <p>
            <ul>
              <li>
                Personal attacks against another commenter or the writer of the
                post/website. This can run from name calling to sentences which
                include the words “people like you” or statements which begin “I
                bet you” or “you must/probably” etc. This is regardless of what
                “side” you’re on.
              </li>
              <li>
                Jokes or aggressive negative comments on the aesthetic
                appearance of a person (commenters, writers, and folks mentioned
                in an article alike).
              </li>
              <li>
                Hate speech or other clearly intentional jerk behavior. This
                includes, but is not limited to: the use of the word feminazi or
                a comments which denigrates women, feminism or feminists, the
                LGBTQ community; broad imprecations or assumptions based on
                race; and anything that amounts to “ugh the gays,” “ugh
                liberals,” “ugh, fangirls,” etc.
              </li>
            </ul>
          </p>
          <p>
            Quelle:{" "}
            <a href="https://www.e-recht24.de/impressum-generator.html">
              https://www.e-recht24.de/impressum-generator.html
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

const impressumStyle = {
  textAlign: "left",
  width: "95%",
  padding: "10px",
  margin: "0 auto",
  fontSize: "15px",
  borderStyle: "solid",
  backgroundColor: "rgb(211, 211, 211)"
};

const impressumContainerStyle = {
  width: "100%",
  backgroundColor: "rgb(44, 34, 34)",
  padding: "25px 0"
};

const impressumContainerH3Style = { width: "auto" };

export default Impressum;
