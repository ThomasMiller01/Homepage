import React from "react";

import Header from "../../header";
import Footer from "../../footer";

const googleOptOut = () => {
  window.gaOptout();
};

const Impressum = () => {
  return (
    <React.Fragment>
      <title>Impressum</title>
      <Header />
      <div style={impressumContainerStyle} className="impressum-main">
        <div style={impressumStyle} className="impressum">
          <h1>Impressum</h1>
          <p>Angaben gemäß § 5 TMG</p>
          <p>
            Thomas Miller <br />
          </p>
          <p>
            {" "}
            <strong>Vertreten durch: </strong>
            <br />
            Thomas Miller
            <br />
          </p>
          <p>
            <strong>Kontakt:</strong> <br />
            E-Mail:{" "}
            <a href="mailto:info@thomasmiller.info">info@thomasmiller.info</a>
            <br />
          </p>
          <p>
            <strong>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </strong>
            <br />
            Thomas Miller <br />
          </p>{" "}
          <p>
            <strong>Haftungsausschluss: </strong>
            <br />
            <br />
            <strong>Haftung für Inhalte</strong>
            <br />
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
            wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
            gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
            als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
            <br />
            <br />
            <strong>Haftung für Links</strong>
            <br />
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
            Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
            <br />
            <br />
            <strong>Urheberrecht</strong>
            <br />
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
            <br />
            <br />
            <strong>Datenschutz</strong>
            <br />
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben. <br />
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich. <br />
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
            angeforderter Werbung und Informationsmaterialien wird hiermit
            ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
            von Werbeinformationen, etwa durch Spam-Mails, vor.
            <br />
            <br />
            <strong>Google Analytics</strong>
            <br />
            Soweit Sie Ihre Einwilligung erklärt haben, wird auf dieser Website
            Google Analytics eingesetzt, ein Webanalysedienst der Google Ireland
            Limited (&bdquo;Google&ldquo;). Die Nutzung umfasst die Betriebsart
            &bdquo;Universal Analytics&ldquo;. Hierdurch ist es möglich, Daten,
            Sitzungen und Interaktionen über mehrere Geräte hinweg einer
            pseudonymen User-ID zuzuordnen und so die Aktivitäten eines Nutzers
            geräteübergreifend zu analysieren. Dieser Datenschutzhinweis wird
            zur Verfügung gestellt von{" "}
            <a href="https://www.intersoft-consulting.de">
              www.intersoft-consulting.de
            </a>
            .
            <br />
            <br />
            Google Analytics verwendet sog. &bdquo;Cookies&ldquo;, Textdateien,
            die auf Ihrem Computer gespeichert werden und die eine Analyse der
            Benutzung der Website durch Sie ermöglichen. Die durch das Cookie
            erzeugten Informationen über Ihre Benutzung dieser Website werden in
            der Regel an einen Server von Google in den USA übertragen und dort
            gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf
            dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb von
            Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum
            zuvor gekürzt. Wir weisen Sie darauf hin, dass auf dieser Webseite
            Google Analytics um eine IP-Anonymisierung erweitert wurde, um eine
            anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu
            gewährleisten. Die im Rahmen von Google Analytics von Ihrem Browser
            übermittelte IP-Adresse wird nicht mit anderen Daten von Google
            zusammengeführt. Nähere Informationen zu Nutzungsbedingungen und
            Datenschutz finden Sie unter{" "}
            <a href="https://www.google.com/analytics/terms/de.html">
              https://www.google.com/analytics/terms/de.html
            </a>{" "}
            bzw. unter{" "}
            <a href="https://policies.google.com/?hl=de">
              https://policies.google.com/?hl=de
            </a>
            .
            <br />
            <br />
            <strong>Zwecke der Verarbeitung</strong>
            <br />
            Im Auftrag des Betreibers dieser Website wird Google diese
            Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
            Reports über die Websiteaktivitäten zusammenzustellen und um weitere
            mit der Websitenutzung und der Internetnutzung verbundene
            Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
            <br />
            <br />
            <strong>Rechtsgrundlage</strong>
            <br />
            Die Rechtsgrundlage für den Einsatz von Google Analytics ist Ihre
            Einwilligung gemäß{" "}
            <a href="https://dsgvo-gesetz.de/art-6-dsgvo/">
              Art. 6 Abs. 1 S.1 lit. a DSGVO
            </a>
            .
            <br />
            <br />
            <strong>Empfänger / Kategorien von Empfängern</strong>
            <br />
            Der Empfänger der erhobenen Daten ist Google.
            <br />
            <br />
            <strong>Übermittlung in Drittstaaten</strong>
            <br />
            Die personenbezogenen Daten werden unter dem EU-US Privacy Shield
            auf Grundlage des Angemessenheitsbeschlusses der Europäischen
            Kommission in die USA übermittelt. Das Zertifikat können Sie{" "}
            <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI">
              hier
            </a>{" "}
            abrufen.
            <br />
            <br />
            <strong>Dauer der Datenspeicherung</strong>
            <br />
            Die von uns gesendeten und mit Cookies, Nutzerkennungen (z. B.
            User-ID) oder Werbe-IDs verknüpften Daten werden nach 14 Monaten
            automatisch gelöscht. Die Löschung von Daten, deren
            Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im
            Monat.
            <br />
            <br />
            <strong>Betroffenenrechte</strong>
            <br />
            Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen, indem Sie die Speicherung der Cookies durch eine
            entsprechende Einstellung Ihrer Browser-Software verhindern; wir
            weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls
            nicht sämtliche Funktionen dieser Website vollumfänglich werden
            nutzen können.
            <br />
            Sie können darüber hinaus die Erfassung der durch das Cookie
            erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl.
            Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten
            durch Google verhindern, indem Sie das{" "}
            <a href="https://tools.google.com/dlpage/gaoptout?hl=de">
              Browser-Add-on
            </a>{" "}
            herunterladen und installieren. Opt-Out-Cookies verhindern die
            zukünftige Erfassung Ihrer Daten beim Besuch dieser Website. Um die
            Erfassung durch Universal Analytics über verschiedene Geräte hinweg
            zu verhindern, müssen Sie das Opt-Out auf allen genutzten Systemen
            durchführen. Wenn Sie hier klicken, wird das Opt-Out-Cookie gesetzt:{" "}
            <button className="button-link" onClick={googleOptOut}>
              <strong>Google Analytics deaktivieren</strong>
            </button>
            <br />
            <br />
            <strong>Blog Comment Policy</strong>
            <br />
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
            <strong>
              Here are some things which will get your comment deleted.
            </strong>
            <br />
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
              <li>Hate speech or other clearly intentional jerk behavior.</li>
            </ul>
          </p>
          <br />
          Impressum vom{" "}
          <a href="https://www.impressum-generator.de">
            Impressum Generator
          </a>{" "}
          der{" "}
          <a href="https://www.kanzlei-hasselbach.de/">
            Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht
          </a>
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
};

const impressumContainerStyle = {
  width: "100%",
  padding: "25px 0",
};

export default Impressum;
