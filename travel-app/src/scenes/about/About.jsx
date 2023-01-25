import React from "react";
import Nav from "../../components/nav/Nav";
import about from "../../assets/about.jpg";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Aboutus from "../../components/aboutus/Aboutus";

const About = () => {
  return (
    <div>
      <Nav />
      <Hero hero="abthero" img={about} title="About US" />
      <Aboutus />
      <Footer />
    </div>
  );
};

export default About;
