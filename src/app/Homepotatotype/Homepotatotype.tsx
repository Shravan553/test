"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Homepotatotype.module.css";
import Link from "next/link";
import Image from "next/image";

const Homepotatotype: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <div className={`${styles.imageContainer} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.circleWrapper}>
            <div className={styles.circleBackground}></div>
            <div className={styles.cloudAnimation}></div>
            <div className={styles.cloudAnimation2}></div>
            <div className={styles.imageWrapper}>
              <Image
                src="/assets/tyimage1.jpg"
                alt="Types of Potatoes"
                width={800}
                height={800}
                className={styles.circleImage}
                priority
              />
            </div>
          </div>
        </div>
        
        <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.sectionTag}>TYPES OF POTATOES</span>
          <h2 className={styles.title}>Explore Our Premium Potato Varieties</h2>
          
          <div className={styles.textContainer}>
            <p className={styles.text}>
              AGPOTATO offers a variety of premium potato types suited for all
              needs. Our <strong>3797</strong> variety is prized for its high yield
              and adaptability across regions. The <strong>302 Hybrid</strong> is
              known for its disease resistance and ideal chip-making quality.{" "}
              <strong>Chipsona 2001</strong> is specially cultivated for producing
              crispy, golden chips with minimal oil absorption.
            </p>
            <p className={styles.text}>
              The <strong>Mohan</strong> and <strong>Kyathi</strong> varieties are
              versatile, with excellent texture for boiling, frying, or baking.{" "}
              <strong>Jyothi</strong> and <strong>Hasan Potatoes</strong> are
              favored for their smooth texture and delicious flavor, perfect for a
              range of culinary applications.
            </p>
          </div>
          
          <Link href="/components/Insight/TypesOfPot/" className={styles.ctaButton}>
            Discover All Varieties
            <span className={styles.arrow}>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Homepotatotype;