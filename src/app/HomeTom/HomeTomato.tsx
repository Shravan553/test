"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./tom.module.css";
import tomatoImage from "/public/assets/to99.jpg";

const QualitySection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className={styles.tomatoShowcase}>
      {/* Hero Banner */}
      <motion.div 
        className={styles.heroBanner}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className={styles.heroOverlay}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1>
            Farm Fresh <span>Tomatoes</span>
          </h1>
          <p>Naturally grown, packed with flavor and nutrients</p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className={styles.tomatoGrid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image Section */}
        <motion.div 
          className={styles.tomatoVisual}
          variants={fadeIn}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={tomatoImage}
              alt="Vine-ripened tomatoes"
              fill
              className={styles.tomatoPhoto}
              priority
            />
          </div>
          <motion.div 
            className={styles.imageBadge}
            whileHover={{ scale: 1.05 }}
          >
            <span>100% Organic</span>
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          className={styles.tomatoBenefits}
          variants={fadeIn}
        >
          <h2></h2>
          
          <div className={styles.benefitsGrid}>
            {[
              { icon: "🌿", title: "Pesticide-Free", text: "Grown without harmful chemicals" },
              { icon: "⏱️", title: "Vine-Ripened", text: "Harvested at peak freshness" },
              { icon: "🧪", title: "Nutrient-Rich", text: "High in lycopene and vitamin C" },
              { icon: "👨‍🌾", title: "Local Farmers", text: "Supporting community agriculture" },
              { icon: "♻️", title: "Sustainable", text: "Eco-friendly farming practices" },
              { icon: "🏆", title: "Award-Winning", text: "Recognized for exceptional quality" }
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                className={styles.benefitCard}
                variants={fadeIn}
                whileHover={{ y: -5 }}
              >
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Varieties Section */}
        <motion.div 
          className={styles.varietiesContainer}
          variants={fadeIn}
        >
          <h2>Our Premium Varieties</h2>
          
          <div className={styles.varietyTabs}>
            <motion.div 
              className={styles.varietyPanel}
              whileHover={{ y: -10 }}
            >
              <h3>Tomato Local</h3>
              <ul>
                <li>Authentic heritage flavors</li>
                <li>Unique colors and shapes</li>
                <li>Slow-ripened for depth</li>
                <li>Non-GMO seeds</li>
              </ul>
              <motion.div 
                className={styles.varietyTag}
                whileHover={{ scale: 1.1 }}
              >
                Local Favorite
              </motion.div>
            </motion.div>
            
            <motion.div 
              className={styles.varietyPanel}
              whileHover={{ y: -10 }}
            >
              <h3>Tomato Hybrid</h3>
              <ul>
                <li>Sweet burst of flavor</li>
                <li>Perfect for snacking</li>
                <li>High antioxidant content</li>
                <li>Consistent quality</li>
              </ul>
              <motion.div 
                className={styles.varietyTag}
                whileHover={{ scale: 1.1 }}
              >
                Best Seller
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QualitySection;