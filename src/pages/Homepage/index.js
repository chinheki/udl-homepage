import React, { useEffect } from "react";
import TopBanner from "../../components/TopBanner";
import Profiles from "../../components/Profiles";
import Value from "../../components/Value";
import CardList from "../../components/CardList";
import Blogs from "../../components/Blogs";
import BottomBanner from "../../components/BottomBanner";
import Layout from "../../components/Layout";
import { check_if_in_view } from "../../components/SlideIn/inedx";
const Homepage = () => {
    useEffect(() => {
      const onScroll = () => {
        check_if_in_view(".animation-element",'in-view');
        check_if_in_view(".falling-bg-container",'falling');
      }
      
    document.querySelector("#root").addEventListener("scroll", onScroll);
    return () => {
      document.querySelector("#root").removeEventListener("scroll", onScroll);
    };
  }, []);
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
