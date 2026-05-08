import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:col-span-2 lg:col-span-1 text-center lg:text-right space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero.headline')}
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              {t('hero.subheadline')}
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${language === 'ar' ? 'lg:justify-end' : 'lg:justify-start'} pt-4`}>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 transform hover:-translate-y-1"
              >
                {t('hero.cta1')}
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 border-2 border-white"
              >
                {t('hero.cta2')}
              </button>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1 flex justify-center">
            <img
              src="https://i.ibb.co/9mrGc5tc/image.png"
              alt="Office Equipment"
              className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-red-400" />
      </div>
    </section>
  );
}
