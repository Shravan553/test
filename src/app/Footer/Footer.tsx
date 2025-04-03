"use client";
import { useRef, useState, ChangeEvent, FormEvent } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Head from "next/head";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaYoutube, 
  FaPinterest, 
  FaWhatsapp 
} from "react-icons/fa";

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [result, setResult] = useState<string>("");

  // Validation logic
  const validateForm = (name: string, value: string) => {
    switch (name) {
      case "name":
        return /^[A-Za-z\s]+$/.test(value) ? "" : "Only alphabetic characters are allowed.";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email address.";
      case "phone":
        return /^\d{10}$/.test(value) ? "" : "Please enter a valid 10-digit phone number.";
      case "message":
        return value.trim() === "" ? "Message cannot be empty." : "";
      default:
        return "";
    }
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const errorMessage = validateForm(name, value);
    setError((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Validate all fields before submission
    const newErrors = {
      name: validateForm("name", formData.name),
      email: validateForm("email", formData.email),
      phone: validateForm("phone", formData.phone),
      message: validateForm("message", formData.message),
    };
    
    setError(newErrors);
    
    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some(error => error !== "");
    if (hasErrors) {
      setResult("Please fix the errors in the form.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResult(data.errors || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>AGPotato | Potatoes and Sustainable Farming</title>
        <meta
          name="description"
          content="Contact AGPotato for the best potato products. We specialize in sustainable farming and delivering fresh potatoes. Reach out to us today!"
        />
        <meta
          name="keywords"
          content="potatoes, sustainable farming, fresh potatoes, AGPotato, contact us, potato products, potato farming"
        />
        <meta
          property="og:title"
          content="Contact Us - AGPotato | Potatoes and Sustainable Farming"
        />
        <meta
          property="og:description"
          content="Contact AGPotato for the best potato products. We specialize in sustainable farming and delivering fresh potatoes. Reach out to us today!"
        />
        <meta property="og:image" content="/assets/your-image-url.jpg" />
        <meta property="og:url" content="https://www.agpotato.com/contact" />
      </Head>
      <footer className={styles.footer1}>
        {/* Contact Form */}
        <div className={styles.footerContactForm}>
          <h2>Contact Us</h2>
          <h3>AGPOTATO TRADING PRIVATE LIMITED</h3>
          
          <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {error.name && <span className={styles.error}>{error.name}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {error.email && <span className={styles.error}>{error.email}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {error.phone && <span className={styles.error}>{error.phone}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {error.message && <span className={styles.error}>{error.message}</span>}
            </div>
            
            <button type="submit" className={styles.submitButton}>Submit</button>
            {result && <p className={styles.formResult}>{result}</p>}
          </form>
        </div>
        
        <div className={styles.footerDetails}>
          <div className={styles.footerColumn}>
            <h3>About Us</h3>
            <p>
              We are a market leader in the potato industry, offering sustainable and innovative products.
              Our goal is to bridge the gap between producers and consumers.
            </p>
          </div>
          
          <div className={styles.footerColumn}>
            <h3>Services</h3>
            <ul>
              <li>
                <Link href="/components/BuyandSell/">Buy & Sell</Link>
              </li>
              <li>
                <Link href="/components/AgriBussiness/Frozenproducts/">Our Frozen Products</Link>
              </li>
              <li>
                <Link href="/components/Gallery/">Our Gallery</Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/components/About/">About Us</Link>
              </li>
              <li>
                <Link href="/components/Insight/Faq/">FAQ</Link>
              </li>
              <li>
                <Link href="/components/Contact/">Contact Us</Link>
              </li>
              <li>
                <Link href="/components/Gallery/">Gallery</Link>
              </li>
            </ul>
          </div>
          
          <div className={styles.footerColumn}>
            <h3>Contact Info</h3>
            <p><strong>Email: </strong>support@agpotato.com</p>
            <p><strong>Phone: </strong>+91 9591615099</p>
            <p>
              <strong>Address: </strong> AGPOTATO TRADING PRIVATE LIMITED, 
              World Trade Centre, Unit No 2217, 22nd Floor, 
              Malleshwaram (W), Next Orion Mall, Bangalore, 
              Karnataka 560055, IN
            </p>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/share/1D3YExrYxU/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://x.com/agpotato0" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/agpotato_?igsh=cW40b2Q1ZWpkdjNt" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/106107647/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.youtube.com/@Agpotato" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://in.pinterest.com/agpotato0" target="_blank" rel="noopener noreferrer">
                <FaPinterest />
              </a>
              <a href="https://whatsapp.com/channel/0029VanTtzGEQIaiMwZqvB1T" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} AGPotato. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;