"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Programs.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

interface ProgramData {
  src: string;
  title: string;
  link: string;
  alt: string;
}

const programs: ProgramData[] = [
  {
    src: "/assets/supply.jpg",
    title: "Supply Chain",
    link: "/components/AgriBussiness/Supplychain/",
    alt: "Image showcasing an efficient agricultural supply chain."
  },
  {
    src: "/assets/bypro.jpg",
    title: "Potato By Product",
    link: "/components/AgriBussiness/Potatobyproduct/",
    alt: "Image of potato by-products being processed."
  },
  {
    src: "/assets/expo.jpg",
    title: "Export Excellence",
    link: "/components/AgriBussiness/Exportexcellence/",
    alt: "Image of high-quality potatoes prepared for export."
  },
  {
    src: "/assets/cold.png",
    title: "Cold Storage",
    link: "/components/AgriBussiness/Coldstorage/",
    alt: "Image depicting advanced cold storage facilities for potatoes."
  },
  {
    src: "/assets/f21.png",
    title: "Frozen Products",
    link: "/components/AgriBussiness/Frozenproducts/",
    alt: "Image of frozen potato products ready for distribution."
  },
  {
    src: "/assets/far.jpg",
    title: "Meet the Farmer",
    link: "/components/AgriBussiness/Meetthefarmer/",
    alt: "Image of a farmer in a potato field."
  },
];

const Programs: React.FC = () => {
  const programRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize ref array safely
  useEffect(() => {
    programRefs.current = programs.map((_, i) => programRefs.current[i] ?? null);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animated);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = programRefs.current;
    currentRefs.forEach(ref => ref && observer.observe(ref));

    return () => {
      currentRefs.forEach(ref => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div className={styles.programs}>
      <Head>
        <title>Our Programs - AGPotato</title>
        <meta
          name="description"
          content="Explore AGPotato's agricultural programs including Supply Chain, Potato By Products, and more"
        />
      </Head>
      
      {programs.map((program, index) => (
        <div
          key={index}
          className={styles.program}
          ref={(el) => {
            if (el) programRefs.current[index] = el;
          }}
        >
          <Link href={program.link} passHref legacyBehavior>
            <a className={styles.programLink}>
              <div className={styles.imageWrapper}>
                <Image
                  src={program.src}
                  alt={program.alt}
                  width={300}
                  height={200}
                  className={styles.programImage}
                  priority={index < 3} // Optimize loading for first 3 images
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.caption}>
                <h3 className={styles.programTitle}>{program.title}</h3>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Programs;