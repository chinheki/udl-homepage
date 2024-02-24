import React from "react";
import TopBanner from "./components/TopBanner";
import "./App.css";
import CardList from "./components/CardList";
import Profiles from "./components/Profiles";
import Value from "./components/Value";
import Blogs from "./components/Blogs";
import BottomBanner from "./components/BottomBanner";
import Footer from "./components/Footer";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Header />
      <TopBanner />
      <Profiles />
      <Value />
      <CardList />
      {/* <Blogs /> */}
      <BottomBanner />
      <Footer />
    </>
  );
};

export default App;
