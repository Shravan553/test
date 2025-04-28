import React from 'react';
import Image from 'next/image'; // ✅ Added
import styles from './FreshDealsPage1.module.css';
import NavbarTYP from '@/app/Navbar/NavbarTYP'; // ✅ Check your path

const vegetables = [
  { name: "Onion", description: "Essential for most dishes.", image: "/assets/on78.jpg" },
  { name: "Sambar Onion", description: "Small-sized onions ideal for sambar.", image: "/assets/samonion.jpg" },
  { name: "Tomato", description: "Adds tangy flavor to meals.", image: "/assets/tom666.jpg" },
  { name: "Tomato Local", description: "Locally grown juicy tomatoes.", image: "/assets/tomloc.jpg" },
  { name: "Tomato Hybrid", description: "High-yield hybrid tomato variety.", image: "/assets/tomhyb.jpg" },
  { name: "Carrot", description: "Crunchy and sweet, great for salads.", image: "/assets/carrot.jpg" },
  { name: "Capsicum", description: "Colorful bell pepper for stir-fries.", image: "/assets/capsicum.jpg" },
  { name: "Cucumber", description: "Cool and refreshing for summer.", image: "/assets/cucumber.jpg" },
  { name: "Beetroot", description: "Great for salads and juices.", image: "/assets/betroot.jpg" },
  { name: "Radish", description: "Adds crunch and spice to salads.", image: "/assets/radish.jpg" },
  { name: "Chilli Green", description: "Adds heat to your dishes.", image: "/assets/greenchil.jpg" },
  { name: "Beans Ring", description: "Tender and tasty, great for curries.", image: "/assets/beanr.jpg" },
  { name: "Broad Beans", description: "Nutritious green pods.", image: "/assets/broad beans.jpg" },
  { name: "Khol Khol", description: "Crunchy and sweet, also called Kohlrabi.", image: "/assets/kho0555.jpg" },
  { name: "Mint", description: "Fresh herb to elevate your dish.", image: "/assets/mint.jpg" },
  { name: "Sweet Potato", description: "Nutty and sweet root veggie.", image: "/assets/sweetpot.jpg" },
  { name: "Sweet Corn", description: "Golden kernels, great for snacks.", image: "/assets/sweetcor.jpg" },
  { name: "Ash Guard", description: "Used in curries and sweets.", image: "/assets/ash.jpg" },
  { name: "Pumpkin Green", description: "Healthy and versatile vegetable.", image: "/assets/pum.jpg" },
  { name: "Baby Potato", description: "Small, tender potatoes perfect for roasting.", image: "/assets/babpot.jpg" },
  { name: "Ginger", description: "Aromatic and spicy root for flavoring.", image: "/assets/ginger.jpg" },
  { name: "Coconut", description: "Used in gravies, chutneys, and sweets.", image: "/assets/coconut.jpg" },
  { name: "White Onion", description: "Mild flavor, great raw or cooked.", image: "/assets/whion.jpg" },
  { name: "Lady Finger", description: "Also called okra, great in curries.", image: "/assets/finger.jpg" },
  { name: "Cluster Beans", description: "Slightly bitter, nutrient-rich pods.", image: "/assets/clube.jpg" },
  { name: "Cabbage", description: "Leafy and crunchy, good for stir-fries.", image: "/assets/cabbage.jpg" },
  { name: "Spring Onion", description: "Mild onion flavor, perfect garnish.", image: "/assets/spring.jpg" },
  { name: "Dilli Leaves", description: "Used in Indian and Middle Eastern cooking.", image: "/assets/dilli.jpg" },
  { name: "Curry Leaves", description: "Essential for South Indian tadkas.", image: "/assets/curry.jpg" },
  { name: "Onion (Nashik)", description: "Popular variety from Nashik.", image: "/assets/nashon.jpg" },
  { name: "Potato (Agra)", description: "Staple Indian potato from Agra.", image: "/assets/agrapot.jpg" },
  { name: "Raw Banana", description: "Starchy and perfect for fry-ups.", image: "/assets/rawbana.webp" },
  { name: "Cauli Flower", description: "Versatile veggie, great in curries.", image: "/assets/flower.jpg" },
  { name: "Bottle Gourd", description: "Cooling and healthy, used in sabzis.", image: "/assets/bogo.jpg" },
  { name: "Broccoli", description: "Rich in fiber and vitamins.", image: "/assets/broc.jpg" },
];

const FreshVeggiesPage: React.FC = () => {
  return (
    <div className={styles.brandNowPage}>
      <NavbarTYP />
      <h1 className={styles.title}>🥕 Fresh Veggies – Farm to Fork 🥦</h1>
      <p className={styles.subtitle}>Your daily dose of nutrition – straight from local farms to your kitchen.</p>
      <div className={styles.grid}>
        {vegetables.map((veg, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={veg.image}
              alt={veg.name}
              className={styles.image}
              width={300} // ✅ Provide width
              height={200} // ✅ Provide height
            />
            <div className={styles.cardContent}>
              <h2 className={styles.name}>{veg.name}</h2>
              <p className={styles.description}>{veg.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreshVeggiesPage;
