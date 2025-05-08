"use client";

import Image from "next/image";
import styles from "./tom.module.css";
import tomatoImage from "/public/assets/to99.jpg"; // Public image access

const QualitySection = () => {
  return (
    <div className={styles.qualitySection}>
      <div className={styles.qualityImage}>
        <Image
          src={tomatoImage}
          alt="Fresh Tomatoes"
          width={500}
          height={300}
          className={styles.image}
        />
      </div>

      <div className={styles.qualityContent}>
        <p className={styles.subHeading}>Naturally Healthy</p>
        <h2 className={styles.mainHeading}>
          Discover the <span>Power of Fresh Tomatoes</span> in Your Diet
        </h2>

        <div className={styles.featuresGrid}>
          <div className={styles.featureBox}>
            <span className={styles.icon}>🥗</span>
            <div>
              <h3>Rich in Nutrients</h3>
              <p>Tomatoes are packed with Vitamin C, potassium, and folate, boosting overall health.</p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <span className={styles.icon}>❤️</span>
            <div>
              <h3>Heart-Healthy</h3>
              <p>Lycopene in tomatoes helps lower cholesterol and supports heart function.</p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <span className={styles.icon}>🌿</span>
            <div>
              <h3>Farm Fresh</h3>
              <p>Organically grown and carefully harvested to maintain peak freshness and taste.</p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <span className={styles.icon}>💪</span>
            <div>
              <h3>Immunity Booster</h3>
              <p>Tomatoes strengthen your immune system with antioxidants and anti-inflammatory benefits.</p>
            </div>
          </div>

          {/* New Feature Box 1 */}
          <div className={styles.featureBox}>
            <span className={styles.icon}>🧑‍🍳</span>
            <div>
              <h3>Versatile Ingredient</h3>
              <p>Tomatoes are perfect for a wide variety of dishes, from salads to sauces and soups.</p>
            </div>
          </div>

          {/* New Feature Box 2 */}
          <div className={styles.featureBox}>
            <span className={styles.icon}>💧</span>
            <div>
              <h3>Hydration</h3>
              <p>Tomatoes are made up of 95% water, helping to keep your body hydrated and refreshed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
