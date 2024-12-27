import React from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import MapAddress from "../components/MapAddress";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactForm />
      <MapAddress />
      <Footer />
    </>
  );
};

export default Contact;
