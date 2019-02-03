-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:2258
-- Erstellungszeit: 03. Feb 2019 um 11:45
-- Server-Version: 10.3.12-MariaDB
-- PHP-Version: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `phase7_personalwebsite`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `projects`
--

CREATE TABLE `projects` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `githubRepo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(10000) COLLATE utf8_unicode_ci NOT NULL,
  `description_big` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `headerImg` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `images` varchar(10000) COLLATE utf8_unicode_ci NOT NULL,
  `pubDate` datetime NOT NULL DEFAULT current_timestamp(),
  `favourite` tinyint(1) NOT NULL,
  `private` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `projects`
--

INSERT INTO `projects` (`ID`, `name`, `githubRepo`, `description`, `description_big`, `thumbnail`, `headerImg`, `images`, `pubDate`, `favourite`, `private`) VALUES
(1, 'Website', 'https://github.com/ThomasMiller01/Website', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.     Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet', 'https://thomasmiller.tk/assets/images/projects/website/website_home.png', 'https://thomasmiller.tk/assets/images/projects/website/header_website.png', 'https://thomasmiller.tk/assets/images/projects/website/website_home.png,Main page,1920x1050;https://thomasmiller.tk/assets/images/projects/website/website_projects_all.png,All projects,1920x1034;https://thomasmiller.tk/assets/images/projects/website/website_home_bottom.png,My favourite projects,1891x897;https://thomasmiller.tk/assets/images/projects/website/website_github_repo.png,GitHub Repo,1896x916', '2019-01-28 08:39:23', 0, 0),
(2, 'ZeusEntertainment', 'https://github.com/ThomasMiller01/ZeusEntertainment', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dol', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.     Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,', 'https://thomasmiller.tk/assets/images/projects/zeusentertainment/zeus1.png', 'https://thomasmiller.tk/assets/images/projects/zeusentertainment/header_zeusentertainment.png', 'https://thomasmiller.tk/assets/images/projects/zeusentertainment/zeus1.png,ZeusInterface Version 2.0,949x608;https://thomasmiller.tk/assets/images/projects/zeusentertainment/zeus3_2.png,ZeusInterface Version 3.0,883x527;https://thomasmiller.tk/assets/images/projects/zeusentertainment/zeus3_cmd.png,Zeus CommandsFile,1928x1058', '2019-01-28 08:48:09', 1, 0),
(3, 'Phase7', 'none', 'Phase7 is my reproduction of the learn-software Phase6. I did it just for fun and as a personal project.<br><i>Currently the Source Code is not available on my GitHub, maybe it will be soon.</i>', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.     Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,', 'https://thomasmiller.tk/assets/images/projects/phase7/phase7.png', 'https://via.placeholder.com/1440x400', 'https://thomasmiller.tk/assets/images/projects/phase7/phase7.png,Dashboard,1920x1050', '2019-01-28 08:54:01', 1, 0),
(4, 'Unity - My Room', 'none', 'This is my first attempt of working with Unity. It\'s my room as a 3D-Modell, with a few extras (No, I don\'t own Genji\'s sword).<br><span style=\"font-size: 15px;\"><i>Currently the Source Code is not available on my GitHub, but I am going to upload it soon.</i></span>', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.     Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,', 'https://thomasmiller.tk/assets/images/projects/unity/unity_room.png', 'https://thomasmiller.tk/assets/images/projects/unity/header_unity.png', 'https://thomasmiller.tk/assets/images/projects/unity/unity.png,Unity,951x600;https://thomasmiller.tk/assets/images/projects/unity/from_door_unity.png,From the door,654x656;https://thomasmiller.tk/assets/images/projects/unity/from_bed_unity.png,From the bed,654x564;https://thomasmiller.tk/assets/images/projects/unity/unity_room.png,My Room,690x405', '2019-01-28 08:57:34', 0, 0),
(5, 'Interships', 'https://github.com/ThomasMiller01/Intership', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no ', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.     Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,', 'https://thomasmiller.tk/assets/images/projects/interships/allInterships.png', 'https://via.placeholder.com/1440x400', 'https://thomasmiller.tk/assets/images/projects/interships/allInterships.png,All Interships,700x400', '2019-01-28 09:00:32', 0, 0),
(6, 'GermanCollectors - DiscordBot', 'https://github.com/ThomasMiller01/DiscordBot_FunkoPop', 'This projects is a DiscordBot for the Discord server GermanCollectors. It includes shopmonitors, Stashpedia, giveaway, polls and a lot more. This Bot is written in python.', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.     Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,', 'https://via.placeholder.com/700x400', 'https://via.placeholder.com/1440x400', 'none', '2019-01-28 09:07:56', 1, 1);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pass` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lastLogin` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`ID`, `name`, `pass`, `lastLogin`) VALUES
(1, 'Thomas', 'y4X85jozz/VlLjoRACcJZWdJ4ucaUwQBkA2sxLSmZ73Fslx7FxEiJ+5v/j4w50hw', '2019-01-28 08:41:12');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `projects`
--
ALTER TABLE `projects`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
