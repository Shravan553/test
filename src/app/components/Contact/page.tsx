"use client";

import Head from "next/head";
import NavbarTYP1 from "../../Navbar/NavbarTYP"; // Adjust the import as necessary

import SC from '../../Scroll/scroll';
import Footer from '../../Footer/Footer';


const ContactForm = () => {
 


  
 
  
  return (
    <>
      <Head>
        
        <title>AGPotato | Potatoes and Sustainable Farming</title>
        <meta
          name="description"
          content="Contact AGPotato for the best potato products. We specialize in sustainable farming and delivering fresh potatoes. Reach out to us today!"
        />
        <meta
          name="keywords"
          content="potatoes, sustainable farming, fresh potatoes, AGPotato, contact us, potato products, potato farming"
        />
        <meta
          property="og:title"
          content="Contact Us - AGPotato | Potatoes and Sustainable Farming"
        />
        <meta
          property="og:description"
          content="Contact AGPotato for the best potato products. We specialize in sustainable farming and delivering fresh potatoes. Reach out to us today!"
        />
        <meta property="og:image" content="/assets/your-image-url.jpg" />
        <meta property="og:url" content="https://www.agpotato.com/contact" />
      </Head>
      <NavbarTYP1/>
      <Footer/>
      <SC/>
       
    </>
  );
};

export default ContactForm;
