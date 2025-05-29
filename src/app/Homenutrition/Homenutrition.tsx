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
      { threshold: 0.1 }
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
          <span className={styles.sectionTag}>NUTRITIONAL POWER</span>
          <h2 className={styles.title}>Potato Nutrition Profile</h2>
          <div className={styles.divider}></div>
          
          <div className={styles.nutritionFacts}>
            <div className={styles.factItem}>
              <div className={styles.factIcon}>⚡</div>
              <h3 className={styles.factTitle}>Energy Boost</h3>
              <p className={styles.factText}>
                Potatoes provide complex carbohydrates for sustained energy, along with potassium 
                and vitamin C to fuel your active lifestyle.
              </p>
            </div>
            
            <div className={styles.factItem}>
              <div className={styles.factIcon}>🌿</div>
              <h3 className={styles.factTitle}>Vitamin Rich</h3>
              <p className={styles.factText}>
                Packed with more potassium than bananas and excellent vitamin C content, 
                potatoes offer superior nutritional value among staple vegetables.
              </p>
            </div>
            
            <div className={styles.factItem}>
              <div className={styles.factIcon}>❤️</div>
              <h3 className={styles.factTitle}>Heart Healthy</h3>
              <p className={styles.factText}>
                Naturally fat-free, cholesterol-free, and low in sodium, with only 
                110 calories per serving - a smart choice for balanced nutrition.
              </p>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <Link href="/components/About/" className={styles.primaryButton}>
              Discover More
              <span className={styles.buttonIcon}>→</span>
            </Link>
            <Link href="/components/Insight/Nutrition/" className={styles.secondaryButton}>
              Full Nutrition Data
              <span className={styles.buttonIcon}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homenutrition;