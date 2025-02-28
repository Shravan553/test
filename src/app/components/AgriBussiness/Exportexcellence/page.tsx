"use client";

import Head from 'next/head';
import React, { useEffect } from 'react';
import Footer from '../../../Footer/Footer';
import Nav from '../../../Navbar/NavbarTYP';
import styles from './Export.module.css';
import Image from 'next/image';
import Link from 'next/link';
import SC from '../../../Scroll/scroll';


const Export: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

 

  return (
    <div>
      <Nav />
      <div className={styles.exportpageWrapper}>
        <Head>
          <title>Export Excellence | AGPotato</title>
          <meta
            name="description"
            content="Discover AGPotato's export excellence, from local production to international markets, delivering high-quality potatoes globally."
          />
          <meta
            name="keywords"
            content="AGPotato, Potato export, Sustainable farming, Global distribution, Netherlands, Export journey"
          />
          <meta name="author" content="AGPotato" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Export Excellence | AGPotato" />
          <meta
            property="og:description"
            content="Learn about AGPotato's export journey, from local growth to global reach. Partnering with farmers and international retailers."
          />
          <meta property="og:image" content="/images/Export1.jpg" />
          <meta property="og:url" content="https://agpotato.com/export" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Export Excellence | AGPotato" />
          <meta
            name="twitter:description"
            content="AGPotato's export journey and success stories in global distribution of high-quality potatoes."
          />
          <meta name="twitter:image" content="/images/Export1.jpg" />
        </Head>

        {/* Header Section with Image */}
        <div className={styles.exportpageHeader}>
        <Image
  src="/assets/Export1.jpg"
  alt="AGPotato export excellence header with vibrant potato field"
  className={styles.exportpageHeaderImage}
  width={1200}  // Add appropriate width
  height={800}  // Add appropriate height
/>

          <h1 className={styles.exportpageHeaderTitle}>Export Excellence</h1>
          <button
            className={styles.contactButton}
            onClick={() => (window.location.href = '/components/Contact/')}
          >
            Get in Touch with Us
          </button>
        </div>


 


       {/* Potatoes Export Section */}
<div className={styles.exportpagePotatoSection}>
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <h2 className={styles.exportpagePotatoTitle}>Potatoes Export</h2>
    </div>
    <div className={styles.cardBody}>
      <p className={styles.exportpagePotatoDescription}>
        Exports have played a pivotal role in AGPotato growth since its inception, 
        delivering a range of potato products across India. Before the pandemic, we aimed 
        to venture into European markets, particularly the Netherlands. With a modern 
        facility and distribution capabilities, AGPotato is poised to make a substantial 
        impact on domestic and international markets.
      </p>
    </div>
  </div>
</div>



        
        



        {/* Success Stories Section
        <div className={styles.exportpageSuccessStoriesSection}>
          <h2 className={styles.exportpageSuccessStoriesTitle}>Success Stories</h2>
          <div className={styles.exportpageSuccessStory}>
            <h3>Farmers' Journey Towards Sustainability</h3>
            <p>
              At AGPotato, we believe that sustainability starts at the grassroots level. Our collaboration with local
              farmers is centered around empowering them with knowledge, resources, and technology to implement
              eco-friendly farming practices. Through our initiatives, farmers are learning to utilize water-efficient
              irrigation systems, organic farming techniques, and waste reduction strategies.
            </p>
            <Link href="/aboutus" className={styles.exportpageReadMore}>
              Read More
            </Link>
          </div>
        </div> */}

        {/* Export Images Gallery Section */}
        
        </div>
<br>
</br>
        <div className={styles.opportunityWrapper}>
      {/* Section Header */}
      <div className={styles.opportunityContent}>
        <h2 className={styles.opportunityTitle}>Fresh Potatoes: A Growing Export Market</h2>
        <p className={styles.opportunityDescription}>
          India, the world <strong>second-largest potato producer</strong>, has become a hub for exporting high-quality potatoes. With an annual production exceeding
          <strong> 50 million tons</strong>, Indian potatoes are in demand for their flavor, quality, and versatility. Countries like <strong>the Netherlands, UAE, Sri Lanka, and Malaysia</strong> present significant opportunities for expansion. 🌍
        </p>
        
        <button
          className={styles.learnMoreButton}
          onClick={() => (window.location.href = "/components/Contact/")}
        >
          Partner with AGPotato Today!
        </button>
      </div>

      {/* Section Images */}
      <div className={styles.opportunityImages}>
        <Image
          src="/assets/Export4.jpeg"
          alt="Fresh Potatoes Ready for Export"
          className={styles.opportunityImage}
          width={600}
          height={400}
        />
        <Image
          src="/assets/Export3.jpeg"
          alt="Indian Farmers Harvesting Potatoes"
          className={styles.opportunityImage}
          width={600}
          height={400}
        />
      </div>
{/* Export Journey Section */}
<section className={styles.testimonialsSection1}>
  <div className={styles.testimonialContainer1}>
    <div className={styles.testimonialImage1}>
      <Image
        src="/assets/extra3.jpg" // Update with the correct image path
        alt="Potato Flour Benefits"
        width={300}
        height={300}
        className={styles.testimonialImg1}
        loading="lazy"
      />
    </div>
    <div className={styles.testimonialContent1}>
      <h3 className={styles.testimonialTitle1}>Our Export Journey</h3>
      <p className={styles.testimonialText1}>
      AGPotato began with a mission to provide fresh, high-quality potato products, building a network of farmers
              and partners committed to sustainable practices and exceptional standards. From local distribution, we
              quickly expanded across India, laying a strong foundation for international growth.     </p>
<Link href="">
  <button className={styles.testimonialButton1}>   Today, our partnerships with European retail chains, including in the Netherlands, mark a major milestone.
              As we continue investing in advanced logistics and product innovation, we look forward to sharing Indias
              best potatoes with customers worldwide.</button>
</Link>
    </div>
  </div>
</section>
      {/* Growth Section */}
      <div className={styles.growthSection}>
        <h3 className={styles.growthTitle}>Strategic Advantages of Indian Potatoes</h3>
        <p className={styles.growthDescription}>
          Indian potatoes are known for their <strong>diverse varieties</strong> and <strong>consistent quality</strong>, making them ideal for various cuisines and industrial applications. AGPotato leverages cutting-edge
          <strong> storage facilities</strong>, <strong>sustainable farming practices</strong>, and a <strong>global distribution network</strong> to meet growing international demand.
        </p>
        <div className={styles.statsBox}>
  <h4 className={styles.statsTitle}>Global Potato Trade Highlights</h4>
  <ul className={styles.statsList}>
    <li>
      <strong>Global Potato Demand:</strong> Over <strong>380 million tons</strong> consumed annually worldwide.
    </li>
    <li>
      <strong>India Share:</strong> Contributes <strong>12%</strong> to global potato production.
    </li>
    <li>
      <strong>Export Milestone:</strong> AGPotato aims to ship <strong>100,000 tons</strong> globally by 2025.
    </li>
    <li>
      <strong>Biggest Consumers:</strong> Europe leads with <strong>25%</strong> of total global imports.
    </li>
    <li>
      <strong>Fresh Potato Preferences:</strong> Over <strong>70%</strong> of imports favor fresh, unprocessed potatoes.
    </li>
  </ul>
</div>

      </div>

      {/* Growth Images */}
      <div className={styles.growthImageGallery}>
        <Image
          src="/assets/Export2.jpeg"
          alt="Lush Potato Field in India"
          className={styles.growthImage}
          width={800}
          height={600}
        />
        <Image
          src="/assets/Farmer2.jpeg"
          alt="Potato Shipment Logistics"
          className={styles.growthImage}
          width={800}
          height={600}
        />
        
      </div>
    </div>
<SC/>
        <Footer />
    </div>
  );
};

export default Export;
