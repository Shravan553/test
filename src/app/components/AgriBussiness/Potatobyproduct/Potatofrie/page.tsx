
"use client";

import Head from 'next/head';
import React, { useEffect, useMemo } from 'react';
import styles from '../Potatoflour/Potatoflour.module.css';
import Footer from '../../../../Footer/Footer';
import Nav from '../../../../Navbar/NavbarTYP';
import Image from 'next/image';
import Link from 'next/link';
import Scroll from '../../../../Scroll/scroll';

const PotatoFries: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Nutritional data for potato fries
  const nutritionData = useMemo(
    () => [
      { label: "Calories", value: "150 kcal" },
      { label: "Fat", value: "7g" },
      { label: "Carbohydrates", value: "22g" },
      { label: "Sugars", value: "1g" },
      { label: "Protein", value: "2g" },
      { label: "Sodium", value: "180mg" },
      { label: "Potassium", value: "500mg" },
    ],
    []
  );

  return (
    <section>
      <Nav />
      {/* SEO Meta Tags */}
      <Head>
        <title>Potato Fries: Nutrition, Health Benefits & Recipes</title>
        <meta
          name="description"
          content="Learn all about potato fries – from nutritional facts to their health benefits. Explore the perfect crispy fry recipes and more!"
        />
        <meta
          name="keywords"
          content="potato fries, potato fries recipes, healthy fries, potato nutrition, crispy fries, baked fries, vegan fries, low-calorie fries"
        />
        <meta name="author" content="Jestina James" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Content Section */}
      <div>
        <h2 className={styles.floSectionTitle}>What are Potato Fries?</h2>
        <div className={styles.floProductInfo}>
          <Image
            src="/assets/fri2.png"
            alt="Potato Fries"
            className={styles.floProductImage}
            width={600}
            height={400}
            loading="lazy"
          />
          <p className={styles.floProductDescription}>
          <br />
          <br />
          Potato fries are a popular and beloved dish made from potatoes, where the potatoes are sliced into thin strips, wedges, or other shapes, and then cooked, typically by deep-frying, baking, or air-frying. These crispy and golden fries are often seasoned with salt, pepper, and various other spices to enhance their flavor, making them a perfect accompaniment to numerous dishes or a standalone snack. Traditionally deep-fried, potato fries have evolved to include healthier variations such as baked or air-fried options, offering a lower-fat alternative without sacrificing flavor.
     
          <br />
            <br />
         Despite their simplicity, potato fries are a favorite comfort food in many cultures and are often found at fast food restaurants, casual dining eateries, and even at home, where they can be prepared with different cooking techniques and flavorings. Beyond their deliciousness, potato fries also offer nutritional benefits, including being a good source of carbohydrates and potassium, which are essential for energy production and maintaining healthy muscle and heart function.</p>
        </div>
        {/* Creative Section */}
      <div
        style={{
          background: 'linear-gradient(135deg,rgb(88, 119, 76),rgb(190, 249, 176))',
          padding: '60px 20px',
          color: '#fff',
          textAlign: 'center',
          borderRadius: '10px',
          animation: 'fadeIn 2s ease-out',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '20px',
            animation: 'slideIn 1s ease-out',
          }}
        >
          Why Potato Fries Are Loved By All!
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            animation: 'zoomIn 2s ease-out',
          }}
        >
          <Image
            src="/assets/potato-fries.jpg"
            alt="Potato Fries"
            width={500}
            height={350}
            loading="lazy"
            style={{
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              marginBottom: '30px',
            }}
          />
          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              fontWeight: '300',
              maxWidth: '800px',
              margin: '0 auto',
              padding: '0 15px',
              textAlign:'left',
              animation: 'fadeInUp 2s ease-out',
            }}
          >
            Potato fries are not just a snack, they are a universal favorite that transcends cultures and brings people together. Whether you are enjoying crispy golden fries at a fast food joint or making your own at home with a dash of creativity, potato fries have an undeniable charm. Made from fresh potatoes, they are sliced into perfectly seasoned strips, baked or fried to perfection, and served hot with your favorite dips.
          </p>
        </div>
      </div>
        <section className={styles.testimonialsSection}>
          <div className={styles.testimonialContainer}>
            <div className={styles.testimonialImage}>
              <Image
                src="/assets/byproductimage.webp"
                alt="Benefits of Potato Fries"
                width={300}
                height={300}
                className={styles.testimonialImg}
                loading="lazy"
              />
            </div>
            <div className={styles.testimonialContent}>
              <h3 className={styles.testimonialTitle}>Why People Love Potato Byproducts</h3>
              <p className={styles.testimonialText}>
                Potato fries are the perfect combination of crispy and tender. Whether you prefer them deep-fried, baked, or air-fried, they provide a satisfying crunch and are rich in potassium, an essential nutrient for maintaining healthy blood pressure. When made from fresh potatoes and seasoned with your favorite spices, fries are an indulgence that can also contribute to a balanced diet. They are not only delicious but also an easy and versatile food to prepare for family gatherings or casual meals.
              </p>
              <Link href="/components/AgriBussiness/Potatobyproduct/">
                <button className={styles.testimonialButton}>Know More About Potato Products</button>
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
          <h2 className={styles.floSectionTitle}>Health Benefits of Potato Fries</h2>
          <div className={styles.floBenefitsContainer}>
            {[ 
              { text: 'A great source of potassium, supporting heart and muscle function', icon: '💪' },
              { text: 'Provides a good amount of fiber for digestive health', icon: '🍞' },
              { text: 'Rich in antioxidants that protect against oxidative stress', icon: '🛡️' },
              { text: 'Can be part of a balanced diet when baked or air-fried', icon: '🔥' },
              { text: 'Helps boost energy levels with its natural carbohydrates', icon: '⚡' },
              { text: 'Naturally gluten-free and vegan-friendly', icon: '🌱' },
            ].map((benefit, index) => (
              <div className={styles.floBenefitCard} key={index}>
                <div className={styles.floBenefitIcon}>{benefit.icon}</div>
                <p className={styles.floBenefitText}>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage and Preparation */}
        <h2 className={styles.floSectionTitle}>How to Make Perfect Potato Fries</h2>
        <div className={styles.floUsageSection}>
          <Image
            src="/assets/cooking.png"
            alt="Frying Icon"
            className={styles.floUsageIcon}
            width={50}
            height={50}
            loading="lazy"
          />
          <p className={styles.floUsageText}>
            Making crispy and delicious potato fries is easy! Start by cutting potatoes into evenly sized strips or wedges. For healthier options, bake or air fry the fries after tossing them with olive oil and your favorite seasonings. If you prefer the classic deep-fried version, heat oil to 350°F and fry until golden brown. Serve with your favorite dips like ketchup, mayonnaise, or a tangy aioli. Whether baked or fried, potato fries are sure to be a hit with everyone!
          </p>
        </div>

      </div>

      

      {/* Footer Section */}
      <Scroll />
      <Footer />
    </section>
  );
};

export default PotatoFries;







// "use client";

// import React, { useEffect, useMemo } from "react";
// import Head from "next/head";
// import Footer from "../../../../Footer/Footer";
// import Nav from "../../../../Navbar/NavbarTYP";
// import styles from "./Potatofrie.module.css";
// import Image from "next/image"; // Import Image from next/image
// import Link from 'next/link';
// import Scroll from '../../../../Scroll/scroll';



// const Fri: React.FC = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to top when component mounts
//   }, []);

//   // Nutritional data and benefits memoization
//   const nutritionalData = useMemo(
//     () => [
//       { name: "Calories", value: "196 kcal" },
//       { name: "Fat", value: "13.1g" },
//       { name: "Sodium", value: "141mg" },
//       { name: "Carbohydrates", value: "18.5g" },
//       { name: "Fiber", value: "1.6g" },
//       { name: "Sugars", value: "1.3g" },
//       { name: "Protein", value: "1.9g" },
//       { name: "Vitamin C", value: "9.7mg" },
//     ],
//     []
//   );

//   const friesBenefits = useMemo(
//     () => [
//       { text: "May support healthy immune function" },
//       { text: "May improve early brain development" },
//       { text: "May reduce oxidative stress" },
//       { text: "May promote weight maintenance" },
//       { text: "Low-cost source of nutrients" },
//     ],
//     []
//   );

//   const friesVarieties = useMemo(
//     () => [
//       {
//         name: "Frozen French Fries",
//         info: "224 calories, 15g fat, 295mg sodium",
//       },
//       {
//         name: "McDonald's French Fries",
//         info: "323 calories, 15.5g fat, 189mg sodium",
//       },
//       {
//         name: "Burger King French Fries",
//         info: "280 calories, 12.5g fat, 279mg sodium",
//       },
//       {
//         name: "Restaurant French Fries",
//         info: "289 calories, 14g fat, 357mg sodium",
//       },
//     ],
//     []
//   );

//   return (
//     <section>
//       <Nav />
//       {/* SEO Meta Tags */}
//       <Head>
//         <title>French Fries: Nutrition Facts, Benefits & Preparation Tips</title>
//         <meta
//           name="description"
//           content="Explore the nutritional value, health benefits, varieties, and preparation methods of French fries. Learn how to make healthier versions at home!"
//         />
//         <meta
//           name="keywords"
//           content="French fries nutrition, health benefits of fries, French fries varieties, homemade French fries, low-fat fries recipe, French fries calories, fries for brain development, fries and immune health, baked fries preparation, air-fried French fries"
//         />
//       </Head>

//       {/* French Fries Nutrition Facts Section */}
//       <div>
//         <br />
//         <br />
//         <h1 className={styles.friesTitle}>French Fries Nutrition Facts</h1>
//         <div className={styles.friesImageInfo}>
//           <Image
//             src="/assets/fri2.png"
//             alt="French Fries"
//             className={styles.friesImage}
//             width={600}
//             height={400}
//             loading="lazy"
//           />
//           <div className={styles.friesTextContainer}>
//             <p className={styles.friesText}>
//               <br />
//               <br />
//               French fries are a beloved side dish enjoyed worldwide, from fast-food restaurants to home kitchens. Made from potatoes, they are crispy, delicious, and versatile. However, their nutritional profile depends on how they are prepared.
//             </p>
//             <p className={styles.friesText}>
//               While fresh potatoes are a low-calorie, nutrient-rich food, French fries can be high in fat, calories, and sodium due to frying. To enjoy fries as part of a healthy diet, opt for oven-baked or air-fried alternatives with less oil.
//             </p>
//           </div>
//         </div>

//         <h2 className={styles.friesSubtitle}>
//           Nutritional Information (Per 100g Serving)
//         </h2>
//         <div className={styles.friesNutritionInfo}>
//           {nutritionalData.map((item, index) => (
//             <div className={styles.friesNutrient} key={index}>
//               <p>
//                 <strong>{item.name}:</strong> {item.value}
//               </p>
//             </div>
//           ))}
//         </div>

//         <h2 className={styles.friesSubtitle}>Varieties of French Fries</h2>
//         <ul className={styles.friesBenefitsList}>
//           {friesVarieties.map((variety, index) => (
//             <li key={index}>
//               <strong>{variety.name}:</strong> {variety.info}
//             </li>
//           ))}
//         </ul>

//         <section className={styles.testimonialsSection}>
//   <div className={styles.testimonialContainer}>
//     <div className={styles.testimonialImage}>
//       <Image
//         src="/assets/byproductimage.webp" // Update with the correct image path
//         alt="Potato Flour Benefits"
//         width={300}
//         height={300}
//         className={styles.testimonialImg}
//         loading="lazy"
//       />
//     </div>
//     <div className={styles.testimonialContent}>
//       <h3 className={styles.testimonialTitle}>Why People Love Potato By-Products</h3>
//       <p className={styles.testimonialText}>
// POTATO BY PRODUCTS , like potato flour, have revolutionized my baking. It gives gluten-free breads and cakes a great texture and is packed with fiber and potassium. Potato starch is perfect for thickening, and potato protein is a great addition to plant-based products. These by-products are not only nutritious but also eco-friendly, reducing food waste while enhancing meals.     </p>
// <Link href="/components/AgriBussiness/Potatobyproduct/">
//   <button className={styles.testimonialButton}>Know More About Potato By-Products</button>
// </Link>
//     </div>
//   </div>
// </section>

//         <h2 className={styles.friesSubtitle}>Health Benefits of Fries</h2>
//         <ul className={styles.friesBenefitsList}>
//           {friesBenefits.map((benefit, index) => (
//             <li key={index}>{benefit.text}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Footer Section */}
//       <Scroll/>
//       <Footer />
//     </section>
//   );
// };

// export default Fri;
