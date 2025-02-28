"use client";
import { useRef, useState, ChangeEvent, FormEvent } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Head from "next/head";

import { FaFacebookF,  FaInstagram, FaLinkedin } from "react-icons/fa";

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
  
    // Ensure formRef is defined
    if (formRef.current) {
      // Safely cast elements to specific types
      const nameElement = formRef.current.elements.namedItem("name") as HTMLInputElement | null;
      const emailElement = formRef.current.elements.namedItem("email") as HTMLInputElement | null;
      const phoneElement = formRef.current.elements.namedItem("phone") as HTMLInputElement | null;
      const messageElement = formRef.current.elements.namedItem("message") as HTMLTextAreaElement | null;
  
      const formDataToSend = {
        name: nameElement?.value || formData.name,
        email: emailElement?.value || formData.email,
        phone: phoneElement?.value || formData.phone,
        message: messageElement?.value || formData.message,
      };
  
      // Validate and send the data
      if (!error.name && !error.email && !error.phone && !error.message) {
        try {
          const response = await fetch("/api/contact", {  // Changed to the correct endpoint
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDataToSend),
          });
  
          const data = await response.json();
          setResult(response.ok ? data.message : data.errors || "Failed to send message.");
          if (response.ok) {
            setFormData({ name: "", email: "", phone: "", message: "" });
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          setResult("Something went wrong. Please try again.");
        }
      } else {
        setResult("Please fix the errors in the form.");
      }
    } else {
      setResult("Form is not accessible.");
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
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
            <p className={styles.formResult}>{result}</p>
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
              <strong>Address: </strong> AGPOTATO TRADING PRIVATE LIMITED, World Trade Centre, Unit No 2217, 22nd Floor, Malleshwaram (W), Next Orion Mall, Bangalore, Karnataka
              560055, IN
            </p>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/share/1D3YExrYxU/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a> */}
              <a href="https://www.instagram.com/agpotato_?igsh=cW40b2Q1ZWpkdjNt" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/106107647/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 AGPotato. All rights reserved.</p>
        </div>
      </footer>
       
    </>
  );
};

export default Footer;
