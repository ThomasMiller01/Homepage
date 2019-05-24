import React from "react";

import HomeTop from "./home_top";
import HomeContent from "./home_content";
import Header from "../../header";
import Footer from "../../footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HomeTop />
      <HomeContent />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
