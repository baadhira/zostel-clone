import React, { useState, useEffect } from "react";
import HeaderLargeScreen from "./components/HeaderItems/HeaderLargeScreen";
import HeroSection from "./components/HeroItems/HeroSection";
import ZostelMobileNav from "./components/HeaderItems/ZostelMobileNav";
import ZostelBookingInterface from "./components/HeroItems/ZostelBookingInterface";

function App() {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 750);
  const [isMobileHero, setIsMobileHero] = useState(window.innerWidth < 635);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 750);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
 useEffect(() => {
    const handleResizeHero = () => {
      setIsMobileHero(window.innerWidth < 635);
    };

    window.addEventListener("resize", handleResizeHero);
    return () => window.removeEventListener("resize", handleResizeHero);
  }, []);
  return (
    <>
      {!isMobile && <HeaderLargeScreen />}

      {isMobile && <ZostelMobileNav />}
      {!isMobileHero && <HeroSection />}

      {isMobileHero && <ZostelBookingInterface />}

      <div style={{ height: "2000px" }}></div>
    </>
  );
}

export default App;
