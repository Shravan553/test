"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Homenutrition.module.css";

const Homenutrition: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.nutritionSection}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/f.png"
            alt="Nutritional Facts of Potatoes"
            width={600}
            height={500}
            className={styles.mainImage}
            priority
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <span className={styles.sectionTag}>NUTRITIONAL FACTS</span>
          <h2 className={styles.title}>Potato Nutrition Facts</h2>
          <div className={styles.divider}></div>
          
          <div className={styles.nutritionFacts}>
            <div className={styles.factItem}>
              <h3 className={styles.factTitle}>Energy Boost</h3>
              <p className={styles.factText}>
                Potatoes are a nutrient-dense powerhouse that provides the energy, potassium, 
                and vitamin C you need to fuel your day.
              </p>
            </div>
            
            <div className={styles.factItem}>
              <h3 className={styles.factTitle}>Vitamin Rich</h3>
              <p className={styles.factText}>
                More energy-packed than any other popular vegetable, with more potassium 
                than a banana and excellent vitamin C content.
              </p>
            </div>
            
            <div className={styles.factItem}>
              <h3 className={styles.factTitle}>Healthy Choice</h3>
              <p className={styles.factText}>
                Naturally fat-free, cholesterol-free, and sodium-free, with only 
                110 calories per 5.3-ounce serving.
              </p>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <Link href="/components/About/" className={styles.primaryButton}>
              About Us
              <span className={styles.buttonIcon}>→</span>
            </Link>
            <Link href="/components/Insight/Nutrition/" className={styles.secondaryButton}>
              Full Nutrition Facts
              <span className={styles.buttonIcon}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homenutrition;