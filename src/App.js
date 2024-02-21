import React from "react";
import Sidebar from "./components/Sidebar";
import TopBanner from "./components/TopBanner";
import "./App.css";
import CardList from "./components/CardList";
import Profiles from "./components/Profiles";
import Title from "./components/Title";
import Value from "./components/Value";
const App = () => {
  return (
    <>
          <Sidebar />
      <TopBanner />
      <Title title="Our portfolio" />
      <Profiles />
      <Value />
      <CardList />
      <Title title="Writing & Press" />
    </>
  );
};

export default App;
