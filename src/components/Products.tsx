import { Printer, Zap, Package, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';

export default function Products() {
  const { language, t } = useLanguage();
  const { navigate } = useNavigation();

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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <button
                key={index}
                onClick={() => navigate('products')}
                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200 hover:border-red-600 hover:shadow-xl transition-all duration-300 overflow-hidden relative text-start"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className={`${product.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t(product.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(product.descKey)}</p>
                  <div className="mt-4 flex items-center gap-2 text-red-600 font-semibold group-hover:gap-4 transition-all duration-300">
                    <span>{t('products.learnMore')}</span>
                    {language === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('products')}
            className="inline-flex items-center gap-3 px-10 py-4 bg-blue-900 hover:bg-blue-800 text-white rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <span>{t('products.viewAll')}</span>
            {language === 'ar' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </button>
        </div>
      </div>
    </section>
  );
}
