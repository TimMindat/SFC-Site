import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Brands from './components/Brands';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  const { language } = useLanguage();

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    htmlElement.lang = language;
  }, [language]);

  return (
    <div className="bg-white font-arabic">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Brands />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
