"use client";

import Image from "next/image";
import styles from "./Onion.module.css";

const QualitySection = () => {
  return (
    <div className={styles.onionShowcase}>
      {/* Hero Section */}
      <div className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h1>
            Nature's <span>Onion</span> Treasures
          </h1>
          <p>Farm-fresh onions packed with flavor and health benefits</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.onionContainer}>
        {/* Image Section */}
        <div className={styles.visualSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/on79.png"
              alt="Fresh Organic Onions"
              fill
              className={styles.onionImage}
              priority
            />
          </div>
          <div className={styles.certificationBadge}>
            <span>Certified Organic</span>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={styles.benefitsSection}>
          <h2>Why Our Onions Are Special</h2>
          
          <div className={styles.benefitsGrid}>
            {[
              { 
                icon: "🧅", 
                title: "Flavor Enhancer", 
                description: "Adds depth and richness to transform ordinary meals into culinary delights"
              },
              { 
                icon: "🌿", 
                title: "Natural Remedy", 
                description: "Contains compounds that help reduce inflammation and fight infections"
              },
              { 
                icon: "🏡", 
                title: "Locally Grown", 
                description: "Cultivated using sustainable farming practices for optimal quality"
              },
              { 
                icon: "🛡️", 
                title: "Antioxidant Rich", 
                description: "Packed with quercetin, a powerful antioxidant for overall health"
              },
              { 
                icon: "👨‍🍳", 
                title: "Kitchen Staple", 
                description: "Essential ingredient in global cuisines from soups to stir-fries"
              },
              { 
                icon: "❤️", 
                title: "Heart Healthy", 
                description: "May help lower blood pressure and reduce heart disease risk factors"
              }
            ].map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Health Benefits Section */}
        <div className={styles.healthBenefits}>
          <h2>Nutritional Powerhouse</h2>
          <p className={styles.healthIntro}>Onions offer remarkable health benefits backed by science:</p>
          
          <div className={styles.healthGrid}>
            <div className={styles.healthCard}>
              <div className={styles.healthIcon}>💪</div>
              <div>
                <h3>Immune Support</h3>
                <p>High in vitamin C (13% DV per 100g) and phytochemicals that boost immunity</p>
              </div>
            </div>
            
            <div className={styles.healthCard}>
              <div className={styles.healthIcon}>🫀</div>
              <div>
                <h3>Heart Health</h3>
                <p>Contains sulfur compounds that may help lower cholesterol and blood pressure</p>
              </div>
            </div>
            
            <div className={styles.healthCard}>
              <div className={styles.healthIcon}>🦠</div>
              <div>
                <h3>Antibacterial</h3>
                <p>Quercetin and other compounds show antimicrobial properties against common pathogens</p>
              </div>
            </div>
            
            <div className={styles.healthCard}>
              <div className={styles.healthIcon}>🧠</div>
              <div>
                <h3>Brain Health</h3>
                <p>Antioxidants may protect against age-related cognitive decline</p>
              </div>
            </div>
            
            <div className={styles.healthCard}>
              <div className={styles.healthIcon}>🦴</div>
              <div>
                <h3>Bone Density</h3>
                <p>GPCS peptide in onions may help prevent bone loss</p>
              </div>
            </div>
            
            <div className={styles.healthCard}>
              <div className={styles.healthIcon}>🍽️</div>
              <div>
                <h3>Digestive Health</h3>
                <p>Prebiotic fibers support gut microbiome diversity</p>
              </div>
            </div>
          </div>
          
          <div className={styles.nutritionFacts}>
            <h3>Nutrition Facts (per 100g)</h3>
            <div className={styles.nutritionGrid}>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionValue}>40</span>
                <span className={styles.nutritionLabel}>Calories</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionValue}>9g</span>
                <span className={styles.nutritionLabel}>Carbs</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionValue}>1.1g</span>
                <span className={styles.nutritionLabel}>Protein</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionValue}>13%</span>
                <span className={styles.nutritionLabel}>Vitamin C</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionValue}>7%</span>
                <span className={styles.nutritionLabel}>Fiber</span>
              </div>
              <div className={styles.nutritionItem}>
                <span className={styles.nutritionValue}>5%</span>
                <span className={styles.nutritionLabel}>Vitamin B6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;