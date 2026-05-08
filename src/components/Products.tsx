import { Printer, Zap, Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Products() {
  const { language, t } = useLanguage();

  const products = [
    {
      titleKey: 'products.p1',
      descKey: 'products.p1desc',
      icon: Printer,
      color: 'bg-blue-500'
    },
    {
      titleKey: 'products.p2',
      descKey: 'products.p2desc',
      icon: Zap,
      color: 'bg-red-600'
    },
    {
      titleKey: 'products.p3',
      descKey: 'products.p3desc',
      icon: Package,
      color: 'bg-blue-900'
    },
    {
      titleKey: 'products.p4',
      descKey: 'products.p4desc',
      icon: Zap,
      color: 'bg-gray-700'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('products.title')}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">{t('products.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className={`${product.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t(product.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(product.descKey)}</p>
                  <div className={`mt-4 flex items-center gap-2 text-red-600 font-semibold group-hover:gap-4 transition-all duration-300 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span>{t('products.learnMore')}</span>
                    <span>{language === 'ar' ? '←' : '→'}</span>
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
