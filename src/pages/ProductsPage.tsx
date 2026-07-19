import { ArrowLeft, ArrowRight, Printer, Droplet, Wrench, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';

const spareParts = [
  {
    model: 'Xerox AltaLink C80xx / WorkCentre 78xx',
    parts: [
      'Power Supply', 'Control Panel', 'Feeder', 'Scanner',
      'Per Tank', 'Drum Unit', 'IBT Belt', 'Mother Board',
      'Controller', 'Laser Led', 'IBT Belt Cleaner', '2nd BTR',
    ],
  },
  {
    model: 'Xerox VersaLink C70xx',
    parts: [
      'Feeder', 'Scanner', 'ESS', 'Mother Board', 'Drum Unit',
      'Per Tank', 'Power Supply', 'Control Panel', 'Laser Led',
      'Left Door', '2nd BTR', 'Fuser Unit', 'IBT Belt Assembly',
    ],
  },
  {
    model: 'Xerox VersaLink B70xx',
    parts: [
      'Feeder', 'Scanner', 'ESS', 'Mother Board', 'Drum Unit',
      'Power Supply', 'Control Panel', 'Laser Led', '2nd BTR', 'Fuser Unit',
    ],
  },
  {
    model: 'Xerox VersaLink C405',
    parts: ['Feeder', 'Scanner', 'Drum Unit', 'Fuser', 'IBT Belt', 'ESS'],
  },
  {
    model: 'Xerox VersaLink C500 / C505 / C605',
    parts: ['Feeder', 'Scanner', 'Drum Unit', 'Fuser', 'IBT Belt'],
  },
  {
    model: 'Xerox AltaLink B80xx',
    parts: ['Drum Unit', 'Fuser Unit', 'Feeder', 'Scanner', 'Power Supply', 'Control Panel'],
  },
  {
    model: 'Xerox AltaLink C81xx',
    parts: ['Drum Unit', 'Dev Tank', 'IBT Belt', 'Fuser', 'Feeder', 'Scanner', 'Control Panel', 'Mother Board', 'ESS'],
  },
];

const printerCategories = [
  {
    titleKey: 'productsPage.office',
    descKey: 'productsPage.office.desc',
    image: 'https://images.pexels.com/photos/18343428/pexels-photo-18343428.jpeg?auto=compress&cs=tinysrgb&w=600',
    brands: ['Xerox', 'Canon', 'HP', 'Epson'],
    color: 'from-blue-600 to-blue-700',
  },
  {
    titleKey: 'productsPage.business',
    descKey: 'productsPage.business.desc',
    image: 'https://images.pexels.com/photos/9574453/pexels-photo-9574453.jpeg?auto=compress&cs=tinysrgb&w=600',
    brands: ['Xerox', 'Ricoh', 'Konica Minolta', 'Kyocera', 'Toshiba'],
    color: 'from-blue-900 to-blue-800',
  },
  {
    titleKey: 'productsPage.color',
    descKey: 'productsPage.color.desc',
    image: 'https://images.pexels.com/photos/7014415/pexels-photo-7014415.jpeg?auto=compress&cs=tinysrgb&w=600',
    brands: ['Xerox', 'Triumph Adler', 'Olivetti', 'HP'],
    color: 'from-red-600 to-red-700',
  },
];

const inkBrands = [
  { name: 'Xerox', types: ['Black Toner', 'Cyan', 'Magenta', 'Yellow'] },
  { name: 'HP', types: ['Black Toner', 'Color Cartridges', 'Wide-Format Ink'] },
  { name: 'Canon', types: ['Black Toner', 'Color Toner', 'Ink Tanks'] },
  { name: 'Ricoh', types: ['Black Toner', 'Color Toner'] },
  { name: 'Kyocera', types: ['Black Toner', 'Color Toner'] },
  { name: 'Epson', types: ['Ink Cartridges', 'Wide-Format Ink'] },
];

function PartsAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div className="space-y-3">
      {spareParts.map((group, idx) => (
        <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-red-50 transition-colors duration-200 text-start"
          >
            <span className="font-bold text-gray-900 text-lg ltr">{group.model}</span>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {group.parts.length} {t('productsPage.available')}
              </span>
              {openIndex === idx
                ? <ChevronUp size={20} className="text-red-600" />
                : <ChevronDown size={20} className="text-gray-400" />}
            </div>
          </button>

          {openIndex === idx && (
            <div className="px-6 pb-6 bg-gray-50 border-t border-gray-100">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-4">
                {group.parts.map((part, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-center text-sm font-medium text-gray-700 hover:border-red-400 hover:text-red-700 transition-all duration-200 ltr"
                  >
                    {part}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  const { language, t } = useLanguage();
  const { navigate } = useNavigation();

  const ArrowIcon = language === 'ar' ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => navigate('home')}
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6 group"
          >
            <ArrowIcon size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>{t('productsPage.backHome')}</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('productsPage.title')}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            {t('productsPage.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* ───── Printers ───── */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-blue-900 flex items-center justify-center flex-shrink-0">
              <Printer size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{t('productsPage.printers')}</h2>
              <p className="text-gray-500">{t('productsPage.printers.sub')}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {printerCategories.map((cat, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={t(cat.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-70`}></div>
                  <h3 className="absolute bottom-4 inset-x-4 text-xl font-bold text-white">
                    {t(cat.titleKey)}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-600 leading-relaxed">{t(cat.descKey)}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.brands.map((brand) => (
                      <span key={brand} className="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-700 rounded-full ltr">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───── Inks & Toners ───── */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
              <Droplet size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{t('productsPage.inks')}</h2>
              <p className="text-gray-500">{t('productsPage.inks.sub')}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 flex flex-col justify-center space-y-4">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t('productsPage.inks.desc')}
                </p>
                <a
                  href="tel:+201000429409"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition-colors duration-200 w-fit"
                >
                  <Phone size={18} />
                  {t('productsPage.contact.cta')}
                </a>
              </div>
              <div className="bg-gray-50 p-8 md:p-10">
                <div className="grid grid-cols-2 gap-4">
                  {inkBrands.map((brand) => (
                    <div key={brand.name} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <p className="font-bold text-gray-900 mb-2 ltr">{brand.name}</p>
                      <ul className="space-y-1">
                        {brand.types.map((type) => (
                          <li key={type} className="text-xs text-gray-500 flex items-center gap-1 ltr">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0"></span>
                            {type}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───── Spare Parts ───── */}
        <section>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
              <Wrench size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{t('productsPage.parts')}</h2>
              <p className="text-gray-500">{t('productsPage.parts.sub')}</p>
            </div>
          </div>

          <p className="text-gray-700 mb-8 text-lg leading-relaxed max-w-3xl">
            {t('productsPage.parts.intro')}
          </p>

          <PartsAccordion />

          {/* CTA */}
          <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{t('productsPage.contact.cta')}</h3>
              <p className="text-blue-200 ltr">flashcompany.xerox@gmail.com</p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <a
                href="tel:+201000429409"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition-colors duration-200"
              >
                <Phone size={18} />
                <span className="ltr">010 00429409</span>
              </a>
              <a
                href="mailto:flashcompany.xerox@gmail.com"
                className="flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-xl font-bold transition-colors duration-200"
              >
                {t('productsPage.requestQuote')}
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
