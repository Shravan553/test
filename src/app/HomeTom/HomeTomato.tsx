"use client";

import Image from "next/image";
import styles from "./tom.module.css";
import tomatoImage from "/public/assets/to99.jpg";

const QualitySection = () => {
  return (
    <div className={styles.qualitySection}>
      {/* Hero Section with Tomato Background */}
      {/* <div className={styles.tomatoHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Nature's <span className={styles.tomatoRed}>Juicy</span> Treasure
          </h1>
          <p className={styles.heroSubtitle}>
            Premium Tomatoes Grown with Care and Passion
          </p>
        </div>
      </div> */}

      <div className={styles.tomatoContainer}>
        <div className={styles.qualityImage}>
          <Image
            src={tomatoImage}
            alt="Fresh Tomatoes"
            width={500}
            height={300}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.qualityContent}>
          <h2 className={styles.sectionTitle}>
            Discover the Power of <span className={styles.tomatoRed}>Tomatoes</span>
          </h2>
{/* Tomato-shaped feature cards */}
<div className={styles.tomatoFeatures}>
            <div className={styles.tomatoCard}>
              <div className={styles.tomatoIcon}>🥗</div>
              <h3>Nutrient Powerhouse</h3>
              <p>Rich in Vitamin C, potassium, and antioxidants for optimal health.</p>
            </div>

            <div className={styles.tomatoCard}>
              <div className={styles.tomatoIcon}>❤️</div>
              <h3>Heart Health</h3>
              <p>Lycopene helps reduce bad cholesterol and blood pressure.</p>
            </div>

            <div className={styles.tomatoCard}>
              <div className={styles.tomatoIcon}>🌱</div>
              <h3>Organic Growth</h3>
              <p>Sustainably grown with natural methods for pure flavor.</p>
            </div>

            <div className={styles.tomatoCard}>
              <div className={styles.tomatoIcon}>🛡️</div>
              <h3>Immunity Boost</h3>
              <p>Antioxidants strengthen your body&apos;s natural defenses.</p>
            </div>

            <div className={styles.tomatoCard}>
              <div className={styles.tomatoIcon}>🍽️</div>
              <h3>Culinary Versatility</h3>
              <p>Perfect for sauces, salads, soups, and countless recipes.</p>
            </div>

            <div className={styles.tomatoCard}>
              <div className={styles.tomatoIcon}>💦</div>
              <h3>Natural Hydration</h3>
              <p>95% water content helps maintain fluid balance.</p>
            </div>
          </div>


          {/* Tomato Varieties Section */}
          <div className={styles.varietiesSection}>
            <h2 className={styles.varietiesTitle}>Our Tomato Varieties</h2>
            
            <div className={styles.varietyCard}>
              <div className={`${styles.varietyBadge} ${styles.hybridBadge}`}>HYBRID</div>
              <h3>Commercial Grade Tomatoes</h3>
              <p>
                Engineered for durability without compromising taste, our hybrid tomatoes offer:
              </p>
              <ul className={styles.tomatoList}>
                <li>Extended shelf life</li>
                <li>Uniform size and shape</li>
                <li>Consistent flavor profile</li>
                <li>High yield production</li>
              </ul>
            </div>
            
            <div className={styles.varietyCard}>
              <div className={`${styles.varietyBadge} ${styles.localBadge}`}>LOCAL</div>
              <h3>Heirloom & Traditional Varieties</h3>
              <p>
                Grown using time-honored methods, these tomatoes deliver:
              </p>
              <ul className={styles.tomatoList}>
                <li>Authentic regional flavors</li>
                <li>Natural growing techniques</li>
                <li>Unique shapes and colors</li>
                <li>Support for local farmers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;