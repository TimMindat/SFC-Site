import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      labelKey: 'contact.location',
      valueKey: 'contact.cairo'
    },
    {
      icon: Phone,
      labelKey: 'contact.phone',
      value: '010 00429409',
      href: 'tel:+201000429409'
    },
    {
      icon: Mail,
      labelKey: 'contact.email',
      value: 'flashcompany.xerox@gmail.com',
      href: 'mailto:flashcompany.xerox@gmail.com'
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://web.facebook.com/Mr.SalahSalem',
      color: 'hover:bg-blue-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/flashcompanysfc/',
      color: 'hover:bg-pink-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{t(info.labelKey)}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-300 ltr"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{t(info.valueKey)}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-12 text-white">
          <div className={`grid md:grid-cols-2 gap-12 items-center ${language === 'en' ? 'md:flex-row-reverse' : ''}`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{t('contact.heading')}</h3>
              <p className="text-lg text-gray-100 leading-relaxed">
                {t('contact.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+201000429409"
                  className="px-8 py-4 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all duration-300 text-center"
                >
                  {t('contact.callNow')}
                </a>
                <a
                  href="https://sfcflashcompany.taplink.ws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 text-center"
                >
                  {t('contact.visitWebsite')}
                </a>
              </div>

              <div className="flex gap-4 pt-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 ${link.color} transition-all duration-300 hover:scale-110`}
                      title={link.label}
                    >
                      <Icon size={24} className="text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/QR.png"
                alt="QR Code"
                className="w-64 h-64 p-4 bg-white rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
