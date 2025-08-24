 import React, { useState, useEffect, useRef } from "react"; 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

// Components
import { FooterComponent } from './Components/FooterComponent/Footer';
import { HeaderComponent } from './Components/HeaderComponent/Header';
import { MainComponent } from './Components/MainComponent/Main';
import { MainComponentTwo } from './Components/MainComponentTwo/MainTwo';
import { MainComponentThree } from './Components/MainComponentThree/MainThree';
import { NavbarComponent } from './Components/NavbarComponent/Navbar';

// Pages
import { Impressum } from './Pages/Impressum_Page/Impressum';
import { Datenschutz } from './Pages/Datenschutz_Page/Datenschutz';
import { Vorsorge } from './Pages/Vorsorge_Page/Vorsorge';
import { Untersuchung } from './Pages/Untersuchung_Page/Untersuchung';
import { Notfall } from "./Pages/Notfall_Page/Notfall";
import { Kontakt } from "./Pages/Kontakt_Page/Kontakt";

// Scroll to Top
import { ScrollToTop } from './ScrollToTop';


const Spinner = () => (
  <div style={{
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "#F0EEEE",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  }}>
    <div style={{
      width: 60,
      height: 60,
      border: "6px solid #A82834",  
      borderTop: "6px solid transparent",
      borderRadius: "50%",
      animation: "spin 1s linear infinite"
    }} />
  </div>
);

const AppWithContent = ({ headerKey, scrollToFooter }) => (
  <div className="App">
    <div className="page-wrapper">
      <NavbarComponent scrollToFooter={scrollToFooter} />

      <div className="page-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Fade triggerOnce direction="up">
                  <HeaderComponent key={headerKey} />
                </Fade>

                <Fade triggerOnce direction="up" cascade damping={0.5}>
                  <MainComponent />
                </Fade>

                <Fade triggerOnce direction="up" cascade damping={2.0}>
                  <MainComponentTwo />
                </Fade>

                <Fade triggerOnce direction="up" cascade damping={0.5}>
                  <MainComponentThree />
                </Fade>
              </>
            }
          />

          <Route path="/impressum" element={<Fade triggerOnce direction="up"><Impressum /></Fade>} />
          <Route path="/datenschutz" element={<Fade triggerOnce direction="up"><Datenschutz /></Fade>} />
          <Route path="/vorsorge" element={<Fade triggerOnce direction="up"><Vorsorge /></Fade>} />
          <Route path="/untersuchungen" element={<Fade triggerOnce direction="up"><Untersuchung /></Fade>} />
          <Route path="/notfall" element={<Fade triggerOnce direction="up"><Notfall /></Fade>} />
          <Route path="/kontakt" element={<Fade triggerOnce direction="up"><Kontakt /></Fade>} />
        </Routes>
      </div>

      <Fade triggerOnce>
        <FooterComponent ref={scrollToFooter?.footerRef} />
      </Fade>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);
  const [contentKey, setContentKey] = useState(0);

  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const preloadImages = () => {
    return new Promise((resolve) => {
      const images = Array.from(document.images);
      let loadedCount = 0;

      if (images.length === 0) resolve();

      images.forEach((img) => {
        if (img.complete) {
          loadedCount++;
          if (loadedCount === images.length) resolve();
        } else {
          img.onload = img.onerror = () => {
            loadedCount++;
            if (loadedCount === images.length) resolve();
          };
        }
      });
    });
  };

  useEffect(() => {
    const loadApp = async () => {
      await preloadImages();
      setLoading(false);
      setContentKey(prev => prev + 1);
    };
    loadApp();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {loading ? (
        <Spinner />
      ) : (
        <AppWithContent 
          headerKey={contentKey} 
          scrollToFooter={{ scrollToFooter, footerRef }} 
        />
      )}
    </Router>
  );
}

export default App;
