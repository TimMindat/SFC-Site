import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { currentPage, navigate } = useNavigation();

  const handleNavClick = (href: string, page?: 'home' | 'products') => {
    setIsOpen(false);
    if (page) {
      navigate(page);
      return;
    }
    if (currentPage !== 'home') {
      navigate('home');
      // Small delay to let the home page render before scrolling
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.products', href: '#products', page: 'products' as const },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <button
            className="flex-shrink-0 flex items-center"
            onClick={() => navigate('home')}
          >
            <img src="/IMG_20260422_192521_463.png" alt="S.F.C Flash Company" className="h-20 md:h-24 w-auto" />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href, link.page)}
                className={`font-semibold transition-colors duration-300 ${
                  currentPage === 'products' && link.page === 'products'
                    ? 'text-red-600'
                    : 'text-gray-800 hover:text-red-600'
                }`}
              >
                {t(link.key)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-all duration-300 font-semibold"
              title={language === 'ar' ? 'Switch to English' : 'Switch to Arabic'}
            >
              <Globe size={20} />
              <span>{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNavClick(link.href, link.page)}
                className="block w-full text-start px-4 py-2 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-all rounded"
              >
                {t(link.key)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
