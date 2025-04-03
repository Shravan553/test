"use client";

import React, { useState, useEffect } from "react";
import styles from "../Hero/Hero.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const slides = [
  {
    image: "/assets/s32.jpg",
    heading: "AGPOTATO - Innovating Farming Practices",
    description: "Empowering farmers with cutting-edge, sustainable farming techniques for optimized yields and quality.",
    alt: "Illustration of modern farming techniques at AGPotato."
  },
  {
    image: "/assets/potatotractor.jpg",
    heading: "AGPOTATO - Global Potato Excellence",
    description: "Exporting premium potatoes with sustainable practices to markets worldwide.",
    alt: "Image of fresh potatoes being prepared for export."
  },
  {
    image: "/assets/ma.png",
    heading: "Sustainable Potato Flour",
    description: "High-quality, nutrient-rich potato flour produced with eco-friendly processes.",
    alt: "Image showing sustainable potato flour by AGPotato."
  },
  {
    image: "/assets/websiteimage3.jpg",
    heading: "Diverse Potato Varieties",
    description: "Russet, Yukon Gold, Red Bliss, and Fingerlings - each with unique flavors and culinary uses.",
    alt: "Image showing potato varieties."
  },
  {
    image: "/assets/3e.webp",
    heading: "Innovative Prepackaging",
    description: "Freshness guaranteed with our advanced prepackaging solutions for global distribution.",
    alt: "Image showing packaged potatoes."
  },
];

const WebHero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Slide transition with animation handling
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500); // Match this with your CSS transition duration
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual slide change
  const goToSlide = (index: number) => {
    if (index === currentIndex || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className={styles.webHero}>
      <Head>
        <title>Agpotato - Excellence in Sustainable Potato Products</title>
        <meta name="google-site-verification" content="sZBFMd3wcR6-f30Igk3vvcOhCP2LkDaXpKAXGkw25rI" />
        <meta
          name="description"
          content="AGPotato leads in sustainable potato farming, producing nutrient-rich potato flour. Our eco-friendly farming techniques and global export services ensure the highest quality products."
        />
        <meta
          name="keywords"
          content="Potato, Sustainable Farming, AGPotato, Potato Flour, Agriculture Innovation, Sustainable Agriculture"
        />
      </Head>

      <div className={styles.webHeroSlider}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.webHeroSlide} ${index === currentIndex ? styles.webActive : ""} ${isTransitioning ? styles.transitioning : ""}`}
            aria-hidden={index !== currentIndex}
          >
            <div className={styles.imageOverlay}></div>
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === currentIndex}
              className={styles.slideImage}
              sizes="100vw"
            />
            
            <div className={styles.webHeroContent}>
              <div className={`${styles.webHeroText} ${index === currentIndex ? styles.visible : ""}`}>
                <h1 className={styles.heading}>{slide.heading}</h1>
                <p className={styles.description}>{slide.description}</p>
                <Link href="/components/About/" className={styles.ctaButton}></Link>
              </div>
            </div>
          </div>
        ))}
        
        <div className={styles.webSliderControls}>
          <button 
            className={styles.prevButton}
            onClick={() => goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
            aria-label="Previous slide"
          >
            &lsaquo;
          </button>
          
          <div className={styles.dotsContainer}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.webSliderDot} ${index === currentIndex ? styles.webActive : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className={styles.nextButton}
            onClick={() => goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)}
            aria-label="Next slide"
          >
            &rsaquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebHero;
