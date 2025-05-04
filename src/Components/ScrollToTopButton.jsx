import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="scroll-to-top-btn">
          <FaArrowUp color="white" />
        </button>
      )}

<style>{`
  .scroll-to-top-btn {
    background: linear-gradient(to top, #00287A, #0040B3);
    box-shadow:
      0 6px 0 #123c7a,             /* base shadow (depth) */
      0 10px 20px rgba(0, 64, 179, 0.3); /* outer blur */
    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    z-index: 1000;
    border: none;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }

  .scroll-to-top-btn:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 0 #0f3d91,
      0 12px 22px rgba(0, 64, 179, 0.35);
  }

  .scroll-to-top-btn:active {
    transform: translateY(4px);
    box-shadow:
      0 2px 0 #0f3d91,
      0 4px 10px rgba(0, 64, 179, 0.2);
  }
`}</style>
    </>
  );
};

export default ScrollToTopButton;
