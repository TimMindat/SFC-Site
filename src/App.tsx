import { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Brands from './components/Brands';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';

function AppContent() {
  const { language } = useLanguage();
  const { currentPage } = useNavigation();

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    htmlElement.lang = language;
  }, [language]);

  return (
    <div className="bg-white">
      <Navbar />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <About />
          <Products />
          <Brands />
          <Services />
          <Contact />
        </>
      ) : (
        <ProductsPage />
      )}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </LanguageProvider>
  );
}

export default App;
