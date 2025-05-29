"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Homepotatotype.module.css";

const Homepotatotype = () => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.section}>
      {/* Decorative elements */}
      <div className={styles.backgroundPattern}></div>
      <div className={styles.leafAccent}></div>
      
      <div className={styles.container}>
        {/* Image with organic frame */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variants}
          className={styles.imageContainer}
        >
          <div className={styles.organicFrame}>
            <Image
              src="/assets/tyimage1.jpg"
              alt="Premium potato varieties"
              width={500}
              height={500}
              className={styles.potatoImage}
              priority
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className={styles.content}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variants}
          transition={{ delay: 0.2 }}
        >
          <motion.span 
            className={styles.sectionTag}
            whileHover={{ scale: 1.05 }}
          >
            POTATO GENETICS
          </motion.span>
          
          <h2 className={styles.title}>
            Cultivating <span>Excellence</span> in Every Variety
          </h2>
          
          <div className={styles.textContainer}>
            <motion.p 
              className={styles.text}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Our <strong>3797 variety</strong> delivers exceptional yield with 
              <em> climate adaptability</em>, thriving across diverse growing conditions.
            </motion.p>
            
            <motion.p 
              className={styles.text}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              The <strong>302 Hybrid</strong> features enhanced 
              <em> disease resistance</em> and perfect dry matter content for 
              premium processing quality.
            </motion.p>
            
            <motion.p 
              className={styles.text}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <strong>Chipsona 2001</strong> is engineered for 
              <em> superior crispness</em> with 30% lower oil absorption than 
              standard varieties.
            </motion.p>
          </div>
          
          <motion.button
            className={styles.ctaButton}
            whileHover={{ 
              y: -3,
              boxShadow: "0 10px 20px rgba(0, 95, 96, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Explore Varieties
            <span className={styles.buttonArrow}></span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Homepotatotype;