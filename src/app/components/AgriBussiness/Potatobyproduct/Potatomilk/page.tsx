"use client";

import Head from 'next/head';
import React, { useEffect, useMemo } from 'react';
import styles from '../Potatoflour/Potatoflour.module.css';
import Footer from '../../../../Footer/Footer';
import Nav from '../../../../Navbar/NavbarTYP';
import Image from 'next/image';
import Link from 'next/link';
import Scroll from '../../../../Scroll/scroll';


const PotatoMilk: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Nutritional data is static, memoized to avoid re-creation
  const nutritionData = useMemo(
    () => [
      { label: "Calories", value: "100 kcal" },
      { label: "Fat", value: "3g" },
      { label: "Carbohydrates", value: "18g" },
      { label: "Sugars", value: "1g" },
      { label: "Protein", value: "2g" },
      { label: "Calcium", value: "300mg" },
      { label: "Vitamin D", value: "2.5µg" },
    ],
    []
  );

  return (
    <section>
      <Nav />
      {/* SEO Meta Tags */}
      <Head>
        <title>Potato Milk: Nutrition, Health Benefits & Recipes</title>
        <meta
          name="description"
          content="Discover the benefits of potato milk - a lactose-free, vegan alternative. Explore nutritional facts, health benefits, and easy recipes for potato milk."
        />
        <meta
          name="keywords"
          content="potato milk, potato milk recipes, vegan milk alternative, lactose-free milk, potato milk nutrition, potato milk benefits, how to make potato milk, dairy-free milk"
        />
        <meta name="author" content="Jestina James" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Content Section */}
      <div>
        <h2 className={styles.floSectionTitle}>What is Potato Milk?</h2>
        <div className={styles.floProductInfo}>
          <Image
            src="/assets/potatomilk.webp"
            alt="Potato Flour"
            className={styles.floProductImage}
            width={600}
            height={400}
            loading="lazy"
          />
          <p className={styles.floProductDescription}>
            <br />
            <br />
            Potato milk is an innovative plant-based alternative to traditional dairy, crafted from a blend of potatoes, water, and sometimes additional ingredients like oils or sweeteners to enhance its flavor and texture. It is celebrated for its creamy consistency and mild taste, making it a versatile choice for beverages, cooking, and baking. 
            <br />
            <br />
            Additionally, it is naturally free from common allergens like nuts, soy, and gluten, broadening its appeal to individuals with dietary restrictions or preferences. As interest in sustainable and inclusive food choices grows, potato milk has emerged as a promising addition to the expanding world of plant-based dairy alternatives.
          </p>
        </div>
        <section className={styles.testimonialsSection}>
  <div className={styles.testimonialContainer}>
    <div className={styles.testimonialImage}>
      <Image
        src="/assets/byproductimage.webp" // Update with the correct image path
        alt="Potato Flour Benefits"
        width={300}
        height={300}
        className={styles.testimonialImg}
        loading="lazy"
      />
    </div>
    <div className={styles.testimonialContent}>
      <h3 className={styles.testimonialTitle}>Why People Love Potato By-Products</h3>
      <p className={styles.testimonialText}>
      Potato by-products, such as potato flour, potato milk, potato fries, and potato granules, have transformed the way I cook and bake. Potato flour adds a great texture to gluten-free breads and cakes, while potato milk serves as a creamy, plant-based alternative to dairy. Potato fries are a beloved comfort food, and potato granules are convenient for making fluffy mashed potatoes. These versatile by-products are not only delicious and nutritious but also eco-friendly, helping to reduce food waste while enhancing a wide variety of meals. </p>
<Link href="/components/AgriBussiness/Potatobyproduct/">
  <button className={styles.testimonialButton}>Know More About Potato By-Products</button>
</Link>
    </div>
  </div>
</section>

        <div className={styles.nutritionBox}>
          <h2 className={styles.nutritionTitle}>Nutritional Information (Per 100g Serving)</h2>
          <div className={styles.nutritionGrid}>
            {nutritionData.map((nutrient, index) => (
              <div
                className={`${styles.nutrientCard} animate__animated animate__fadeInUp`}
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.nutrientIcon}>🍽️</div>
                <p className={styles.nutrientText}>
                  <strong>{nutrient.label}:</strong> {nutrient.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Health Benefits Section */}
        <div className={styles.floHealthBenefits}>
          <h2 className={styles.floSectionTitle}>Health Benefits</h2>
          <div className={styles.floBenefitsContainer}>
            {[
             { text: 'Naturally lactose-free, making it a great option for those with dairy intolerance', icon: '🥛' },
             { text: 'Rich in antioxidants, helping to combat free radicals and reduce inflammation', icon: '🛡️' },
             { text: 'Promotes healthy skin with its vitamin-rich content', icon: '💆‍♀️' },
             { text: 'Supports a balanced diet with a good source of plant-based protein', icon: '🌱' },
             { text: 'Helps maintain healthy blood pressure due to its magnesium content', icon: '💪' },
             { text: 'Low in calories, perfect for weight management', icon: '⚖️' },
            ].map((benefit, index) => (
              <div className={styles.floBenefitCard} key={index}>
                <div className={styles.floBenefitIcon}>{benefit.icon}</div>
                <p className={styles.floBenefitText}>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage and Preparation */}
        <h2 className={styles.floSectionTitle}>How to Use Potato Milk</h2>
        <div className={styles.floUsageSection}>
          <Image
            src="/assets/cooking.png"
            alt="Cooking Icon"
            className={styles.floUsageIcon}
            width={50}
            height={50}
            loading="lazy"
          />
          <p className={styles.floUsageText}>
          Potato milk is a versatile and nutritious plant-based alternative to dairy milk. To use it, simply substitute it in any recipe that calls for milk, such as smoothies, cereals, baked goods, or coffee. It can be enjoyed on its own as a refreshing drink or used as a base for creamy soups, sauces, or mashed potatoes. You can also add it to your favorite tea or coffee for a dairy-free option. Since potato milk has a mild flavor, it blends well with both sweet and savory dishes, making it an easy addition to your daily diet.
          </p>
        </div>

        
      </div>

      {/* Footer Section */}
      <Scroll/>
      <Footer />
    </section>
  );
};

export default PotatoMilk;

