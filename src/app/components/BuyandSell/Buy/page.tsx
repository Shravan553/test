'use client';

import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Head from "next/head";
import Nav from "../../../Navbar/NavbarTYP";
import Footer from "../../../Footer/Footer";
import { motion } from "framer-motion";
import styles from "./Buy.module.css";
import Image from "next/image";


const shopTypes: { id: string; label: string; icon: string }[] = [
  { id: "Grocery Store", label: "Grocery Store", icon: "/assets/basket.png" },
  { id: "Supermarket", label: "Supermarket", icon: "/assets/supermarket.png" },
  { id: "restaurant", label: "Restaurant", icon: "/assets/restaurant.png" },
  { id: "Pushcart", label: "Pushcart", icon: "/assets/pushcart.png" },
  { id: "FarmersMarket", label: "FarmersMarket", icon: "/assets/tea.png" },
  { id: "WholeSale", label: "WholeSale", icon: "/assets/wholesale.png" },
  { id: "Baking", label: "Baking", icon: "/assets/baking.png" },
  { id: "Others", label: "Others", icon: "/assets/other.png" },
];


const Buy = () => {
  
  const [potatoName, setPotatoName] = useState<string | undefined>(undefined);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedShopType, setSelectedShopType] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    quantity: "",
    shoptype: "",
    shopname: "",
    adharcard: "",
    adharcardImage: "",
    pancardImage: "",
    pancard: "",
    accountno: "",
    ifsc: "",
    holdername: "",
    message: "",
    potatoName1:potatoName,
  });

  useEffect(() => {
    const fetchUserData = async (email: string) => {
      try {
        const res = await fetch(`/api/getUserDetails?email=${email}`);
        if (res.ok) {
          const data = await res.json();
          setForm((prevForm) => ({
            ...prevForm,
            ...data, // Pre-fill the form with fetched data
          }));
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };
  
    // Get parameters from URL
    const potatoQuery = searchParams.get("potatoName");
    const emailQuery = searchParams.get("userEmail");
  
    if (potatoQuery) {
      setPotatoName(potatoQuery);
    }
  
    if (emailQuery) {
      setForm((prevForm) => ({ ...prevForm, email: emailQuery }));
      fetchUserData(emailQuery); // Fetch user details
    }
  }, [searchParams]);
  

  // In your Buy component, update the handleSubmit function:

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setPending(true);
  setError(null);

  try {
    console.log("Submitting form data:", { ...form, potatoName });

    const res = await fetch("/api/saveUserDetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, potatoName }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Email Sent succesfully.");
      alert(data.message || "Email Sent succesfully");
    } else {
      // Send an email notification
      try {
        const emailRes = await fetch("/api/sendEmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            // Match the field names expected by your API route
            name: form.name,
            email: form.email,
            phone: form.phone,
            address: form.address,
            quantity: form.quantity,
            potatoName: potatoName,
            message: form.message,
            accountno: form.accountno,
            ifsc: form.ifsc,
            holdername: form.holdername,
            shoptype: form.shoptype,
            shopname: form.shopname
          }),
        });

        if (!emailRes.ok) {
          const emailData = await emailRes.json();
          console.error("Email failed:", emailData?.message || "Unknown email error");
        } else {
          console.log("Email sent successfully");
        }
      } catch (emailErr) {
        console.error("Error sending email:", emailErr);
        // Don't block the main flow if email fails
      }

      setShowModal(true); // Show modal on success
    }
  } catch (err) {
    console.error("Error during submission:", err);
    setError("An unexpected error occurred. Please try again.");
    alert("An unexpected error occurred. Please try again.");
  } finally {
    setPending(false);
  }
};
  
  const handleCloseModal = () => {
    setShowModal(false);
    router.push("/"); // Redirect to home page
  };

  return (
    <div className={styles.buyContainer}>
      <Head>
        <title>Buy Potatoes Online | AGPotato</title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        {potatoName ? (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.buyTitle}>Buying: {potatoName}</h2>
            <p className={styles.buyDescription}>
              Please fill out the form to Buy potatoes.
            </p>

            <motion.form
              className={styles.buyForm}
              onSubmit={handleSubmit}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className={styles.formGroup}>
                <label htmlFor="personName">Full Name:</label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  disabled={pending}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              <div className={styles.formGroup}>
  <label htmlFor="email">Email Address:</label>
  <input
    type="email"
    placeholder="Email"
    disabled={pending}
    value={form.email}
    onChange={(e) => setForm({ ...form, email: e.target.value })}
    required
  />
</div>

                 <div className={styles.formGroup}>
                 <label htmlFor="phone">Phone Number:</label>
                  <input type="text"  
                   placeholder="Phone Number"
                   disabled={pending}
                   value={form.phone}
                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
                   required />
                 </div>

                         <div className={styles.formGroup}>
                   <label htmlFor="address">Shipping Address:</label>
                  <input type="text" 
                  placeholder="Shipping Address"
                  disabled={pending}
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  required />
                 </div>

                 <div className={styles.formGroup}>
                    <label htmlFor="pincode">Pincode:</label>
                    <input type="number" 
                    placeholder="Pincode"
                    disabled={pending}
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                     required />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="quantity">Quantity (kg):</label>
                    <input type="number" 
                     placeholder="Quantity"
                     disabled={pending}
                     value={form.quantity}
                     onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                     required />
                  </div>
         
                  <div className={styles.formGroup}>
                    <label>Shop Type:</label>
                    <div className={styles.shopTypeOptions}>
                    {shopTypes.map((type) => (
  <div
    key={type.id}
    className={`${styles.shopTypeOption} ${selectedShopType === type.id ? styles.selected : ''}`}
    onClick={() => {
      setSelectedShopType(type.id);
      setForm({ ...form, shoptype: type.id });
    }}
  >
    <a target="_blank" rel="noopener noreferrer" className={styles.shopTypeLink}>
      <span>{type.label}</span>
      <Image
  src={type.icon}
  alt={type.label}
  className={styles.shopTypeImage}
  width={24}
  height={24}
  priority
/>
     
    </a>
    
  </div>
))}
</div>

                  </div>
                  {/* <div className={styles.formGroup}>
                    <label>Shop Type:</label>
                    <div className={styles.shopTypeOptions}>
                      {shopTypes.map((type) => (
                        <div
                          key={type.id}
                          className={${styles.shopTypeOption} ${selectedShopType === type.id ? styles.selected : ''}}
                          onClick={() => setSelectedShopType(type.id)}
                        >
                          <a target="_blank" rel="noopener noreferrer" className={styles.shopTypeLink}>
                            <span>{type.label}</span>
                            <img
                              src={type.icon}
                              alt={type.label}
                              className={styles.shopTypeImage}
                              width={24}
                              height={24}
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                    {!selectedShopType && <span className={styles.error}>Please select a shop type</span>}
                  </div> */} 
                  <div className={styles.formGroup}>
                    <label htmlFor="shopName">Shop Name:</label>
                    <input type="text" 
                    placeholder="Shop Name"
                    disabled={pending}
                    value={form.shopname}
                    onChange={(e) => setForm({ ...form, shopname: e.target.value })}
                    required />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="adharcard">Adharcard Number:</label>
                    <input type="number" 
                     placeholder="Adharcard Number"
                     disabled={pending}
                     value={form.adharcard}
                     onChange={(e) => setForm({ ...form, adharcard: e.target.value })}
                     required />
                  </div>
{/* 
                  <div className={styles.formGroup}>
  <label htmlFor="adharcardImage">Upload Aadhaar Card Image:</label>
  <input 
    type="file" 
    accept="image/*" 
    onChange={(e) => setForm({ ...form, adharcardImage: e.target.files?.[0] })}
    required 
  />
</div> */}

                  {/* <div className={styles.formGroup}>
      <label htmlFor="adharcardImage">Upload Aadharcard Image:</label>
      <input 
        type="file" 
        accept="image/*" 
                     disabled={pending}
                     value={form.adharcardimage}
                     onChange={(e) => setForm({ ...form, adharcardimage: e.target.value })}
        required 
      />
    </div> */}

    

    <div className={styles.formGroup}>
                    <label htmlFor="pancard">Pancard Number:</label>
                    <input type="text" placeholder="Pancard Number"
                     disabled={pending}
                     value={form.pancard}
                     onChange={(e) => setForm({ ...form, pancard: e.target.value })}
                     required />
                  </div>

                  {/* <div className={styles.formGroup}>
  <label htmlFor="pancardImage">Upload Pan Card Image:</label>
  <input 
    type="file" 
    accept="image/*" 
    onChange={(e) => setForm({ ...form, pancardImage: e.target.files?.[0] })}
    required 
  />
</div> */}

                  {/* <div className={styles.formGroup}>
      <label htmlFor="pancardImage">Upload Pancard Image:</label>
      <input 
        type="file" 
        accept="image/*" 
        disabled={pending}
                     value={form.pancardimage}
                     onChange={(e) => setForm({ ...form, pancardimage: e.target.value })}                     required />

    
    </div> */}

    <div className={styles.formGroup}>
      <label htmlFor="accountNumber">Bank Account Number:</label>
      <input
        type="text"
        
        placeholder="BankAccount Number"
                     disabled={pending}
                     value={form.accountno}
                     onChange={(e) => setForm({ ...form, accountno: e.target.value })}
        required
      />
    </div>


    <div className={styles.formGroup}>
      <label htmlFor="ifsc">IFSC Code:</label>
      <input
        type="text"
       
        placeholder="BankAccount Number"
                     disabled={pending}
                     value={form.ifsc}
                     onChange={(e) => setForm({ ...form, ifsc: e.target.value })}
        required
      />
    </div>
    <div className={styles.formGroup}>
      <label htmlFor="holderName">Account Holder Name:</label>
      <input
        type="text"
        
        
        placeholder="BankAccount HolderName"
                     disabled={pending}
                     value={form.holdername}
                     onChange={(e) => setForm({ ...form, holdername: e.target.value })}
        required
      />
    </div>
    {error && <p className={styles.errorMessage}>{error}</p>}

    <div className={styles.formGroup}>
                    <label htmlFor="message">Additional Message:</label>
                    <textarea id="message"placeholder="Message"
                     disabled={pending}
                     value={form.message}
                     onChange={(e) => setForm({ ...form, message: e.target.value })}/>

                  </div>

                  <button type="submit" className={styles.buyButton}>
                Submit
              </button>
            </motion.form>
          </motion.div>
        ) : (
          <motion.p></motion.p>
        )}
      </Suspense>

      {/* Modal Popup */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Buy request is accepted</h2>
            <button onClick={handleCloseModal} className={styles.okButton}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  return (
    <div>
      <Nav />
      <Suspense fallback={<div>Loading page...</div>}>
        <Buy />
      </Suspense>
      <Footer />
    </div>
  );
}

