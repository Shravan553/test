"use client";

import Image from "next/image";
import styles from "./Onion.module.css";

const QualitySection = () => {
  return (
    <div className={styles.qualitySection}>
      <div className={styles.qualityContent}>
        <p className={styles.subHeading}>Nature's Treasure</p>
        <h2 className={styles.mainHeading}>
          Unleash the <span>Goodness of Onions</span> in Every Meal
        </h2>

        <div className={styles.featuresGrid}>
          <div className={styles.featureBox}>
            <span className={styles.icon}>🧅</span>
            <div>
              <h3>Flavor Enhancer</h3>
              <p>Onions add depth and richness to dishes, transforming ordinary meals into culinary delights.</p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <span className={styles.icon}>🩺</span>
            <div>
              <h3>Medicinal Properties</h3>
              <p>Packed with compounds that may help reduce inflammation and fight infections.</p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <span className={styles.icon}>🌱</span>
            <div>
              <h3>Locally Grown</h3>
              <p>Cultivated with care using sustainable farming practices for optimal quality.</p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <span className={styles.icon}>🛡️</span>
            <div>
              <h3>Antioxidant Powerhouse</h3>
              <p>Rich in quercetin, a powerful antioxidant that supports overall health.</p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <span className={styles.icon}>🧑‍🍳</span>
            <div>
              <h3>Kitchen Essential</h3>
              <p>A fundamental ingredient in cuisines worldwide, from soups to stir-fries.</p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <span className={styles.icon}>💓</span>
            <div>
              <h3>Heart Health</h3>
              <p>May help lower blood pressure and reduce heart disease risk factors.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.qualityImage}>
        <Image
          src="/assets/on79.png"  // Corrected path (assuming image is in public/assets)
          alt="Fresh Onions"
          width={500}
          height={300}
          className={styles.image}
          priority
        />
      </div>
    </div>
  );
};

export default QualitySection;