import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./privateProjects.scss";

class PrivateProjects extends Component {
  state = {
    projects: [
      {
        _id: 1,
        _name: "Webseite / Portfolio",
        _githubRepo: "https://github.com/ThomasMiller01/Website",
        _description:
          "In diesem Projekt beschreibe ich genau, wie ich diese Webseite aufgebaut habe und wie genau ich alles realisiert habe, vom Projektmanagement bis zum Impressum.<ul><li>Angular</li><li>Asp.Net Core</li><li>C#</li></ul>",
        _description_big:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
        _thumbnail:
          "https://thomasmiller.tk/assets/images/projects/website/website_home.png",
        _headerImg:
          "https://thomasmiller.tk/assets/images/projects/website/header_website.png",
        _images: [
          [
            "https://thomasmiller.tk/assets/images/projects/website/website_home.png",
            "Main page",
            "1920x1050"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/website/website_projects_all.png",
            "All projects",
            "1920x1034"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/website/website_home_bottom.png",
            "My favourite projects",
            "1891x897"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/website/website_github_repo.png",
            "GitHub Repo",
            "1896x916"
          ]
        ],
        _pubDate: "09/03/2019 17:31:03",
        _favourite: false,
        _private: false
      },
      {
        _id: 2,
        _name: "ZeusEntertainment",
        _githubRepo: "https://github.com/ThomasMiller01/ZeusEntertainment",
        _description:
          "ZeusEntertainment umfasst eine ganze Reihe von Projekten. Hier erfährst du ganz genau, was Zeus ist und welche Funktionen er zu bieten hat.<br><ul><li>C#</li></ul>",
        _description_big:
          "Einige der Projekte sind nicht von mir gemacht (z.B. Socket-Server), andere schon (z.B. OtherTools).",
        _thumbnail:
          "https://thomasmiller.tk/assets/images/projects/zeusentertainment/zeus1.png",
        _headerImg:
          "https://thomasmiller.tk/assets/images/projects/zeusentertainment/header_zeusentertainment.png",
        _images: [
          [
            "https://thomasmiller.tk/assets/images/projects/zeusentertainment/zeus1.png",
            "ZeusInterface Version 2.0",
            "949x608"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/zeusentertainment/zeus3_2.png",
            "ZeusInterface Version 3.0",
            "883x527"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/zeusentertainment/zeus3_cmd.png",
            "Zeus CommandsFile",
            "1928x1058"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/zeusentertainment/zeus0_cmd.png",
            "Grammar Version 1.0",
            "658x768"
          ]
        ],
        _pubDate: "12/03/2019 19:23:20",
        _favourite: true,
        _private: false
      },
      {
        _id: 4,
        _name: "GermanCollectors - Discord Bot",
        _githubRepo: "#",
        _description:
          "Hier findet man einen Bot für Discord. Er wurde in Python und mithilfe der Library Discord.py geschrieben und beinhaltet von Shopmonitoren, über Umfrage bis Stashpedia-Ranglisten vieles.<ul><li>Python</li></ul>",
        _description_big:
          '<div class="overflow_scroll container-fluid">Dieser Bot wurde für den Discord-Server von GermanCollectors geschrieben <i>(<a href="https://www.germancollectors.de/" target="_blank">German Collectors</a> ist eine exklusive deutsche Community von Sammlern. Ihr Fokus liegt auf Funko, Hot Toys und Sideshow)</i>.<br><br>Dieser Bot bietet viele Funktionen, wie einen Twitter, Reddit und Youtube Live-Feed, eine Stash-funktion, mit der man die Daten einer Figur von <a href="https://stashpedia.com" target="_blank">Stashpedia.com</a> abfragen kann, eine Giveaway, sowie eine Umfrage, als auch eine RoleReaction Funktion, der dir der Bot eine Rolle bei deiner Reaktion auf eine Nachricht gibt und zu guter letzt hat der Bot auch zahlreiche Seitenmonitore, die dir die neuesten Updates zu neuen Figuren oder Restocks von Seiten wie <a href="https://www.emp.de" target="_blank">Emp.de</a> oder <a href="https://www.popcultcha.com.au" target="_blank">Popcultcha.com.au</a> zeigen.<br><br>\n<b>Twitter</b><br>\n<p>Der Twitter-LiveFeed wurde mit der Python Library <a href="http://www.tweepy.org/" target="_blank">Tweepy</a> realisiert. Die Dokumentation findet man <a href="http://docs.tweepy.org/en/v3.5.0/getting_started.html" target="_blank">hier</a>. Da die Tweepy-Library die Twitter-ID der einzelnen Konten benötigt, muss man über die Webseite <a href="http://gettwitterid.com/" target="_blank">http://gettwitterid.com/</a> die Twitter-ID rausfinden.</p>\n<b>Reddit</b><br>\n<p>Mithilfe der Reddit-Library <a href="https://praw.readthedocs.io/en/latest/" target="_blank">Praw</a> wurde der Reddit-LiveFeed realisiert. Es werden mehrere Subreddits beobachtet, sodass bei einem neuen Post ein <a href="https://leovoel.github.io/embed-visualizer/" target="_blank">Embed</a> über einen <a href="https://discordapp.com/developers/docs/resources/webhook" target="_blank">Webhook</a> gesendet wird.</p>\n<b>Youtube</b><br>\n<p>Der Youtube-LiveFeed verwendet die <a href="https://developers.google.com/youtube/v3/" target="_blank">Youtube Data Api</a> der <a href="https://cloud.google.com/" target="_blank">Google-Cloud-Platform</a>. Mit der Url (https://www.googleapis.com/youtube/v3/search?order=date&maxResults=5&part=snippet&channelId=[ChannelID]&type=video&key=[ApiKey]) werden die 5 neuesten Videos eines Youtube-Channels zurückgegeben und mit Videos aus der Datenbank verglichen werden. Auch hier wird wieder die Channel-ID benötigt. Häufig ist die Channel-ID schon in der Url des Youtube Channels vorhanden (https://www.youtube.com/channel/UCKGMHVipEvuZudhHD05FOYA, alles nach dem /channel/), es kann aber auch vorkommen, dass das nicht der Fall ist (https://www.youtube.com/user/PewDiePie). Falls sie nicht in der Url vorhanden ist, kann man diese <a href="https://commentpicker.com/youtube-channel-id.php" target="_blank">Webseite </a> nutzen.</p>\n<b>Stashpedia</b><br>\n<i>(Da Stashpedia demnächst leider deaktiviert wird, wurde diese Funktion entfernt)</i>\n<p>Stashpedia ist in zwei Teile unterteilt, dem .stash Befehl und der Stashpedia-Rangliste.<br>Der .stash Befehl liefert Informationen zu einer bestimmten Figur von <a href="https://stashpedia.com/" target="_blank">Stashpedia</a> zurück. Dabei wird ein Link, sowie der Preis und die Kategorie zurückgegeben. Der .stash Befehl wurde mithilfe <a href="https://github.com/TaquitoSlayer/Stashpedia-Discord-Bot" target="_blank">dieses</a> GitHub Repo und kleinen Änderungen erstellt.<br><br>Die Stashpedia-Rangliste bassiert auf den Stashpedia-Collections der Nutzer. Es wird der Wert der Sammlung, sowie der Durchschnittswert der Figuren berechnet und nach dem Wert der Sammlung sortiert.</p>\n<b>Giveaway</b><br>\n<p>Description</p>\n<b>Umfrage</b><br>\n<p>Description</p>\n<b>Shop-Monitor</b><br>\n<p>\n<ul>\n  <li>Funko\n    <ul>\n      <li>Ebay-Kleinanzeigen</li>\n      <li>Emp</li>\n      <li>Stuffbringer</li>\n      <li>Actionfiguren24</li>\n      <li>EliveShop/li>\n      <li>Lootstore</li>\n      <li>Asg-Store</li>\n      <li>Funkopops-nl</li>\n      <li>Popcultcha</li>\n      <li>Hottopic</li>\n      <li>Entertainment-Earth</li>\n    </ul>\n  </li>\n  <li>Hottoys\n    <ul>\n      <li>Ebay-Kleinanzeigen</li>\n      <li>Amazing-Collectibles</li>\n      <li>Actionfiguren24</li>      \n      <li>LaCitedesNuages</li>\n      <li>Gator</li>\n      <li>ToysFanZone</li>\n      <li>Popcultcha</li>\n    </ul>\n  </li>\n</ul>\n</p>\n<b>ToDo-Liste</b><br>\n<p>Description</p>\n<b>Custom-Commands</b><br>\n<p>Description</p>\n<b>Such-Agent</b><br>\n<p>Der Suchagent wird ein eigenständiger Bot sein, der bestimmte Begriffe überwacht und einem per pm benachrichtigt, falls der Begriffe in einem Monitor aufgetaucht ist.</p>\n</div>',
        _thumbnail:
          "https://thomasmiller.tk/assets/images/projects/discord_bot/discord_bot_germancollectors_visitenkarte.png",
        _headerImg:
          "https://thomasmiller.tk/assets/images/projects/discord_bot/discordbot_germancollectors.png",
        _images: [
          [
            "https://thomasmiller.tk/assets/images/projects/discord_bot/ebay_viewer.png",
            "Ebay Viewer",
            "567x223"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/discord_bot/dotstash_command.png",
            ".stash Befehl",
            "672x277"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/discord_bot/ebay.png",
            "Ebay Kleinanzeigen - Monitor",
            "548x169"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/discord_bot/emp.png",
            "EMP - Monitor",
            "656x225"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/discord_bot/popcultcha.png",
            "Popcultcha - Monitor",
            "554x179"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/discord_bot/stashpedia_rangliste.png",
            "Stashpedia Rangliste",
            "556x447"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/discord_bot/reddit.png",
            "Reddit Live Feed",
            "466x502"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/discord_bot/twitter.png",
            "Twitter Live Feed",
            "560x611"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/discord_bot/youtube.png",
            "Youtube Live Feed",
            "549x503"
          ]
        ],
        _pubDate: "19/03/2019 19:39:21",
        _favourite: true,
        _private: false
      },
      {
        _id: 5,
        _name: "Schul-Projekte",
        _githubRepo: "https://github.com/ThomasMiller01/Schul-Projekte",
        _description:
          "Hier findet man alle größeren Projekte, die im Laufe des Informatik Leistungskurses entstanden sind. Alle hier gelisteten Projekte dienen dazu, dass jeweilige Thema kennenzulernen und besser zu verstehen.<ul><li>Java</li></ul>",
        _description_big:
          'Da innerhalb des Kurses viele Themen behandelt wurden und auch viele kleineren Skripte geschrieben wurden, gibt es hier nur eine Auswahl der größeren Projekte. Da in der Schule nur OpenSource Programme genutzt werden konnten, sind auch die Dateien nur in der Projektstruktur dieser Programme erhältlich (Unten sind die Programme verlinkt). <i>Alle Projekte sind in der Programmiersprache Java und zum Teil mithilfe einiger Zentralabiturklassen entstanden</i><br><br>\n<i>Projektstruktur:</i>\n<ul>\n  <li>Q1\n    <ul>\n      <li>User Interface Design\n        <ul>\n          <li>Vokabel Trainer <i>(BlueJ)</i></li>\n        </ul>\n      </li>\n      <li>Netzwerke\n        <ul>\n          <li>LernWiki <i>(NetBeans)</i></li>\n          <li>ShopSystem <i>(NetBeans)</i></li>\n        </ul>\n      </li>\n      <li>Verschluesselung\n        <ul>\n          <li>CaesarVerschluesselung <i>(NetBeans)</i></li>\n          <li>ViginereVerschluesselung <i>(NetBeans)</i></li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n</ul><br>\n<b>Vokabel Trainer</b><br>\n<p>Mithilfe des Vokabel Trainers sollten wir uns erstmalig mit dem Design eines User Interface beschäftigen. Zur Umsetzung des User Interface wurde die Java Library Swing verwendet. <a href="https://www.java-tutorial.org/swing.html" target="_blank">Hier</a> findet man ein gutes Tutorial zu der Library.<p>\n<i>How to Use:</i><br>\n1. Download das GitHub Repo von <a href="https://github.com/ThomasMiller01/Schul-Projekte/" target="_blank">hier</a><br>\n2. Öffne das BlueJ-Projekt<br>\n3. Erstelle ein neues Objekt der Klasse "MainFrame"</p></p>\n<b>LernWiki</b><br>\n<p>Eine vollständige Dokumentation findet sich im GitHub Repo.<br>\n<br>\n<i>Anforderungen:</i><br>\n- Einwandfreie Kommunikation sicherstellen<br>\n- Login mit Username<br>\n- Liste aller Begriffe abfragen<br>\n- Definition eines Begriffes abfrage<br>\n- Liste aller Befehle abfragen<br><br><i>Befehle:</i><br>\n- „cmd“ - liefert eine Liste aller möglichen Befehle, welcher der User ausführen kann zurück<br>\n- „connect“ – stellt die Verbindung des Clients mit dem Server her<br>\n- „login“ – meldet einen User mit einem Username an<br>\n- „wiki all“ – liefert eine Liste aller Begriffe zurück<br>\n- „wiki Begriff“ – liefert die Definition des Begriffes zurück<br>\n- „abmelden“ – meldet den User ab<br></p>\n<b>ShopSystem</b><br>\n<p>Dieses ShopSystem besteht aus einem Client- und einem Servermodul. Im Gegensatz zur LernWiki ist dieses System nicht interaktiv gestaltet, d.h. die gesamte Kommunikation zwischen Client und Server ist im Code vorbestimmt. <br>\n<br>\n<i>Kommunikation:</i><br>\nZu Beginn wird eine Willkommensnachricht mit der Aufforderung zur Auswahl der T-Shirt Größe und der T-Shirt Farbe vom Server gesendet. Daraufhin sendet der Client eine Antwort mit der ausgewählten T-Shirt Größe und Farbe. Der Server antwortet mit dem Preis und der Aufforderung zur Bestätigung. Nun kann der Client mit ja Bestätigen oder mit nein Wiederrufen. Wiederruft der Client, wird er abgemeldet und die Verbindung wird geschlossen. Bestätigt er, sendet der Server die Bestätigung des Kaufes, meldet den Client ab und schließt die Verbindung.</p>\n<br>\nDiese Programme wurden benutzt:\n<ul><li><a href="https://www.bluej.org/" target="_blank">BlueJ</a></li><li><a href="https://netbeans.org/" target="_blank">NetBeans</a></li></ul>',
        _thumbnail:
          "https://thomasmiller.tk/assets/images/projects/schulprojekte/gymnasium_antonianum_logo.jpg",
        _headerImg: "https://via.placeholder.com/1440x400",
        _images: [
          [
            "https://thomasmiller.tk/assets/images/projects/schulprojekte/Vokabel_Trainer.png",
            "Vokabel Trainer BlueJ",
            "1082x745"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/schulprojekte/Vokabel_Trainer_UI.png",
            "Vokabel Trainer UI",
            "986x593"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/schulprojekte/ShopSystem.png",
            "Shop System",
            "1920x1050"
          ]
        ],
        _pubDate: "05/04/2019 15:58:14",
        _favourite: false,
        _private: false
      },
      {
        _id: 6,
        _name: "Mein Zimmer",
        _githubRepo: "#",
        _description:
          "Dies ist mein erster Versuch mit Unity zu arbeiten und so versuchte ich mein eigenes Zimmer nachzubilden. Die groben Maßstäbe sind mir zwar gelungen, jedoch mangelt es immer noch extrem an Details.<br><i>(Zurzeit ist der Source-Code leider nicht auf meinem GitHub zu finden)</i><ul><li>Unity</li></ul>",
        _description_big:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
        _thumbnail:
          "https://thomasmiller.tk/assets/images/projects/unity/unity_room.png",
        _headerImg:
          "https://thomasmiller.tk/assets/images/projects/unity/header_unity.png",
        _images: [
          [
            "https://thomasmiller.tk/assets/images/projects/unity/unity.png",
            "Unity",
            "951x600"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/unity/from_door_unity.png",
            "From the door",
            "654x656"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/unity/from_bed_unity.png",
            "From the bed",
            "654x564"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/unity/unity_room.png",
            "My Room",
            "690x405"
          ]
        ],
        _pubDate: "06/04/2019 11:54:04",
        _favourite: false,
        _private: false
      },
      {
        _id: 7,
        _name: "Praktika",
        _githubRepo: "https://github.com/ThomasMiller01/Internship",
        _description:
          "Hier sind alle meine bisherigen Praktika zu finden. Ich habe hier meine Erfahrungen, als auch Links zu Ergebnissen, falls vorhanden aufgeschrieben. <br><i>(Nicht immer darf ich alles veröffentlichen)</i><ul><li>Html</li><li>Css</li><li>JavaScript</li></ul>",
        _description_big:
          '<h4><a href="https://www.publicispixelpark.de/" target="_blank">Publicis Pixelpark</a></h4>\nBei Publicis Pixelpark beschäftigte ich mich vor allem mit WebDesign und WebEntwicklung. <a href="http://pixelpraktikum.000webhostapp.com/html/index.html" target="_blank">Hier</a> ist eine Demo des Ergebnisses verlinkt.',
        _thumbnail:
          "https://thomasmiller.tk/assets/images/projects/internships/allInternships.png",
        _headerImg: "https://via.placeholder.com/1440x400",
        _images: [
          [
            "https://thomasmiller.tk/assets/images/projects/internships/Publicis-Pixelpark-Logo.png",
            "Publicis Pixelpark",
            "3271x735"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/internships/publicispixelpark_result.png",
            "PublicisPixelpark Resultpage",
            "1920x1050"
          ]
        ],
        _pubDate: "12/03/2019 19:23:09",
        _favourite: false,
        _private: false
      },
      {
        _id: 8,
        _name: "Phase7",
        _githubRepo: "#",
        _description:
          "Phase7 ist meine Reproduktion der Lern-Software Phase 6. Phase7 wird für keine kommerziellen Zwecke verwendet und ist nur als Spaß und als Lernprozess entstanden.<br><i>(Zurzeit ist der Source-Code leider nicht auf meinem GitHub zu finden)</i><ul><li>Angular</li><li>Asp.Net Core</li><li>C#</li></ul>",
        _description_big:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
        _thumbnail:
          "https://thomasmiller.tk/assets/images/projects/phase7/phase7.png",
        _headerImg: "https://via.placeholder.com/1440x400",
        _images: [
          [
            "https://thomasmiller.tk/assets/images/projects/phase7/phase7.png",
            "Dashboard",
            "1920x1050"
          ]
        ],
        _pubDate: "12/03/2019 19:23:06",
        _favourite: false,
        _private: false
      },
      {
        _id: 9,
        _name: "Web Forum",
        _githubRepo:
          "https://github.com/ThomasMiller01/Forum_Zeusentertainment",
        _description:
          "Dies ist ein Web-Forum, welches in PHP realisiert wurde. Man kann sich einloggen, einen Blog führen und vieles mehr. Da es sehr viel einfachere Wege gibt solch ein Forum zu erstellen, wurde dieses Projekt nie zuende geführt, sodass vieles zwar begonnen aber nicht vollendet ist.<ul><li>PHP</li></ul>",
        _description_big:
          'Eine Demo ist <a href="http://zeus-entertainment.000webhostapp.com" target="_blank">hier</a> verlinkt.',
        _thumbnail:
          "https://thomasmiller.tk/assets/images/projects/forum_zeusentertainment/zeusentertainment_forum_home.png",
        _headerImg: "https://via.placeholder.com/1440x400",
        _images: [
          [
            "https://thomasmiller.tk/assets/images/projects/forum_zeusentertainment/zeusentertainment_forum_home.png",
            "Home",
            "1920x1034"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/forum_zeusentertainment/zeusentertainment_forum_member.png",
            "Member",
            "1920x1034"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/forum_zeusentertainment/zeusentertainment_forum_blog.png",
            "News",
            "1920x1034"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/forum_zeusentertainment/zeusentertainment_forum_login.png",
            "Login",
            "1920x1034"
          ],
          [
            "https://thomasmiller.tk/assets/images/projects/forum_zeusentertainment/zeusentertainment_forum_loggedin_home.png",
            "Logged in - Home",
            "1920x1034"
          ]
        ],
        _pubDate: "12/03/2019 19:23:03",
        _favourite: false,
        _private: true
      },
      {
        _id: 23,
        _name: "ShittyPidgeon",
        _githubRepo: "https://github.com/ThomasMiller01/Pidgeon-Unity",
        _description: "Simple Game<ul><li>Unity</li></ul>",
        _description_big: "",
        _thumbnail: "https://via.placeholder.com/600x300",
        _headerImg: "https://via.placeholder.com/1440x400",
        _images: [
          [
            "https://thomasmiller.tk/assets/images/projects/pidgeon/background_bird.png",
            "Background",
            "684x384"
          ]
        ],
        _pubDate: "01/04/2019 10:58:33",
        _favourite: false,
        _private: true
      },
      {
        _id: 25,
        _name: "ReactLearning",
        _githubRepo: "https://github.com/ThomasMiller01/ReactLearning",
        _description: "I started Learning react",
        _description_big:
          '<a href="https://onedrive.live.com/view.aspx?resid=1EE464BDA661F7FC%211171&id=documents\nonenote:https://d.docs.live.net/1ee464bda661f7fc/Dokumente/WebLearning/" target="_blank">OneNote NoteBook</a>',
        _thumbnail: "https://via.placeholder.com/600x300",
        _headerImg: "https://via.placeholder.com/1440x400",
        _images: [[""]],
        _pubDate: "08/04/2019 16:59:25",
        _favourite: false,
        _private: true
      }
    ]
  };

  render() {
    return (
      <div style={allProjectsStyle} className="all-projects">
        <div style={projectsContainerStyle} className="projectsContainer">
          <div className="card-deck">
            {this.state.projects.map(project => (
              <div
                key={project._id}
                className="card my-3"
                style={projectCardStyle}
              >
                <img
                  src={project._thumbnail}
                  className="card-img-top"
                  alt="Error loading ..."
                />
                <div className="card-body">
                  <h4 className="card-title">{project._name}</h4>
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{
                      __html: project._description
                    }}
                  />
                  <NavLink
                    to="/projects/project"
                    className="btn btn-outline-primary"
                  >
                    See more
                  </NavLink>
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const allProjectsStyle = {
  width: "100%",
  minHeight: "87vh",
  backgroundColor: "#242424",
  backgroundImage: "url('/images/all_projects_back.png')",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundPosition: "center",
  backgroundSize: "cover",
  padding: "15px 0 20px 0"
};

const projectsContainerStyle = { padding: "0 10px 0 10px" };

const projectCardStyle = { minWidth: "250px", border: "none" };

export default PrivateProjects;
