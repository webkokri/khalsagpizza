import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Deals from './pages/Deals.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import FestivePopup from './components/FestivePopup.jsx';

const TITLES = {
  '/': 'Khalsa G Pizza Edmonton | Authentic Desi-Style Fusion Pizza',
  '/menu': 'Menu — Khalsa G Pizza',
  '/deals': 'Deals — Khalsa G Pizza',
  '/about': 'About us — Khalsa G Pizza',
  '/contact': 'Contact us — Khalsa G Pizza',
};

// Scroll to top (or to #hash) on route change, and set the page title.
function RouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = TITLES[pathname] || 'Khalsa G Pizza';
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <RouteEffects />
      <FestivePopup />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
