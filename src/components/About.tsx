import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      titleKey: 'about.firstHand',
      descKey: 'about.firstHandDesc',
      icon: '✈️'
    },
    {
      titleKey: 'about.directContainer',
      descKey: 'about.directContainerDesc',
      icon: '📦'
    },
    {
      titleKey: 'about.fastShipping',
      descKey: 'about.fastShippingDesc',
      icon: '⚡'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <img
              src="https://i.ibb.co/cSwC1tm4/Whats-App-Image-2026-04-22-at-7-06-50-PM.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about.additional')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t(feature.titleKey)}</h3>
              <p className="text-gray-600 leading-relaxed">{t(feature.descKey)}</p>
              <CheckCircle className="text-red-600 mt-4" size={24} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
