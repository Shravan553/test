import React from 'react';
import styles from './FreshDealsPage.module.css';
import NavbarTYP from '@/app/Navbar/NavbarTYP'; // make sure this path is correct based on your project

const fruits = [
  { name: "Mango", description: "Sweet and juicy, perfect for desserts and drinks.", image: "/assets/mango.png" },
  { name: "Alphonsa", description: "Rich and creamy premium mango variety.", image: "/assets/alph.jpg" },
  { name: "Dasheri", description: "Aromatic and sweet North Indian mango.", image: "/assets/dasheri.jpg" },
  { name: "Kesari", description: "Golden yellow mango with a saffron-like taste.", image: "/assets/kesar.jpg" },
  { name: "Thota (Bangalore)", description: "Popular mango variety in Bengaluru.", image: "/assets/thota.jpg" },
  { name: "Bainisha (Baiganpalli)", description: "Known for its size and sweetness.", image: "/assets/bainisha.jpg" },
  { name: "Natti (All varieties)", description: "Local mangoes in different flavors.", image: "/assets/natti mango.jpg" },
  { name: "Lal Bagh (Rajgere)", description: "From Rajgere, flavorful and juicy.", image: "/assets/Lalbagh.jpg" },
  { name: "Mallika", description: "Hybrid mango with a tangy-sweet flavor.", image: "/assets/mallika.jpg" },
  { name: "Himayat", description: "Also known as Imam Pasand, elite mango.", image: "/assets/hima.jpg" },
];

const BrandNow: React.FC = () => {
  return (
    <>
      <NavbarTYP /> {/* ✅ Navbar at the top */}
      <div className={styles.brandNowPage}>
        <h1 className={styles.title}>🍋 Brand Now – Premium Mango Collection 🥭</h1>
        <p className={styles.subtitle}>Explore our finest selection of mangoes, curated from top regions of India.</p>
        <div className={styles.grid}>
          {fruits.map((fruit, index) => (
            <div key={index} className={styles.card}>
              <img src={fruit.image} alt={fruit.name} className={styles.image} />
              <div className={styles.cardContent}>
                <h2 className={styles.name}>{fruit.name}</h2>
                <p className={styles.description}>{fruit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandNow;
