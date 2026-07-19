import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://web.facebook.com/Mr.SalahSalem',
      color: 'hover:bg-blue-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/flashcompanysfc/',
      color: 'hover:bg-pink-600',
    },
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

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl mb-4">
              <MapPin size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.location')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('contact.address')}</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl mb-4">
              <Phone size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.phone')}</h3>
            <a
              href="tel:+201000429409"
              className="text-gray-600 hover:text-red-600 transition-colors duration-300 ltr block"
            >
              010 00429409
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-xl mb-4">
              <Mail size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t('contact.email')}</h3>
            <a
              href="mailto:flashcompany.xerox@gmail.com"
              className="text-gray-600 hover:text-red-600 transition-colors duration-300 ltr block break-all"
            >
              flashcompany.xerox@gmail.com
            </a>
          </div>
        </div>

        {/* Map + CTA row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Google Maps Embed */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
              <MapPin size={18} className="text-red-600" />
              <span className="font-bold text-gray-900">{t('contact.findUs')}</span>
            </div>
            <iframe
              title="SFC Flash Company Location"
              src="https://maps.google.com/maps?q=El+Salam+City+Cairo+Egypt&z=14&output=embed"
              className="w-full h-72 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="px-6 py-3 bg-gray-50">
              <a
                href="https://maps.app.goo.gl/5nsKWK2wCYNxdSbBA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                {t('contact.address')} ↗
              </a>
            </div>
          </div>

          {/* CTA panel */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-10 text-white flex flex-col justify-between">
            <div className="space-y-4 mb-8">
              <h3 className="text-3xl font-bold">{t('contact.heading')}</h3>
              <p className="text-blue-100 leading-relaxed">
                {t('contact.description')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+201000429409"
                  className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all duration-300 text-center"
                >
                  {t('contact.callNow')}
                </a>
                <a
                  href="https://wa.me/201050548116?text=Hello%20S.F.C%20Flash%20Company"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  {t('contact.whatsapp')}
                </a>
                <a
                  href="https://sfcflashcompany.taplink.ws/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-blue-900 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-center"
                >
                  {t('contact.visitWebsite')}
                </a>
              </div>

              <div className="flex items-center gap-4 pt-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center ${link.color} transition-all duration-300 hover:scale-110`}
                      title={link.label}
                    >
                      <Icon size={22} className="text-white" />
                    </a>
                  );
                })}
                <div className="ms-auto">
                  <img src="/QR.png" alt="QR Code" className="w-20 h-20 bg-white p-1.5 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
