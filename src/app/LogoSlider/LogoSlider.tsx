


"use client";
import Head from 'next/head';

import React from "react";
import styles from "./LogoSlider.module.css";
import Image from "next/image"; // Use Next.js Image component for optimization

const imagePaths = [
  "/assets/Blink.png",
  "/assets/buddha.png",
  "/assets/DUNZO.png",
  "/assets/BigBasket.png",
  "/assets/flip.png",
  "/assets/Reliance.png",
  "/assets/swiggy.jpg",
  "/assets/Zepto.png",
  "/assets/More.jpg",
 
];

const LogoSlider: React.FC = () => {
  return (
    <div className={styles.campus}>
     <Head>
        <title>Our Clients - Trusted Partners</title>
        <meta
          name="description"
          content="Discover the brands we work with. Our trusted clients include Blink, DUNZO, Swiggy, Flipkart, and many more."
        />
        <meta
          name="keywords"
          content="client logos, business partners, Blink, DUNZO, BigBasket, Swiggy, Reliance, Zepto, More, client brands"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className={styles.gallery}>
        {imagePaths.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Potato Logo Image ${index + 1}`}
            width={400} // Adjust width to your layout
            height={300} // Adjust height to your layout
            loading="lazy"
            className={styles.image}
          />
        ))}
      </div>

      
     
    </div>
  );
};

export default LogoSlider;
