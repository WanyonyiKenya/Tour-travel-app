import React from "react";
import Nav from "../../components/nav/Nav";
import service from "../../assets/service.jpg";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Trip from "../../components/trips/Trip";

const Servece = () => {
  return (
    <div>
      <Nav />
      <Hero hero="abthero" img={service} title="Services Offered" />
      <Trip />
      <Footer />
    </div>
  );
};

export default Servece;
