import { ShoppingCart, Wrench, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: 'services.s1',
      descKey: 'services.s1desc',
      icon: ShoppingCart,
      features: ['services.s1f1', 'services.s1f2', 'services.s1f3']
    },
    {
      titleKey: 'services.s2',
      descKey: 'services.s2desc',
      icon: Wrench,
      features: ['services.s2f1', 'services.s2f2', 'services.s2f3']
    },
    {
      titleKey: 'services.s3',
      descKey: 'services.s3desc',
      icon: Truck,
      features: ['services.s3f1', 'services.s3f2', 'services.s3f3']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">{t('services.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-900 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 space-y-6 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t(service.titleKey)}</h3>
                    <p className="text-gray-600 leading-relaxed">{t(service.descKey)}</p>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((featureKey, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">{t(featureKey)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
