import React, { Component } from "react";

class Project extends Component {
  state = {
    project: {
      _id: 4,
      _name: "GermanCollectors - Discord Bot",
      _githubRepo: "#",
      _description:
        "Hier findet man einen Bot für Discord. Er wurde in Python und mithilfe der Library Discord.py geschrieben und beinhaltet von Shopmonitoren, über Umfrage bis Stashpedia-Ranglisten vieles.<ul><li>Python</li></ul>",
      _description_big:
        '<div className="overflow_scroll container-fluid">Dieser Bot wurde für den Discord-Server von GermanCollectors geschrieben <i>(<a href="https://www.germancollectors.de/" target="_blank">German Collectors</a> ist eine exklusive deutsche Community von Sammlern. Ihr Fokus liegt auf Funko, Hot Toys und Sideshow)</i>.<br><br>Dieser Bot bietet viele Funktionen, wie einen Twitter, Reddit und Youtube Live-Feed, eine Stash-funktion, mit der man die Daten einer Figur von <a href="https://stashpedia.com" target="_blank">Stashpedia.com</a> abfragen kann, eine Giveaway, sowie eine Umfrage, als auch eine RoleReaction Funktion, der dir der Bot eine Rolle bei deiner Reaktion auf eine Nachricht gibt und zu guter letzt hat der Bot auch zahlreiche Seitenmonitore, die dir die neuesten Updates zu neuen Figuren oder Restocks von Seiten wie <a href="https://www.emp.de" target="_blank">Emp.de</a> oder <a href="https://www.popcultcha.com.au" target="_blank">Popcultcha.com.au</a> zeigen.<br><br>\n<b>Twitter</b><br>\n<p>Der Twitter-LiveFeed wurde mit der Python Library <a href="http://www.tweepy.org/" target="_blank">Tweepy</a> realisiert. Die Dokumentation findet man <a href="http://docs.tweepy.org/en/v3.5.0/getting_started.html" target="_blank">hier</a>. Da die Tweepy-Library die Twitter-ID der einzelnen Konten benötigt, muss man über die Webseite <a href="http://gettwitterid.com/" target="_blank">http://gettwitterid.com/</a> die Twitter-ID rausfinden.</p>\n<b>Reddit</b><br>\n<p>Mithilfe der Reddit-Library <a href="https://praw.readthedocs.io/en/latest/" target="_blank">Praw</a> wurde der Reddit-LiveFeed realisiert. Es werden mehrere Subreddits beobachtet, sodass bei einem neuen Post ein <a href="https://leovoel.github.io/embed-visualizer/" target="_blank">Embed</a> über einen <a href="https://discordapp.com/developers/docs/resources/webhook" target="_blank">Webhook</a> gesendet wird.</p>\n<b>Youtube</b><br>\n<p>Der Youtube-LiveFeed verwendet die <a href="https://developers.google.com/youtube/v3/" target="_blank">Youtube Data Api</a> der <a href="https://cloud.google.com/" target="_blank">Google-Cloud-Platform</a>. Mit der Url (https://www.googleapis.com/youtube/v3/search?order=date&maxResults=5&part=snippet&channelId=[ChannelID]&type=video&key=[ApiKey]) werden die 5 neuesten Videos eines Youtube-Channels zurückgegeben und mit Videos aus der Datenbank verglichen werden. Auch hier wird wieder die Channel-ID benötigt. Häufig ist die Channel-ID schon in der Url des Youtube Channels vorhanden (https://www.youtube.com/channel/UCKGMHVipEvuZudhHD05FOYA, alles nach dem /channel/), es kann aber auch vorkommen, dass das nicht der Fall ist (https://www.youtube.com/user/PewDiePie). Falls sie nicht in der Url vorhanden ist, kann man diese <a href="https://commentpicker.com/youtube-channel-id.php" target="_blank">Webseite </a> nutzen.</p>\n<b>Stashpedia</b><br>\n<i>(Da Stashpedia demnächst leider deaktiviert wird, wurde diese Funktion entfernt)</i>\n<p>Stashpedia ist in zwei Teile unterteilt, dem .stash Befehl und der Stashpedia-Rangliste.<br>Der .stash Befehl liefert Informationen zu einer bestimmten Figur von <a href="https://stashpedia.com/" target="_blank">Stashpedia</a> zurück. Dabei wird ein Link, sowie der Preis und die Kategorie zurückgegeben. Der .stash Befehl wurde mithilfe <a href="https://github.com/TaquitoSlayer/Stashpedia-Discord-Bot" target="_blank">dieses</a> GitHub Repo und kleinen Änderungen erstellt.<br><br>Die Stashpedia-Rangliste bassiert auf den Stashpedia-Collections der Nutzer. Es wird der Wert der Sammlung, sowie der Durchschnittswert der Figuren berechnet und nach dem Wert der Sammlung sortiert.</p>\n<b>Giveaway</b><br>\n<p>Description</p>\n<b>Umfrage</b><br>\n<p>Description</p>\n<b>Shop-Monitor</b><br>\n<p>\n<ul>\n  <li>Funko\n    <ul>\n      <li>Ebay-Kleinanzeigen</li>\n      <li>Emp</li>\n      <li>Stuffbringer</li>\n      <li>Actionfiguren24</li>\n      <li>EliveShop/li>\n      <li>Lootstore</li>\n      <li>Asg-Store</li>\n      <li>Funkopops-nl</li>\n      <li>Popcultcha</li>\n      <li>Hottopic</li>\n      <li>Entertainment-Earth</li>\n    </ul>\n  </li>\n  <li>Hottoys\n    <ul>\n      <li>Ebay-Kleinanzeigen</li>\n      <li>Amazing-Collectibles</li>\n      <li>Actionfiguren24</li>      \n      <li>LaCitedesNuages</li>\n      <li>Gator</li>\n      <li>ToysFanZone</li>\n      <li>Popcultcha</li>\n    </ul>\n  </li>\n</ul>\n</p>\n<b>ToDo-Liste</b><br>\n<p>Description</p>\n<b>Custom-Commands</b><br>\n<p>Description</p>\n<b>Such-Agent</b><br>\n<p>Der Suchagent wird ein eigenständiger Bot sein, der bestimmte Begriffe überwacht und einem per pm benachrichtigt, falls der Begriffe in einem Monitor aufgetaucht ist.</p>\n</div>',
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
    }
  };

  render() {
    return (
      <div style={projectContainerStyle}>
        <div style={projectHeaderStyle} className="projectHeader">
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td>
                  <strong>
                    <span style={projectHeaderTopStyle} />
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={projectContent}>
          <h1 style={projectContentH1Style}>
            <a href={this.state.project._githubRepo}>
              {this.state.project._name}
            </a>
          </h1>
          <div style={projectDescription}>
            <p
              dangerouslySetInnerHTML={{
                __html: this.state.project._description_big
              }}
            />
          </div>
          <div
            style={galleryDivStyle}
            className="gallery"
            itemScope
            itemType="http://schema.org/ImageGallery"
          >
            {this.state.project._images.map(image => (
              <figure
                key={image[0]}
                style={galleryFigureStyle}
                itemProp="associatedMedia"
                itemScope
                itemType="http://schema.org/ImageObject"
              >
                <a href={image[0]} itemProp="contentUrl" data-size={image[2]}>
                  <img
                    src={image[0]}
                    style={galleryImgStyle}
                    itemProp="thumbnail"
                    alt={image[1]}
                  />
                </a>
                <figcaption
                  style={galleryFigcaptionStyle}
                  itemProp="caption description"
                >
                  {image[1]}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="pswp__bg" />
            <div className="pswp__scroll-wrap">
              <div className="pswp__container">
                <div className="pswp__item" />
                <div className="pswp__item" />
                <div className="pswp__item" />
              </div>
              <div className="pswp__ui pswp__ui--hidden">
                <div className="pswp__top-bar">
                  <div className="pswp__counter" />
                  <button
                    className="pswp__button pswp__button--close"
                    title="Close (Esc)"
                  />
                  <button
                    className="pswp__button pswp__button--share"
                    title="Share"
                  />
                  <button
                    className="pswp__button pswp__button--fs"
                    title="Toggle fullscreen"
                  />
                  <button
                    className="pswp__button pswp__button--zoom"
                    title="Zoom in/out"
                  />

                  <div className="pswp__preloader">
                    <div className="pswp__preloader__icn">
                      <div className="pswp__preloader__cut">
                        <div className="pswp__preloader__donut" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                  <div className="pswp__share-tooltip" />
                </div>
                <button
                  className="pswp__button pswp__button--arrow--left"
                  title="Previous (arrow left)"
                />
                <button
                  className="pswp__button pswp__button--arrow--right"
                  title="Next (arrow right)"
                />
                <div className="pswp__caption">
                  <div className="pswp__caption__center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const projectContainerStyle = {
  width: "100%",
  minHeight: "87vh",
  backgroundColor: "white"
};

const projectHeaderStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto 100%",
  textAlign: "center"
};

const projectHeaderTopStyle = {
  verticalAlign: "middle",
  color: "black",
  fontSize: "60px"
};

const projectContent = { width: "100%", minHeight: "37vh", paddingTop: "20px" };

const tableStyle = { width: "100%", height: "50vh" };

const projectDescription = { width: "80%", margin: "0 auto" };

const projectContentH1Style = { width: "100%", textAlign: "center" };

const galleryDivStyle = {
  margin: "0 auto",
  width: "90%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minimax(300px, 1fr))",
  gridGap: "20px",
  alignItems: "stretch"
};

const galleryImgStyle = { width: "100%", height: "auto" };

const galleryFigureStyle = {
  display: "block",
  float: "left",
  margin: "0 5px 5px 0",
  maxWidth: "100%"
};

const galleryFigcaptionStyle = { display: "none" };

export default Project;
