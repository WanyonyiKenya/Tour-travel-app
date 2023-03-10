import React from "react";
import Hero from "../../components/hero/Hero";
import Nav from "../../components/nav/Nav";
import home from "../../assets/home.jpg";
import Travel from "../../components/destination/Travel";
import Trip from "../../components/trips/Trip";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero
        hero="mainhero"
        img={home}
        title="Experience Kenya with Us"
        text="Showing off Kenya"
        btn="Travel with US"
        btnclass="btnclass"
      />
      <Travel />
      <Trip />
      <Footer />
    </div>
  );
};

export default Home;
