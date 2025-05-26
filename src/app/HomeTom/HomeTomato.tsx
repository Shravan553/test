"use client";

import Image from "next/image";
import styles from "./tom.module.css";
import tomatoImage from "/public/assets/to99.jpg";

const QualitySection = () => {
  return (
    <div className={styles.tomatoShowcase}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <div className={styles.heroOverlay}>
          <h1>
            Farm Fresh <span>Tomatoes</span>
          </h1>
          <p>Naturally grown, packed with flavor and nutrients</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.tomatoGrid}>
        {/* Image Section */}
        <div className={styles.tomatoVisual}>
          <div className={styles.imageWrapper}>
            <Image
              src={tomatoImage}
              alt="Vine-ripened tomatoes"
              fill
              className={styles.tomatoPhoto}
              priority
            />
          </div>
          <div className={styles.imageBadge}>
            <span>100% Organic</span>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.tomatoBenefits}>
          <h2>Why Our Tomatoes Stand Out</h2>
          
          <div className={styles.benefitsGrid}>
            {[
              { icon: "🌿", title: "Pesticide-Free", text: "Grown without harmful chemicals" },
              { icon: "⏱️", title: "Vine-Ripened", text: "Harvested at peak freshness" },
              { icon: "🧪", title: "Nutrient-Rich", text: "High in lycopene and vitamin C" },
              { icon: "👨‍🌾", title: "Local Farmers", text: "Supporting community agriculture" },
              { icon: "♻️", title: "Sustainable", text: "Eco-friendly farming practices" },
              { icon: "🏆", title: "Award-Winning", text: "Recognized for exceptional quality" }
            ].map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Varieties Section */}
        <div className={styles.varietiesContainer}>
          <h2>Our Premium Varieties</h2>
          
          <div className={styles.varietyTabs}>
            <div className={styles.varietyPanel}>
              <h3> Tomato Local</h3>
              <ul>
                <li>Authentic heritage flavors</li>
                <li>Unique colors and shapes</li>
                <li>Slow-ripened for depth</li>
                <li>Non-GMO seeds</li>
              </ul>
              <div className={styles.varietyTag}>Local Favorite</div>
            </div>
            
            <div className={styles.varietyPanel}>
              <h3>Tomato Hybrid</h3>
              <ul>
                <li>Sweet burst of flavor</li>
                <li>Perfect for snacking</li>
                <li>High antioxidant content</li>
                <li>Consistent quality</li>
              </ul>
              <div className={styles.varietyTag}>Best Seller</div>
            </div>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;