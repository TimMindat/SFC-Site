import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const { navigate } = useNavigation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <button onClick={() => navigate('home')}>
              <img src="/IMG_20260422_192521_463.png" alt="S.F.C Flash Company" className="h-20 md:h-24 w-auto" />
            </button>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => navigate('home')} className="hover:text-red-600 transition-colors text-start">
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('home')} className="hover:text-red-600 transition-colors text-start">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('products')} className="hover:text-red-600 transition-colors text-start">
                  {t('nav.products')}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('home')} className="hover:text-red-600 transition-colors text-start">
                  {t('nav.services')}
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t('footer.contactInfo')}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                {t('contact.phone')}: <a href="tel:+201000429409" className="hover:text-red-600 ltr">010 00429409</a>
              </li>
              <li>
                {t('contact.email')}:<br />
                <a href="mailto:flashcompany.xerox@gmail.com" className="hover:text-red-600 break-all ltr">
                  flashcompany.xerox@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">{t('contact.address')}</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t('footer.hours')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.satThu')}</li>
              <li>{t('footer.hours1')}</li>
              <li>{t('footer.closed')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>{t('footer.copyright').replace('{year}', currentYear.toString())}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-red-600 transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-red-600 transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
