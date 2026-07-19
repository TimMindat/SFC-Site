import { ChevronDown, ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';

export default function Hero() {
  const { language, t } = useLanguage();
  const { navigate } = useNavigation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-56 h-56 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('hero.headline')}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              {t('hero.subheadline')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/40 transform hover:-translate-y-1"
              >
                {t('hero.cta1')}
              </button>
              <button
                onClick={() => navigate('products')}
                className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 border-2 border-white"
              >
                {t('hero.cta2')}
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/9mrGc5tc/image.png"
              alt="Office Equipment"
              className="rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Products Catalog Banner */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div
          onClick={() => navigate('products')}
          className="group cursor-pointer rounded-2xl overflow-hidden relative"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-500"></div>
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1200")', backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
          {/* Animated shimmer */}
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Layers size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {t('hero.banner.title')}
                </h3>
                <p className="text-red-100 mt-1 text-sm md:text-base">
                  {t('hero.banner.sub')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white text-red-700 px-6 py-3 rounded-xl font-bold text-lg group-hover:bg-red-50 transition-colors duration-300 flex-shrink-0">
              <span>{t('hero.banner.btn')}</span>
              {language === 'ar' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 flex justify-center">
        <button onClick={() => scrollToSection('about')} className="animate-bounce">
          <ChevronDown size={32} className="text-red-400" />
        </button>
      </div>
    </section>
  );
}
