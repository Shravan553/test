'use client';
import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'; // Import WhatsApp and Arrow Up icons

const Scroll: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setShowButton(window.scrollY > 200);
    };

    const handleResize = (): void => {
      setIsMobileView(window.innerWidth <= 768); // Check if the screen width is 768px or less
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check for mobile view
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#04D939',
    color: 'white',
    border: 'none',
    borderRadius: isMobileView ? '50%' : '5px',
    padding: isMobileView ? '0' : '10px 15px',
    width: isMobileView ? '50px' : 'auto',
    height: isMobileView ? '50px' : 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  };

  const whatsappButtonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '90px',
    right: '30px',
    backgroundColor: '#04D939',
    color: 'white',
    border: 'none',
    borderRadius: isMobileView ? '50%' : '5px',
    padding: isMobileView ? '0' : '10px 15px',
    width: isMobileView ? '50px' : 'auto',
    height: isMobileView ? '50px' : 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      {showButton && (
        <>
          {/* Scroll to Top Button */}
          <button
            style={buttonStyle}
            onMouseEnter={(e) =>
              (e.target as HTMLButtonElement).style.backgroundColor = '#03C829'
            }
            onMouseLeave={(e) =>
              (e.target as HTMLButtonElement).style.backgroundColor = '#04D939'
            }
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          >
            {isMobileView ? <FaArrowUp /> : 'Scroll to Top'}
          </button>

          {/* WhatsApp Chat Button */}
          <button
            style={whatsappButtonStyle}
            onMouseEnter={(e) =>
              (e.target as HTMLButtonElement).style.backgroundColor = '#03C829'
            }
            onMouseLeave={(e) =>
              (e.target as HTMLButtonElement).style.backgroundColor = '#04D939'
            }
            onClick={() => {
              window.open('https://wa.me/9591615099', '_blank'); // Replace with your WhatsApp number
            }}
            aria-label="Chat on WhatsApp"
          >
            {isMobileView ? <FaWhatsapp /> : (
              <>
                <FaWhatsapp style={{ marginRight: '8px' }} />
                Need Help? Chat with Us
              </>
            )}
          </button>
        </>
      )}
    </>
  );
};

export default Scroll;
