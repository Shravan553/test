"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";
import NavbarTYP from "../../Navbar/NavbarTYP";
import Footer from "../../Footer/Footer";
import Scroll from "../../Scroll/scroll";

const Gallery: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={styles.galleryBody}>
      <NavbarTYP />
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <Image
          src="/assets/Farmer2.jpeg"
          alt="Gallery Hero Image"
          className={styles.heroImage}
          width={1920}
          height={1080}
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Potato Gallery</h1>
          <p className={styles.heroSubtitle}>Discover the Journey of the Mighty Potato</p>
          <br></br>
          <button
            className={styles.contactButton}
            onClick={() => (window.location.href = '/components/Contact/')}
          >
            Get in Touch with Us
          </button>
        </div>
      </section>

      <div className={styles.gallerySections}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Potato Chronicles in Pictures</h2>
          <p className={styles.sectionDescription}>
            Witness the dedication and innovation of our farmers as they cultivate the finest potatoes, ensuring quality at every step.
          </p>
          <div className={styles.imageGrid}>
            <Image
              className={styles.gridImage}
              src="/assets/Gimage7.jpeg"
              alt="Potato Field"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/Gimage13.jpeg"
              alt="Farmers Harvesting"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/Gimage2.jpeg"
              alt="Freshly Dug Potatoes"
              width={300}
              height={200}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Exported Potato Chronicles</h2>
          <p className={styles.sectionDescription}>
          A tale of global connection, &ldquo;Exported Potato Chronicles&ldquo; highlights the journey of the potato from its humble beginnings to becoming a worldwide staple. 
          </p>
          <div className={styles.imageGrid}>
            <Image
              className={styles.gridImage}
              src="/assets/Gimage12.jpeg"
              alt="Export Ready"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/Gimage8.jpeg"
              alt="Packed for Export"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/Gimage16.jpeg"
              alt="Potato Distribution"
              width={300}
              height={200}
            />
          </div>
        </section>



        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Potato Industry in the Spotlight</h2>
          <p className={styles.sectionDescription}>
          The potato industry takes center stage as it continues to drive innovation, sustainability, and economic growth across the globe.
          </p>
          <div className={styles.imageGrid}>
            <Image
              className={styles.gridImage}
              src="/assets/Gimage4.jpeg"
              alt="Export Ready"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/Gimage6.jpeg"
              alt="Packed for Export"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/Gimage17.jpeg"
              alt="Potato Distribution"
              width={300}
              height={200}
            />
          </div>
        </section>


        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Potato Cold Storage: Preserving Freshness</h2>
          <p className={styles.sectionDescription}>
          Potato cold storage plays a crucial role in maintaining the quality and freshness of potatoes from harvest to market.
          </p>
          <div className={styles.imageGrid}>
            <Image
              className={styles.gridImage}
              src="/assets/gallerycold1.jpg"
              alt="Export Ready"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/gallerycold2.jpeg"
              alt="Packed for Export"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/gallerycold3.jpeg"
              alt="Potato Distribution"
              width={300}
              height={200}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Memorable Moments with Industry Leaders</h2>
          <p className={styles.sectionDescription}>
          Memorable Moments with Industry Leaders captures the essence of impactful conversations and groundbreaking achievements in the world of the potato industry. 
          </p>
          <div className={styles.imageGrid}>
            <Image
              className={styles.gridImage}
              src="/assets/Gimage5.jpeg"
              alt="Export Ready"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/Gimage1.jpeg"
              alt="Packed for Export"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/Gimage3.jpeg"
              alt="Potato Distribution"
              width={300}
              height={200}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Farming Community</h2>

          <p className={styles.sectionDescription}>
          Our Farming Community celebrates the dedication and hard work of farmers who are the backbone of the potato industry. 
          </p>
          <div className={styles.imageGrid}>
            <Image
              className={styles.gridImage}
              src="/assets/Gimage11.jpeg"
              alt="Export Ready"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/Gimage9.jpeg"
              alt="Packed for Export"
              width={300}
              height={200}
            />
            <Image
              className={styles.gridImage}
              src="/assets/Gimage18.jpeg"
              alt="Potato Distribution"
              width={300}
              height={200}
            />
          </div>
        </section>
      </div>
      <Scroll />
      <Footer />
    </div>
  );
};

export default Gallery;



