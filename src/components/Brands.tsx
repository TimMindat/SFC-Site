import { useLanguage } from '../context/LanguageContext';

export default function Brands() {
  const { t } = useLanguage();

  const brands = [
    'Xerox',
    'HP',
    'Canon',
    'Ricoh',
    'Toshiba',
    'Kyocera',
    'Konica Minolta',
    'Epson',
    'Triumph Adler',
    'Olivetti'
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('brands.title')}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-100">{t('brands.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg border border-white border-opacity-20 hover:bg-opacity-20 hover:border-red-400 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center justify-center min-h-24"
            >
              <span className="text-white font-bold text-center text-lg ltr">{brand}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-100 text-lg">
            {t('brands.footer')}
          </p>
        </div>
      </div>
    </section>
  );
}
