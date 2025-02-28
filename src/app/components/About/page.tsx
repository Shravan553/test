"use client";
import React, { useState, useEffect } from "react";
import styles from "./About.module.css";
import Footer from "../../Footer/Footer"; // Adjust according to your folder structure
import NavbarTYP from "../../Navbar/NavbarTYP"; // Adjust the import as necessary
import Head from "next/head";
import Image from "next/image";
import SC from "../../Scroll/scroll";
import LogoSlider from "../../LogoSlider/LogoSlider";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const About: React.FC = () => {
  const quotes = [
    "Potatoes are the perfect comfort food.",
    "A balanced diet is a potato in each hand.",
    "Life is too short to skip potato day.",
    "Potatoes make everything better.",
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    scrollToTop();
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div>
      <div className={styles.aboutUsContainer}>
        <Head>
          <title>About AGPOTATO - Excellence in Potato Supply Chain</title>
          <meta name="google-site-verification" content="sZBFMd3wcR6-f30Igk3vvcOhCP2LkDaXpKAXGkw25rI" />
          <meta
            name="description"
            content="Discover AGPOTATO, a leader in the potato industry, delivering high-quality products like potato fries, flour, and milk. Trusted since 2014."
          />
          <meta
            name="keywords"
            content="potato, AGPOTATO, potato supply chain, potato industry, potato fries, potato milk, potato products, sustainable agriculture, potato solutions"
          />
          <meta name="author" content="AGPOTATO Team" />
        </Head>

        <NavbarTYP />

        <section className={styles.aboutUsHero}>
          <Image
            src="/assets/bimage1.jpg"
            alt="About AGPOTATO"
            className={styles.aboutUsHeroImg}
            width={1200} // Add width and height for optimization
            height={800}
          />
          <div className={styles.heroOverlay}>
            <h1 className={styles.heroText}>About AGPOTATO</h1>
            <p>Your trusted partner in the potato supply chain.</p>
          </div>
        </section>

        <section className={styles.aboutUsAgpotato}>
          <div className={styles.aboutUsAgpotatoContent}>
            <h2>About Agpotato</h2>
            <p>
              Founded in 2014, <strong> AGPOTATO TRADING PRIVATE LIMITED </strong> embarked on a mission to revolutionize the potato
              industry with an ambitious vision to redefine how the world views this versatile crop. Starting
              with the humble staple potato, we have grown to offer a diverse range of high-quality products,
              including premium potato fries, finely milled potato flour, and even the innovative creation of
              potato milk. Our journey has been fueled by an unwavering commitment to research, sustainability,
              and innovation, allowing us to continually refine our processes and deliver solutions that cater to
              the evolving needs of consumers. Every product under the <strong>AGPOTATO TRADING PRIVATE LIMITED </strong> brand embodies our
              dedication to excellence, offering not just utility but also the promise of quality and ingenuity.
            </p>
          </div>
        </section>

        <section className={styles.missionAgpotato}>
          <div className={styles.column}>
            <div className={styles.missionAgpotatoContent}>
              <h2>Our Mission</h2>
              <p>
                To provide innovative, high-quality potato products that meet the evolving needs of consumers,
                supporting local farmers, and contributing to the growth of the global food industry.
              </p>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.visionAgpotatoContent}>
              <h2>Our Vision</h2>
              <p>
                To become a globally recognized leader in potato export, trading, and byproduct innovation,
                delivering quality and sustainability while empowering communities and driving economic growth.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.coreValues}>
          <div className={styles.coreValuesContainer}>
            <h2 className={styles.sectionHeading}>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Quality Assurance</h3>
                <p>
                  To consistently provide premium-grade potatoes and byproducts that meet international standards.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3>Innovation</h3>
                <p>
                  To leverage advanced technologies to create value-added potato byproducts, catering to diverse
                  industries.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3>Sustainability</h3>
                <p>
                  To practice eco-friendly and sustainable farming, production, and trading methods, ensuring a
                  healthier planet.
                </p>
              </div>
              <div className={styles.valueCard}>
                <h3>Global Expansion</h3>
                <p>
                  To establish strong partnerships and a reliable supply chain across the globe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.marketLeaders}>
          <div className={styles.marketLeadersContent}>
            <div className={styles.textSection}>
              <h2>What We Deliver</h2>
              <p>
                As market leaders in institutional supplies, we specialize in workplace food solutions, serving
                factories, malls, modern retail, general retail, the skincare industry, retail, and wholesalers. Our
                solutions play a vital role in driving the nation&apos;s economic growth by supporting key sectors.
              </p>
              <p>
                At Agpotato, we pride ourselves on being a trusted source for premium potatoes, delivering fresh,
                nutritious produce to our valued customers. With a focus on variety and quality, we handle the entire
                process from sourcing to distribution, ensuring every product meets the highest standards. Our
                dedication to sustainability and healthy living drives our efforts to build a strong, reliable supply
                chain that benefits both consumers and the environment.
              </p>
            </div>
            <div className={styles.imageSection}>
              <Image
                src="/assets/about2.png"
                alt="Agpotato Delivery"
                className={styles.marketLeadersImg}
                width={1200} // Add width and height for optimization
                height={800}
              />
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <h2>Meet Our Leaders</h2>
          <div className={styles.teamContainer}>
            <div className={styles.teamMemberCard}>
              <Image
                src="/assets/CEO.jpeg"
                alt="Anand JP, CEO"
                width={200}
                height={200}
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <h3>Anand JP</h3>
                <h4>CEO</h4>
                <p>
                  Anand JP, serving as the CEO, has been the driving force behind AGPOTATO&apos;s remarkable journey of growth and success. His forward-thinking approach and strategic vision have been pivotal in navigating the company through challenges and seizing new opportunities. 
                </p>
              </div>
            </div>
            <div className={styles.teamMemberCard}>
              <Image
                src="/assets/Director.jpeg"
                alt="Suhsma B, Director"
                width={200}
                height={200}
                className={styles.teamMemberImage}
              />
              <div className={styles.teamMemberInfo}>
                <h3>Suhsma B</h3>
                <h4>Director</h4>
                <p>
                  Suhsma B, serving as the Director, has been the cornerstone of AGPOTATO&apos;s exceptional progress and achievements. Her innovative mindset and strategic expertise have been critical in overcoming challenges and driving the company toward new horizons.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.quoteSlider}>
          <div className={styles.quoteContainer}>
            <blockquote className={styles.blockquote}>
              <span>&quot;</span>
              {quotes[currentQuoteIndex]}
              <span>&quot;</span>
            </blockquote>
          </div>
        </section>

        <section className={styles.mapSection}>
          <h2 className={styles.mapHeading}>Explore Our Reach</h2>
          <div className={styles.mapContainer}>
            <Image
              src="/assets/ytmap.png"
              alt="Our Reach Map"
              width={1200}
              height={600}
              className={styles.mapImage}
            />
          </div>
        </section>

        <center><h2 className={styles.sectionHeading}>Our Clients</h2></center>

        <LogoSlider />

        <SC />
      </div>
      <Footer />

    </div>
  );
};

export default About;
