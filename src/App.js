import React from "react";
import Sidebar from "./components/Sidebar";
import TopBanner from "./components/TopBanner";
import "./App.css";
import CardList from "./components/CardList";
const App = () => {
  return (
    <>
          <Sidebar />
      <TopBanner />
      <div className='subTitle'>Our portfolio</div>
      
      <CardList />
      <div className='subTitle'>Writing & Press</div>
    </>
  );
};

export default App;
