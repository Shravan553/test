"use client";

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'; // Importing Image from next/image
import styles from './TypesOfPotatoes.module.css';
import Nav from '../../../Navbar/NavbarTYP';
import Footer from '../../../Footer/Footer';

const potatoImages = [
  { 
    imageUrl: "/assets/2.jpg", 
    title: "Prime 3797", 
    link: "/components/Insight/TypesOfPot/Type/Prime/",
    description: "Great for baking and mashing due to their fluffy texture."
  },
  { 
    imageUrl: "/assets/p2.jpg", 
    title: "Hybrid 302", 
    link: "/components/Insight/TypesOfPot/Type/Hybrid/",
    description: "Small, waxy potatoes perfect for roasting and salads."
  },
  { 
    imageUrl: "/assets/potato-chips.jpg", 
    title: "Chipsona Delight", 
    link: "/components/Insight/TypesOfPot/Type/Chip/",
    description: "Specially grown for making crispy chips!"
  },
  { 
    imageUrl: "/assets/p4.jpg", 
    title: "Classic 2001", 
    link: "/components/Insight/TypesOfPot/Type/Classic/",
    description: "Best for soups and salads due to their firm texture."
  },
  { 
    imageUrl: "/assets/potato-flour.jpg", 
    title: "Mohan Special", 
    link: "/components/Insight/TypesOfPot/Type/Mohan/",
    description: "These are sometimes used for extracting starch."
  },
  { 
    imageUrl: "/assets/p6.jpg", 
    title: "Kyathi Gold", 
    link: "/components/Insight/TypesOfPot/Type/Kyati/",
    description: "Ideal for creamy mashed potatoes and roasted dishes."
  },
  { 
    imageUrl: "/assets/3.jpg", 
    title: "Jyothi Star", 
    link: "/components/Insight/TypesOfPot/Type/Jyoti/",
    description: "Commonly used for making crispy fries."
  },
  { 
    imageUrl: "/assets/p8.jpg", 
    title: "Hasan Best", 
    link: "/components/Insight/TypesOfPot/Type/Hasan/",
    description: "Ideal for making delicious mashed potatoes."
  }
];


const potatoImagesorg = [
  { 
    imageUrl: "/assets/prime.jpg", 
    title: "Prime 3797", 
    link: "/components/Insight/TypesOfPot/Type/Prime/",
    description: "Great for baking and mashing due to their fluffy texture."
  },
  { 
    imageUrl: "/assets/hybrid.jpeg", 
    title: "Hybrid 302", 
    link: "/components/Insight/TypesOfPot/Type/Hybrid/",
    description: "Small, waxy potatoes perfect for roasting and salads."
  },
  { 
    imageUrl: "/assets/Chipsona.jpeg", 
    title: "Chipsona Delight", 
    link: "/components/Insight/TypesOfPot/Type/Chip/",
    description: "Specially grown for making crispy chips!"
  },
  { 
    imageUrl: "/assets/2001.webp", 
    title: "Classic 2001", 
    link: "/components/Insight/TypesOfPot/Type/Classic/",
    description: "Best for soups and salads due to their firm texture."
  },
  { 
    imageUrl: "/assets/Mohan.jpeg", 
    title: "Mohan Special", 
    link: "/components/Insight/TypesOfPot/Type/Mohan/",
    description: "These are sometimes used for extracting starch."
  },
  { 
    imageUrl: "/assets/kyathi.jpeg", 
    title: "Kyathi Gold", 
    link: "/components/Insight/TypesOfPot/Type/Kyati/",
    description: "Ideal for creamy mashed potatoes and roasted dishes."
  },
  { 
    imageUrl: "/assets/jyothi.webp", 
    title: "Jyothi Star", 
    link: "/components/Insight/TypesOfPot/Type/Jyoti/",
    description: "Commonly used for making crispy fries."
  },
  { 
    imageUrl: "/assets/hasan.jpeg", 
    title: "Hasan Best", 
    link: "/components/Insight/TypesOfPot/Type/Hasan/",
    description: "Ideal for making delicious mashed potatoes."
  }
];

const TypesOfPotatoes: React.FC = () => {
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <Head>
          <title>Types of Potatoes| AGPotato</title>
          <meta
            name="description"
            content="Explore a variety of innovative potato by-products crafted with sustainability and creativity by AGPotato."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <Image
            src="/assets/gallery-3.jpg"
            alt="Potato By Products"
            className={styles.heroImage}
            width={1920}
            height={1080}
          />
          <h1 className={styles.heroTitle}><b>Types </b>Of Potatoes</h1>
          
        </section>

        {/* Potato Cards Section */}
        <section className={styles.cardSection}>
          <div className={styles.cardContainer}>
            {potatoImagesorg.map((potato, index) => (
              <div key={index} className={styles.card}>
                <Image
                  src={potato.imageUrl}
                  alt={potato.title}
                  width={300}
                  height={200}
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>{potato.title}</h3>
                <p className={styles.cardDescription}>{potato.description}</p>
                <Link href={potato.link} passHref>
                  <button className={styles.learnMore}>Learn More</button>
                </Link>
              </div>
            ))}
          </div>
        </section>


        {/* New Section with Potato Image and Description */}
        <section className={styles.potatoInfoSection}>
          <div className={styles.potatoInfoCard}>
            <div className={styles.potatoImageContainer}>
              <Image
                src="/assets/d1.webp" // Change this image path as needed
                alt="Potato Image"
                width={200}
                height={200}
                className={styles.potatoImage}
              />
            </div>
            <div className={styles.potatoTextContent}>
              <h2 className={styles.potatoHeading}>How many types of potatoes are there?</h2>
              <p className={styles.potatoDescription}>
                Potatoes come in a wide variety of types, each with unique characteristics and uses.
                Whether you are looking for the perfect potato for baking, mashing, or frying, there is
                a potato variety to meet your needs. Discover the different types of potatoes and how
                each one can elevate your culinary experience.
              </p>
            </div>
          </div>
        </section>

{/* Potato Image Cards Section */}
<section className={styles.cardSection1}>
          {potatoImages.map((potato, index) => (
            <div key={index} className={styles.potatoCard1}>
              <div className={styles.cardInner1}>
                {/* Front Side with Image */}
                <div className={styles.cardFront1}>
                  <Image
                    src={potato.imageUrl}
                    alt={potato.title}
                    width={300}
                    height={300}
                    className={styles.potatoImage1}
                  />
                </div>
                {/* Back Side with Title and Description */}
                <div className={styles.cardBack1}>
                  <h3 className={styles.potatoTitle1}>{potato.title}</h3>
                  <p className={styles.potatoDescription1}>{potato.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
    <section className={styles.potatoFactsSection}>
         <h2>Interesting Facts About Potatoes</h2>
         <div className={styles.factsContainer}>
           <div className={styles.factCard}>
             <h3>Did You Know?</h3>
             <p>Potatoes were the first vegetable grown in space aboard the Space Shuttle Columbia in 1995!</p>
           </div>
           <div className={styles.factCard}>
             <h3>Global Staple</h3>
             <p>Potatoes are the fourth largest food crop in the world, following rice, wheat, and corn.</p>
           </div>
           <div className={styles.factCard}>
             <h3>Potato Festival</h3>
             <p>Peru holds an annual Potato Day to celebrate the thousands of varieties grown there.</p>
           </div>
           <div className={styles.factCard}>
             <h3>Nutritious and Delicious</h3>
             <p>Potatoes are packed with nutrients like vitamin C, potassium, and fiber.</p>
          </div>
         </div>
       </section>
      
      </div>
      <Footer />

    </div>
    
  );
};

export default TypesOfPotatoes;


           



// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Head from "next/head"; // Replace Helmet with Head
// // import Footer from "../Footer/Footer";
// import styles from "./TypesOfPotatoes.module.css"; 
// import Footer from "../../../Footer/Footer";
// import Navbar from "../../../Navbar/NavbarTYP";// Use CSS modules for styling
// import SC from '../../../Scroll/scroll';

// // import Scroll from "";
// // Import potato images from the public directory
// const potatoImages = [
//   { 
//     imageUrl: "/assets/p1.jpg", 
//     title: "Prime 3797", 
//     link: "/components/Insight/TypesOfPot/Type/Prime/",
//     description: "Great for baking and mashing due to their fluffy texture."
//   },
//   { 
//     imageUrl: "/assets/p2.jpg", 
//     title: "Hybrid 302", 
//     link: "/components/Insight/TypesOfPot/Type/Hybrid/",
//     description: "Small, waxy potatoes perfect for roasting and salads."
//   },
//   { 
//     imageUrl: "/assets/p3.jpg", 
//     title: "Chipsona Delight", 
//     link: "/components/Insight/TypesOfPot/Type/Chip/",
//     description: "Specially grown for making crispy chips!"
//   },
//   { 
//     imageUrl: "/assets/p4.jpg", 
//     title: "Classic 2001", 
//     link: "/components/Insight/TypesOfPot/Type/Classic/",
//     description: "Best for soups and salads due to their firm texture."
//   },
//   { 
//     imageUrl: "/assets/p5.jpg", 
//     title: "Mohan Special", 
//     link: "/components/Insight/TypesOfPot/Type/Mohan/",
//     description: "These are sometimes used for extracting starch."
//   },
//   { 
//     imageUrl: "/assets/p6.jpg", 
//     title: "Kyathi Gold", 
//     link: "/components/Insight/TypesOfPot/Type/Kyati/",
//     description: "Ideal for creamy mashed potatoes and roasted dishes."
//   },
//   { 
//     imageUrl: "/assets/p7.jpg", 
//     title: "Jyothi Star", 
//     link: "/components/Insight/TypesOfPot/Type/Jyoti/",
//     description: "Commonly used for making crispy fries."
//   },
//   { 
//     imageUrl: "/assets/p8.jpg", 
//     title: "Hasan Best", 
//     link: "/components/Insight/TypesOfPot/Type/Hasan/",
//     description: "Ideal for making delicious mashed potatoes."
//   }
// ];
// const potatoImagesorg = [
//   { 
//     imageUrl: "/assets/prime.jpg", 
//     title: "Prime 3797", 
//     link: "/components/Insight/TypesOfPot/Type/Prime/",
//     description: "Great for baking and mashing due to their fluffy texture."
//   },
//   { 
//     imageUrl: "/assets/hybrid.jpeg", 
//     title: "Hybrid 302", 
//     link: "/components/Insight/TypesOfPot/Type/Hybrid/",
//     description: "Small, waxy potatoes perfect for roasting and salads."
//   },
//   { 
//     imageUrl: "/assets/Chipsona.jpeg", 
//     title: "Chipsona Delight", 
//     link: "/components/Insight/TypesOfPot/Type/Chip/",
//     description: "Specially grown for making crispy chips!"
//   },
//   { 
//     imageUrl: "/assets/2001.webp", 
//     title: "Classic 2001", 
//     link: "/components/Insight/TypesOfPot/Type/Classic/",
//     description: "Best for soups and salads due to their firm texture."
//   },
//   { 
//     imageUrl: "/assets/Mohan.jpeg", 
//     title: "Mohan Special", 
//     link: "/components/Insight/TypesOfPot/Type/Mohan/",
//     description: "These are sometimes used for extracting starch."
//   },
//   { 
//     imageUrl: "/assets/kyathi.jpeg", 
//     title: "Kyathi Gold", 
//     link: "/components/Insight/TypesOfPot/Type/Kyati/",
//     description: "Ideal for creamy mashed potatoes and roasted dishes."
//   },
//   { 
//     imageUrl: "/assets/jyothi.webp", 
//     title: "Jyothi Star", 
//     link: "/components/Insight/TypesOfPot/Type/Jyoti/",
//     description: "Commonly used for making crispy fries."
//   },
//   { 
//     imageUrl: "/assets/hasan.jpeg", 
//     title: "Hasan Best", 
//     link: "/components/Insight/TypesOfPot/Type/Hasan/",
//     description: "Ideal for making delicious mashed potatoes."
//   }
// ];
// const TypesOfPotatoes: React.FC = () => {
//   return (
//     <div className={styles.potatoSliderContainer}>
//       <Navbar/>
//       {/* Head metadata */}
//       <Head>
//         <title>Types of Potatoes - Discover Potato Varieties</title>
//         <meta name="description" content="Explore various types of potatoes including Russet, Hybrid, Chipsona, and more. Learn about their uses and characteristics." />
//         <meta name="keywords" content="potatoes, types of potatoes, russet potatoes, hybrid potatoes, chipsona, cooking, recipes, potato varieties" />
//         <meta property="og:title" content="Types of Potatoes - Discover Potato Varieties" />
//         <meta property="og:description" content="Explore various types of potatoes including Russet, Hybrid, Chipsona, and more. Learn about their uses and characteristics." />
//         <meta property="og:image" content="/websiteimage3.jpg" />
//         <meta property="og:url" content="https://www.yourwebsite.com/types-of-potatoes" />
//       </Head>
//       {/* Hero Section */}
//       <div className={styles.imageContent1}>
//         <Image
//           src="/assets/bud.jpg"
//           alt="Types of Potatoes"
//           layout="fill"
//           objectFit="cover"
//           className={styles.potatoImage1}
//         />
       

//         <div className={styles.tyHeroOverlay}>

//           <h1 className={styles.headerTitle}>Types of Potatoes</h1>
//         </div>
//       </div>
//       <br></br>
//       <br></br>






//       <section className={styles.potatoTypesSection5}>
//         <div className={styles.potatoTypesContainer5}>
//           <h2 className={styles.potatoTypesHeading5}></h2>
//           <p className={styles.potatoTypesParagraph5}>
            
//           </p>
//         </div>
//       </section>
//       {/* Potato Cards */}
//       <div className={styles.potatoCardsContainer}>
//         {potatoImagesorg.map((potato, index) => (
//           <div key={index} className={styles.potatoCard}>
//             <Image
//               src={potato.imageUrl}
//               alt={potato.title}
//               width={300}
//               height={200}
//               className={styles.potatoCardImage}
//             />
//             <div className={styles.potatoCardInfo}>
//               <h3>{potato.title}</h3>
//               {/* <p>{potato.description}</p> */}
//               <Link href={potato.link} className={styles.knowMoreBtnSt}>
//   Learn More
// </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Additional Content */}
//       <div className={styles.additionalContent}>
//         <div className={styles.centeredSection}>
//           <h2>How Many Types of Potatoes Are There?</h2>
//           <p>
//             There are more than 200 varieties of potatoes sold throughout the United States. Each of these varieties fits into one of seven potato type categories: russet, red, white, yellow, blue/purple, fingerling, and petite.
//           </p>
//         </div>
//         <section className={styles.flippingCardsSection}>
//         <h2>Explore Our Potato Varieties</h2>
//         <div className={styles.flippingCardsContainer}>
//           {potatoImages.slice(0, 8).map((potato, index) => (
//             <div key={index} className={styles.flippingCard}>
//               <div className={styles.cardInner}>
//                 {/* Front Side */}
//                 <div className={styles.cardFront}>
//                 <h3>{potato.title}</h3>
//                 </div>
//                 {/* Back Side */}
//                 <div className={styles.cardBack} style={{ backgroundImage: `url(${potato.imageUrl})` }}>
//                   <div className={styles.cardContent}>
//                     <h3>{potato.title}</h3>
//                     <p>{potato.description}</p>
//                     <Link href={potato.link} className={styles.knowMoreBtnSt}>Learn More</Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//         {/* New Section: Interesting Facts About Potatoes */}
//         <section className={styles.potatoFactsSection}>
//         <h2>Interesting Facts About Potatoes</h2>
//         <div className={styles.factsContainer}>
//           <div className={styles.factCard}>
//             <h3>Did You Know?</h3>
//             <p>Potatoes were the first vegetable grown in space aboard the Space Shuttle Columbia in 1995!</p>
//           </div>
//           <div className={styles.factCard}>
//             <h3>Global Staple</h3>
//             <p>Potatoes are the fourth largest food crop in the world, following rice, wheat, and corn.</p>
//           </div>
//           <div className={styles.factCard}>
//             <h3>Potato Festival</h3>
//             <p>Peru holds an annual Potato Day to celebrate the thousands of varieties grown there.</p>
//           </div>
//           <div className={styles.factCard}>
//             <h3>Nutritious and Delicious</h3>
//             <p>Potatoes are packed with nutrients like vitamin C, potassium, and fiber.</p>
//           </div>
//         </div>
//       </section>
      
//         {/* Potato Varieties Section */}
//         {/* <section className={styles.potatoVarietiesSection1}>
//           {potatoImages.map((potato, index) => (
//             <div key={index} className={styles.potatoVarietyCard1}>
//               <div className={styles.potatoVarietyContent1}>
//                 <div className={styles.potatoVarietyFront1}>
//                   <h3>{potato.title}</h3>
//                 </div>
//                 <div
//                   className={styles.potatoVarietyBack1}
//                   style={{
//                     backgroundImage: `url(${potato.imageUrl})`,
//                   }}
//                 >
//                   <p className={styles.potatoDescription1}>{potato.description}</p>
//                   <Link href={potato.link} className={styles.knowMoreBtn}>
//   Learn More
// </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </section> */}
//       </div>
//       {/* <Scroll /> */}
//       <SC/>
//       <Footer />
//     </div>
//   );
// };
// export default TypesOfPotatoes;