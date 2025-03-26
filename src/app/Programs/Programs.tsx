import React from "react";
import styles from "./Programs.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

// Define program data types
interface ProgramData {
  src: string;
  title: string;
  description: string;
  link: string;
  alt: string; // New field for alt text
}

const programs: ProgramData[] = [
  {
    src: "/assets/supply.jpg",
    title: "Supply Chain",
    description: "Potatoes move from farms to consumers through harvesting, processing, and distribution.",
    link: "/components/AgriBussiness/Supplychain/",
    alt: "Image showcasing an efficient agricultural supply chain."
  },
  {
    src: "/assets/bypro.jpg",
    title: "Potato By Product",
    description: "Discover innovative uses for potato by-products, reducing waste and adding value.",
    link: "/components/AgriBussiness/Potatobyproduct/",
    alt: "Image of potato by-products being processed."
  },
  {
    src: "/assets/Export2.jpeg",
    title: "Export Excellence",
    description: "Deliver high-quality potatoes to international markets with ease.",
    link: "/components/AgriBussiness/Exportexcellence/",
    alt: "Image of high-quality potatoes prepared for export."
  }, 
  {
    src: "/assets/cold.png",
    title: "Cold Storage",
    description: "Potatoes are stored at 2-4°C with 90-95% humidity to prevent spoilage and sprouting.",
    link: "/components/AgriBussiness/Coldstorage/",
    alt: "Image depicting advanced cold storage facilities for potatoes."
  
  }, 
  
  {
    src: "/assets/flo.jpg",
    title: "Frozen Products",
    description: "Frozen potato products are preserved for a longer shelf life and convenient use.",

    link: "/components/AgriBussiness/Frozenproducts/",
    alt: "Image of frozen potato products ready for distribution."
  },
  {
    src: "/assets/far.jpg",
    title: "Meet the Farmer",
    description: "Meet the potato farmer, dedicated to growing quality crops through hard work and sustainable practices.",

    link: "/components/AgriBussiness/Meetthefarmer/",
    alt: "Image of a farmer in a potato field."
  },
];

const Programs: React.FC = () => {
  return (
    <div className={styles.programs}>  
      <Head>
        <title>Our Programs - AGPotato</title>
        <meta name="description" content="Explore AGPotato's various agricultural programs." />
      </Head>
      {programs.map((program, index) => (
        <div key={index} className={styles.programCard}>
          <h2 className={styles.programTitle}>{program.title}</h2>
          <p className={styles.programDescription}>{program.description}</p>
          <Link href={program.link} passHref>
            <Image
              src={program.src}
              alt={program.alt}
              width={400}
              height={300}
              className={styles.programImage}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Programs;
