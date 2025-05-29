import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HomeAbout.module.css';

const HomeAbout: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.imageContainer}>
        <Image 
          src="/assets/agpotatoabout.jpg"
          alt="AGPotato farming operations"
          width={600}
          height={400}
          className={styles.aboutImage}
          priority
        />
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>About Us</span>
          <h2 className={styles.title}>Bridging the Gap in the Potato Supply Chain</h2>
        </div>
        
        <div className={styles.description}>
          <p>
            <strong>AGPOTATO TRADING PRIVATE LIMITED</strong> is a leading intermediary in the potato trade, 
            connecting trusted growers with businesses through our innovative supply chain solutions.
          </p>
          
          <p>
            With deep agricultural expertise, we ensure seamless distribution of premium potatoes 
            from farm to market while maintaining quality standards.
          </p>
          
          <p>
            Our digital platform <strong>agpotato.com</strong> revolutionizes traditional agriculture, 
            enabling vendors to showcase produce and buyers to access the freshest potatoes.
          </p>
        </div>
        
        <Link href="/components/About/" className={styles.ctaButton}>
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default HomeAbout;