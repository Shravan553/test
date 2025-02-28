'use client'; // This directive ensures client-side rendering for this component

import Link from "next/link";
import Image from 'next/image';
import styles from './NutritionalFacts.module.css';
import Footer from '../../../Footer/Footer';
import Navbar from '../../../../app/Navbar/NavbarTYP';
import SC from '../../../Scroll/scroll';


// Define the structure of the testimonial and benefits data
interface Testimonial {
  feedback: string;
  position: string;
}

interface Benefit {
  title: string;
  image: string;
  link: string;
}

const testimonials: Testimonial[] = [
  {
    feedback: "Potatoes are a nutrient-dense food that provides essential vitamins and minerals, making them a great addition to a balanced diet.",
    position: "A Nutritional Treasure",
  },
  {
    feedback: "A medium potato contains more potassium than a banana, making it a powerhouse for maintaining proper bodily functions.",
    position: "Nutrient-Rich Delight",
  },
  {
    feedback: "With their diverse preparation methods, potatoes can be enjoyed in countless dishes, making healthy eating delicious and fun!",
    position: "Maintain Diet with Potatoes",
  },
];

const benefitsData: Benefit[] = [
  { title: 'Benefits to Skin', image: '/assets/skin23.jpg', link: '/components/Insight/Nutrition/Nutribenefit/Skin' },
  { title: 'Benefits to the Immune System', image: '/assets/im34.webp', link: '/components/Insight/Nutrition/Nutribenefit/Imune' },
  { title: 'Digestive Health', image: '/assets/di23.webp', link: '/components/Insight/Nutrition/Nutribenefit/Digestive' },
];

const NutritionalFacts = () => {
  return (
    <div className={styles.Container}>
      <Navbar />


      <section className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <Image
            src="/assets/s1.jpg"
            alt="Potato By Products"
            className={styles.heroImage}
            width={1920}
            height={1080}
          />
          <h1 className={styles.heroTitle}><b>Potato </b>Nutritional Facts</h1>
           <button
            className={styles.contactButton}
            onClick={() => (window.location.href = '/components/Contact/')}
          >
            Get in Touch with Us
          </button> 
        </section>

      <br></br>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <h2>&ldquo;Why Potatoes Are a Nutritional Powerhouse&rdquo;</h2>
        <div className={styles.testimonialCards}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialFeedback}>&quot;{testimonial.feedback}&quot;</p>
              <h4 className={styles.testimonialPosition}>{testimonial.position}</h4>
            </div>
          ))}
        </div>
      </section>
       {/* Nutritional Facts Section */}
       <section className={styles.nutripageSection}>
        <div className={styles.nutripageContainer}>
          <h2 className={styles.nutripageTitle}>Potato Health Benefits</h2>
          <p className={styles.nutripageContent}>
            Potatoes are not just delicious but also packed with essential nutrients that support overall health. Here are some of the health benefits:
          </p>
          <div className={styles.nutripageListCard}>
            <ul className={styles.nutripageList}>
              <li>Rich in Vitamin C, which boosts immunity.</li>
              <li>Contains Vitamin B6, promoting brain health.</li>
              <li>High potassium content helps regulate blood pressure.</li>
              <li>Good source of fiber that aids in digestion.</li>
              <li>Provides a balanced source of energy.</li>
              <li>Contributes to a healthy gut and heart.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <h2>Benefits of Potatoes</h2>
        <div className={styles.benefitsContainer}>
          {benefitsData.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <h3 className={styles.colorBenefits}>{benefit.title}</h3>
              <Image 
                src={benefit.image} 
                alt={benefit.title} 
                className={styles.benefitImage} 
                width={300} 
                height={200} 
              />
              <Link href={benefit.link} className={styles.benefitButton}>Click Me</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Nutritional Details Section */}
      <section className={styles.potatoNutritionDetailsSection}>
        <h2 className={styles.nutritionTitle}>Health Benefits of Potatoes: Nutritional Impact on Human Well-being</h2>
        <div className={styles.nutritionContent}>
          <Image 
            src="/assets/nutri1.png" 
            alt="Potato Nutrition" 
            className={styles.nutritionImage} 
            width={500} 
            height={300} 
          />
          <div className={styles.nutritionText}>
            <ul className={styles.nutritionBenefitsList}>
              <li><strong>Rich in Vitamins & Minerals:</strong> Potatoes are packed with vitamins C and B6, supporting immune function and metabolism.</li>
              <br></br>
              <li><strong>High in Dietary Fiber:</strong> Promotes digestive health and helps in weight management.</li>
              <br></br>

              <li><strong>Steady Energy Source:</strong> Complex carbohydrates provide a consistent energy source, ideal for active lifestyles.</li>
              <br></br>

              <li><strong>Antioxidants:</strong> Potatoes help combat oxidative stress, supporting overall health and disease prevention.</li>
              <br></br>

              <li><strong>Gluten-Free:</strong> Naturally gluten-free, suitable for people with gluten sensitivities or celiac disease.</li>
              <br></br>

              <li><strong>Culinary Versatility:</strong> Can be boiled, baked, mashed, or fried, making potatoes a versatile ingredient in many dishes.</li>
              <br></br>

            </ul>
          </div>
        </div>
      </section>
      
      <SC/>
      <Footer />
    </div>
  );
};

export default NutritionalFacts;