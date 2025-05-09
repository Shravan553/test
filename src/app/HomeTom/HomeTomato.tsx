"use client";

import Image from "next/image";
import styles from "./tom.module.css";
import tomatoImage from "/public/assets/to99.jpg";

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
        {/* <p className={styles.subHeading}>Naturally Healthy</p> */}
        <h2 className={styles.subHeading}>
  Discover the Power of Fresh <span className={styles.redText}>Tomatoes</span> in Your Diet
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

          <div className={styles.featureBox}>
            <span className={styles.icon}>🧑‍🍳</span>
            <div>
              <h3>Versatile Ingredient</h3>
              <p>Perfect for salads, sauces, soups, and more—tomatoes add taste and nutrition to any dish.</p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <span className={styles.icon}>💧</span>
            <div>
              <h3>Hydration</h3>
              <p>Composed of 95% water, tomatoes help keep you hydrated throughout the day.</p>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Tomato Types */}
        <div className={styles.tomatoTypesSection}>
          <h2 className={styles.typesHeading}>Types of Tomatoes We Offer</h2>

          <div className={styles.tomatoType}>
            <h3>🍅 Tomato Hybrid</h3>
            <p>
              Our hybrid tomatoes are specially cultivated for improved shelf-life, firmness, and uniform shape. 
              They're ideal for commercial kitchens, transport, and storage while retaining their delicious flavor.
            </p>
          </div>

          <div className={styles.tomatoType}>
            <h3>🌿 Tomato Local</h3>
            <p>
              Grown naturally by local farmers, these tomatoes are juicy, aromatic, and rich in traditional flavor—
              perfect for everyday home cooking and regional dishes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
