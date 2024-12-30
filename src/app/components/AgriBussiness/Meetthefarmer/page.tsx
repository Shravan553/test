"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import Footer from "../../../Footer/Footer";
import NavbarTYP from "../../../Navbar/NavbarTYP";
import Image from 'next/image'; // Importing Image from next/image
import styles from './Meetthefarmer.module.css';
import SC from '../../../Scroll/scroll';


const Meetfarmer: React.FC = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.supplyChainWrapper}>
      <Head>
        <title>Meet the Farmer | AGPotato</title>
        <meta
          name="description"
          content="Meet the dedicated farmers behind AGPotato. Learn about their contributions, sustainability practices, and their passion for growing high-quality potatoes."
        />
        <meta name="keywords" content="farmers, AGPotato, sustainability, potato farming, agricultural community" />
        <meta name="author" content="AGPotato" />
        <meta property="og:title" content="Meet the Farmer | AGPotato" />
        <meta
          property="og:description"
          content="Discover the faces behind AGPotato&apos;s premium potatoes. Meet the farmers, learn about their sustainable practices, and their impact on global agriculture."
        />
        <meta property="og:image" content="/assets/Meetfarmer1.jpg" />
        <meta property="og:url" content="https://www.agpotato.com/meet-the-farmer" />
      </Head>
      <NavbarTYP />
      
      {/* Header Section with Image */}
      <div className={styles.supply1ChainHeader}>
        <Image
          src="/assets/Meetfarmer1.jpg"
          alt="Potato Supply Chain Header"
          className={styles.meetHeaderImage}
          width={1920}
          height={1080}
        />
        <h1 className={styles.headerTitle1}>Meet The Farmer</h1>
      </div>

      {/* Meet the Farmer Section */}
      <section className={styles.meetFarmerInfo}>
        <h2 className={styles.meetFarmerHeading}>Our Farmers, Our Heroes</h2>
        <p className={styles.meetFarmerParagraph}>
          At the heart of our supply chain are dedicated farmers who nurture the land and cultivate the finest potatoes.
          Their passion, expertise, and hard work ensure that only the best produce reaches your table. We take pride in
          building strong relationships with our farmers, supporting sustainable practices, and celebrating their invaluable
          contributions to the community. Meet the people who grow with care and harvest with purpose – they are the lifeblood
          of our mission to bring quality produce from the farm to your kitchen.
        </p>
      </section>

      {/* Farmer Gallery */}
      <section className={styles.farmerGallery}>
        <h2 className={styles.galleryHeading}>Farmer Stories Gallery</h2>
        <div className={styles.galleryGrid}>
          <div className={styles.galleryItems}>
            <Image
              src="/assets/Farmer1.jpeg"
              alt="Farmer 1"
              width={500}
              height={300}
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryItems}>
            <Image
              src="/assets/Farmer2.jpeg"
              alt="Farmer 2"
              width={500}
              height={300}
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryItems}>
            <Image
              src="/assets/Gimage7.jpeg"
              alt="Farmer 3"
              width={500}
              height={300}
              className={styles.galleryImage}
            />
          </div>
          <div className={styles.galleryItems}>
            <Image
              src="/assets/Gimage13.jpeg"
              alt="Farmer 4"
              width={500}
              height={300}
              className={styles.galleryImage}
            />
          </div>
         
          
        </div>
      </section>
      {/* Map Section */}
<section className={styles.mapSection}>
  <h2 className={styles.mapHeading}>Explore Our Reach</h2>
  <div className={styles.mapContainer}>
    <Image
      src="/assets/ytmap.png" /* Replace with the actual map image path */
      alt="Our Reach Map"
      width={1200}
      height={600}
      className={styles.mapImage}
    />
  </div>
</section>
<section className={styles.businessInfo}>
        <h2 className={styles.businessHeading}>Our Business Approach</h2>
        <p className={styles.businessParagraph}>
          Focusing on fair pricing and promoting sustainable agriculture, our end-to-end process includes sourcing from farmers,
          stocking the potatoes in cold storage, and sorting, grading, and pre-packaging them to meet customer requirements.
          AGPotato provides significant business opportunities by offering high-quality potatoes and potato byproducts to a wide range
          of industries, including food manufacturers, retail chains, wholesalers, and institutional buyers. By sourcing directly
          from farmers, we ensure competitive pricing for our customers and add value to the supply chain with processed products
          that meet industry standards. Our strong logistics network ensures timely delivery and consistent availability, building
          long-term partnerships for mutual growth and success.
        </p>
      </section>

{/* New Image Section */}
<section className={styles.additionalImagesSection}>
  <h2 className={styles.additionalImagesHeading}>Experience Our Story with Framers</h2>
  <div className={styles.imageGrid}>
    <div className={styles.imageItem}>
      <Image
        src="/assets/Gimage13.jpeg" /* Replace with your image path */
        alt="Additional Image 1"
        width={500}
        height={300}
        className={styles.additionalImage}
      />
    </div>
    <div className={styles.imageItem}>
      <Image
        src="/assets/Gimage11.jpeg" /* Replace with your image path */
        alt="Additional Image 1"
        width={500}
        height={300}
        className={styles.additionalImage}
      />
    </div>
  
  </div>
</section>


      {/* Business Description Section */}
      <SC/>
      <Footer />
    </div>
  );
};

export default Meetfarmer;
