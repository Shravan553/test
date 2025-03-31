/*
"use client"; // Ensure this is at the top to enable client-side rendering

import Head from "next/head";
import React, { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import styles from "./BuyandSell.module.css"; // Import your CSS module
import NavbarTYP from "../../Navbar/NavbarTYP";
import SC from '../../Scroll/scroll';

const BuyandSell: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string>("Fresh Potatoes"); // Default to Fresh Potatoes

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Potato variants data
  const potatoVariants = [
    { name: "3797", description: "A high-yield variety.", image: "/assets/3797.jpeg" },
    { name: "302 Hybrid", description: "Resistant to diseases.", image: "/assets/302.jpeg" },
    { name: "Chipsona", description: "Popular for its taste.", image: "/assets/chipsona.png" },
    { name: "2001", description: "Ideal for making chips.", image: "/assets/2001.jpeg" },
    { name: "Mohan", description: "Known for its quality.", image: "/assets/mohanpot.jpg" },
    { name: "Kyathi", description: "Excellent cooking variety.", image: "/assets/kyathi.jpeg" },
    { name: "Jyothi", description: "Great for frying.", image: "/assets/jyothi.jpeg" },
    { name: "Hasan Potatoes", description: "Well-suited for various recipes.", image: "/assets/hasan.jpeg" },
  ];

  // Byproducts data
  const byProducts = [
    { name: "Potato Flour", description: "A fine, gluten-free flour perfect for baking and thickening sauces.", image: "/assets/vandc6.jpg" },
    { name: "Potato Milk", description: "A dairy-free, plant-based milk alternative derived from potatoes.", image: "/assets/vandc5.jpg" },
    { name: "Potato Fries", description: "Crispy, golden fries made from fresh potatoes; perfect as a snack or side.", image: "/assets/vandc4.jpg" },
    { name: "Potato Granules", description: "Dehydrated potato granules, great for quick mashed potatoes or thickening soups.", image: "/assets/ingran.png" },
  ];

  // Frozen products data
  const frozenProducts = [
    { name: "Veg Burger Patty", description: "Juicy veg patties, perfect for burgers.", image: "/assets/Vegburger1.jpg" },
    { name: "Crinkle Cut French Fries", description: "Perfectly crispy crinkle-cut fries.", image: "/assets/curf.jpg" },
    { name: "Spicy Wedges", description: "Seasoned, crispy potato wedges.", image: "/assets/sv1.jpeg" },
    { name: "Veggie Finger", description: "Crispy veggie fingers, packed with flavor.", image: "/assets/sv2.jpg" },
    { name: "Hash Brown", description: "Golden, crispy hash browns.", image: "/assets/hash.jpg" },
    { name: "Aloo Tikki", description: "Traditional, spiced aloo tikkis.", image: "/assets/tikka1.png" },
    { name: "Herb Chilli Patty", description: "A flavorful herb and chili patty.", image: "/assets/chilli1.webp" },
    { name: "Chilli Garlic Bites", description: "Spicy bites with a kick of garlic.", image: "/assets/bite1.jpg" },
    { name: "Potato Cheese Shotz", description: "Cheesy goodness in every bite.", image: "/assets/balls1.jpg" },
  ];

  // Other products
  const otherProducts = [
    { name: "Onion", description: "Essential for most dishes.", image: "/assets/Onion.jpg" },
    { name: "Tomato", description: "Adds tangy flavor to meals.", image: "/assets/Tomato.jpg" },
    { name: "Lemon", description: "Great for seasoning and drinks.", image: "/assets/Lemon.jpg" },
    { name: "Ginger", description: "Adds a spicy kick to dishes and drinks.", image: "/assets/ginger.jpg" },
    { name: "Garlic", description: "Perfect for enhancing flavor in any meal.", image: "/assets/garlic.jpg" },
    { name: "Mango", description: "Sweet and juicy, perfect for desserts and drinks.", image: "/assets/mango.png" },
    { name: "Grapes", description: "Great for snacking and making juice.", image: "/assets/grapes.jpg" }
  ];

  const getDisplayItems = () => {
    if (expandedCategory === "Fresh Potatoes") return potatoVariants;
    if (expandedCategory === "Byproducts") return byProducts;
    if (expandedCategory === "Frozen Products") return frozenProducts;
    if (expandedCategory === "Other Products") return otherProducts;
    return [];
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(category);

  };

  const handleNavigate = (path: string, queryParams: { [key: string]: string }) => {
    const search = new URLSearchParams(queryParams).toString();
    const url = `${path}?${search}`;
    window.location.href = url;
  };

  return (
    <div>
      <NavbarTYP />
      <div className={styles.container}>
        <Head>
          <title>Vendor Customer Page</title>
          <meta name="description" content="Browse and purchase fresh potatoes, frozen products, and byproducts." />
          <meta name="keywords" content="potatoes, frozen products, byproducts" />
        </Head>
        <Image 
  src="/assets/buysell2.webp" 
  alt="Marketplace" 
  className={styles.marketimage} 
  layout="responsive" 
  width={1200} 
  height={800} 
/>
        <h1 className={styles.headingpot}>Browse Our Products: Choose What You’d Like to Buy or Sell.</h1>

        <div className={styles.categoryimages}>
          <div onClick={() => toggleCategory("Fresh Potatoes")}>
            <Image src="/assets/302.jpeg" alt="Fresh Potatoes" className={styles.categoryimage} width={300} height={200} />
            <p className={styles.categorytitle}>Fresh Potatoes</p>
          </div>
          <div onClick={() => toggleCategory("Byproducts")}>
            <Image src="/assets/vandc2.jpg" alt="Byproducts" className={styles.categoryimage} width={300} height={200} />
            <p className={styles.categorytitle}>Byproducts</p>
          </div>
          <div onClick={() => toggleCategory("Frozen Products")}>
            <Image src="/assets/vandc3.jpg" alt="Frozen Products" className={styles.categoryimage} width={300} height={200} />
            <p className={styles.categorytitle}>Frozen Products</p>
          </div>
          <div onClick={() => toggleCategory("Other Products")}>
    <Image src="/assets/vandff.jpg" alt="Other Products" className={styles.categoryimage} width={300} height={200} />
    <p className={styles.categorytitle}>Other Products</p>
  </div>
        </div>

        {expandedCategory && (
          <div className={styles.gridcontainer}>
            {getDisplayItems().map((item) => (
              <div className={styles.griditem} key={item.name}>
                <Image src={item.image} alt={item.name} className={styles.productimage} width={200} height={200} />
                <h3 className={styles.productname}>{item.name}</h3>
                <p className={styles.productdescription}>{item.description}</p>
                <div className={styles.productbuttons}>
                  <button onClick={() => handleNavigate("/components/BuyandSell/Buy", { potatoName: item.name })} className={styles.buybutton}>
                    Buy
                  </button>
                  <button onClick={() => handleNavigate("/components/BuyandSell/Sell", { potatoName: item.name })} className={styles.sellbutton}>
                    Sell
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      <SC/>
      <Footer />
    </div>
  );
};

export default BuyandSell;
*/



"use client"; // Ensure this is at the top to enable client-side rendering

import Head from "next/head";
import React, { useState, useEffect } from "react";
import Footer from "../../Footer/Footer";
import Image from "next/image";
import styles from "./BuyandSell.module.css"; // Import your CSS module
import NavbarTYP from "../../Navbar/NavbarTYP";
import SC from '../../Scroll/scroll';

const BuyandSell: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string>("Fresh Potatoes"); // Default to Fresh Potatoes

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Potato variants data
  const potatoVariants = [
    { name: "3797", description: "A high-yield variety.", image: "/assets/3797.jpeg" },
    { name: "302 Hybrid", description: "Resistant to diseases.", image: "/assets/302.jpeg" },
    { name: "Chipsona", description: "Popular for its taste.", image: "/assets/chipsona.png" },
    { name: "2001", description: "Ideal for making chips.", image: "/assets/2001.jpeg" },
    { name: "Mohan", description: "Known for its quality.", image: "/assets/mohanpot.jpg" },
    { name: "Kyathi", description: "Excellent cooking variety.", image: "/assets/kyathi.jpeg" },
    { name: "Jyothi", description: "Great for frying.", image: "/assets/jyothi.jpeg" },
    { name: "Hasan Potatoes", description: "Well-suited for various recipes.", image: "/assets/hasan.jpeg" },
  ];

  // Byproducts data
  const byProducts = [
    { name: "Potato Flour", description: "A fine, gluten-free flour perfect for baking and thickening sauces.", image: "/assets/vandc6.jpg" },
    { name: "Potato Milk", description: "A dairy-free, plant-based milk alternative derived from potatoes.", image: "/assets/vandc5.jpg" },
    { name: "Potato Fries", description: "Crispy, golden fries made from fresh potatoes; perfect as a snack or side.", image: "/assets/vandc4.jpg" },
    { name: "Potato Granules", description: "Dehydrated potato granules, great for quick mashed potatoes or thickening soups.", image: "/assets/ingran.png" },
  ];

  // Frozen products data
  const frozenProducts = [
    { name: "Veg Burger Patty", description: "Juicy veg patties, perfect for burgers.", image: "/assets/Vegburger1.jpg" },
    { name: "Crinkle Cut French Fries", description: "Perfectly crispy crinkle-cut fries.", image: "/assets/curf.jpg" },
    { name: "Spicy Wedges", description: "Seasoned, crispy potato wedges.", image: "/assets/sv1.jpeg" },
    { name: "Veggie Finger", description: "Crispy veggie fingers, packed with flavor.", image: "/assets/sv2.jpg" },
    { name: "Hash Brown", description: "Golden, crispy hash browns.", image: "/assets/hash.jpg" },
    { name: "Aloo Tikki", description: "Traditional, spiced aloo tikkis.", image: "/assets/tikka1.png" },
    { name: "Herb Chilli Patty", description: "A flavorful herb and chili patty.", image: "/assets/chilli1.webp" },
    { name: "Chilli Garlic Bites", description: "Spicy bites with a kick of garlic.", image: "/assets/bite1.jpg" },
    { name: "Potato Cheese Shotz", description: "Cheesy goodness in every bite.", image: "/assets/balls1.jpg" },
  ];

  // Other products
  const otherProducts = [
    { name: "Onion", description: "Essential for most dishes.", image: "/assets/Onion.jpg" },
    { name: "Tomato", description: "Adds tangy flavor to meals.", image: "/assets/Tomato.jpg" },
    { name: "Lemon", description: "Great for seasoning and drinks.", image: "/assets/Lemon.jpg" },
    { name: "Ginger", description: "Adds a spicy kick to dishes and drinks.", image: "/assets/ginger.jpg" },
    { name: "Garlic", description: "Perfect for enhancing flavor in any meal.", image: "/assets/garlic.jpg" },
    { name: "Mango", description: "Sweet and juicy, perfect for desserts and drinks.", image: "/assets/mango.png" },
    { name: "Grapes", description: "Great for snacking and making juice.", image: "/assets/grapes.jpg" }
  ];

  const getDisplayItems = () => {
    if (expandedCategory === "Fresh Potatoes") return potatoVariants;
    if (expandedCategory === "Byproducts") return byProducts;
    if (expandedCategory === "Frozen Products") return frozenProducts;
    if (expandedCategory === "Other Products") return otherProducts;
    return [];
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(category);

  };

  const handleNavigate = (path: string, queryParams: { [key: string]: string }) => {
    const search = new URLSearchParams(queryParams).toString();
    const url = `${path}?${search}`;
    window.location.href = url;
  };

  return (
    <div>
      <NavbarTYP />
      <div className={styles.container}>
        <Head>
          <title>Vendor Customer Page</title>
          <meta name="description" content="Browse and purchase fresh potatoes, frozen products, and byproducts." />
          <meta name="keywords" content="potatoes, frozen products, byproducts" />
        </Head>
        <Image 
  src="/assets/buysell2.webp" 
  alt="Marketplace" 
  className={styles.marketimage} 
  layout="responsive" 
  width={1200} 
  height={800} 
/>
        <h1 className={styles.headingpot}>Browse Our Products: Choose What You’d Like to Buy or Sell.</h1>

        <div className={styles.categoryimages}>
          <div onClick={() => toggleCategory("Fresh Potatoes")}>
            <Image src="/assets/302.jpeg" alt="Fresh Potatoes" className={styles.categoryimage} width={300} height={200} />
            <p className={styles.categorytitle}>Fresh Potatoes</p>
          </div>
          <div onClick={() => toggleCategory("Byproducts")}>
            <Image src="/assets/vandc2.jpg" alt="Byproducts" className={styles.categoryimage} width={300} height={200} />
            <p className={styles.categorytitle}>Byproducts</p>
          </div>
          <div onClick={() => toggleCategory("Frozen Products")}>
            <Image src="/assets/vandc3.jpg" alt="Frozen Products" className={styles.categoryimage} width={300} height={200} />
            <p className={styles.categorytitle}>Frozen Products</p>
          </div>
          <div onClick={() => toggleCategory("Other Products")}>
    <Image src="/assets/vandff.jpg" alt="Other Products" className={styles.categoryimage} width={300} height={200} />
    <p className={styles.categorytitle}>Other Products</p>
  </div>
        </div>

        {expandedCategory === "Other Products" ? (
          <h2 className={styles.comingSoon}>Coming Soon...</h2>
        ) : (
          <div className={styles.gridcontainer}>
            {getDisplayItems().map((item) => (
              <div className={styles.griditem} key={item.name}>
                <Image src={item.image} alt={item.name} className={styles.productimage} width={200} height={200} />
                <h3 className={styles.productname}>{item.name}</h3>
                <p className={styles.productdescription}>{item.description}</p>
                <div className={styles.productbuttons}>
                  <button onClick={() => handleNavigate("/components/BuyandSell/Buy", { potatoName: item.name })} className={styles.buybutton}>
                    Buy
                  </button>
                  <button onClick={() => handleNavigate("/components/BuyandSell/Sell", { potatoName: item.name })} className={styles.sellbutton}>
                    Sell
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
      <SC/>
      <Footer />
    </div>
  );
};

export default BuyandSell;
