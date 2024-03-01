import React from "react";
import TopBanner from "../../components/TopBanner";
import Profiles from "../../components/Profiles";
import Value from "../../components/Value";
import CardList from "../../components/CardList";
import Blogs from "../../components/Blogs";
import BottomBanner from "../../components/BottomBanner";
import Layout from "../../components/Layout/inedx";
const Homepage = () => {
  return (
    <Layout>
      <TopBanner />
      <Profiles />
      <Value />
      <CardList />
      <Blogs />
      <BottomBanner />
    </Layout>
  );
};

export default Homepage;
