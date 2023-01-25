import React from "react";
import Nav from "../../components/nav/Nav";
import contact from "../../assets/contact.jpg";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/contactform/ContactForm";

const Contact = () => {
  return (
    <div>
      <Nav />
      <Hero hero="abthero" img={contact} title="Contact US Now!" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
