import {useState} from "react";
import Featured from "../../components/featured/featured";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import MailList from "../../components/MailList/MailList";
import Navbar from "../../components/navbar/navbar";
import PropertyList from "../../components/PropertyList/PropertyList";
import { useLocation } from "react-router-dom";
import "./home.css";

const Home = () => {
  const location = useLocation();
  
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;