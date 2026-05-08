import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface Translations {
  [key: string]: {
    ar: string;
    en: string;
  };
}

const translations: Translations = {
  // Navbar
  'nav.home': { ar: 'الرئيسية', en: 'Home' },
  'nav.about': { ar: 'من نحن', en: 'About Us' },
  'nav.products': { ar: 'منتجاتنا', en: 'Products' },
  'nav.services': { ar: 'خدماتنا', en: 'Services' },
  'nav.contact': { ar: 'تواصل معنا', en: 'Contact' },

  // Hero
  'hero.headline': {
    ar: 'أضخم تشكيل من ماكينات الطباعة والتصوير في مصر',
    en: 'The Largest Selection of Printing and Copier Machines in Egypt'
  },
  'hero.subheadline': {
    ar: 'استيراد مباشر من الحاوية إليك.. جودة مضمونة، وأفضل أسعار الجملة والقطاعي لتجهيز الشركات، المكاتب، ومراكز الطباعة.',
    en: 'Direct import from the container to you.. Guaranteed quality, best wholesale and retail prices to equip companies, offices, and printing centers.'
  },
  'hero.cta1': { ar: 'تواصل معنا الآن', en: 'Contact Us Now' },
  'hero.cta2': { ar: 'اكتشف منتجاتنا', en: 'Discover Our Products' },

  // About
  'about.title': { ar: 'من نحن', en: 'About Us' },
  'about.firstHand': { ar: 'أول إيد من المصدر', en: 'First-Hand Importer' },
  'about.firstHandDesc': {
    ar: 'استيراد مباشر بدون وسيط يضمن لك أفضل أسعار السوق',
    en: 'Direct import without intermediaries ensures you get the best market prices'
  },
  'about.directContainer': { ar: 'توصيل مباشر من الحاوية', en: 'Direct Container Delivery' },
  'about.directContainerDesc': {
    ar: 'جودة مضمونة 100% وأسعار الجملة الحقيقية',
    en: 'Guaranteed 100% quality and real wholesale prices'
  },
  'about.fastShipping': { ar: 'موثوقية عالية وشحن سريع', en: 'High Reliability & Fast Shipping' },
  'about.fastShippingDesc': {
    ar: 'توصيل آمن لجميع محافظات مصر بسرعة وأمان',
    en: 'Safe delivery to all Egyptian governorates with speed and security'
  },
  'about.description': {
    ar: 'تأسست شركة إس إف سي فلاش لتكون الشريك الأول والموثوق لاستيراد وتوزيع ماكينات الطباعة والتصوير عالية الجودة في مصر. بخبرة طويلة وشراكات استراتيجية مع أكبر الشركات العالمية، نقدم حلولاً متكاملة للشركات والمكاتب ومراكز الطباعة.',
    en: 'S.F.C Flash Company was established to be the first and most trusted partner for importing and distributing high-quality printing and copier machines in Egypt. With extensive experience and strategic partnerships with major global companies, we provide integrated solutions for companies, offices, and printing centers.'
  },
  'about.additional': {
    ar: 'تميزنا يكمن في تقديمنا للأسعار الأكثر تنافسية مع ضمان الجودة الكاملة، بفضل استيرادنا المباشر من الحاوية دون وسيط.',
    en: 'Our distinction lies in offering the most competitive prices with complete quality assurance, thanks to our direct container imports without intermediaries.'
  },

  // Products
  'products.title': { ar: 'منتجاتنا', en: 'Our Products' },
  'products.subtitle': { ar: 'تشكيل متنوع من أفضل المنتجات العالمية', en: 'A diverse selection of the best global products' },
  'products.p1': { ar: 'ماكينات تصوير وطابعات للخدمة الشاقة', en: 'Heavy-duty Copiers & Printers' },
  'products.p1desc': { ar: 'معدات احترافية عالية الأداء للاستخدام المكثف والموثوق', en: 'Professional high-performance equipment for intensive and reliable use' },
  'products.p2': { ar: 'طابعات هندسية واسعة النطاق بسكانر', en: 'Wide-Format Plotters with Scanners' },
  'products.p2desc': { ar: 'حلول متقدمة للمشاريع الهندسية والتصاميم الكبيرة', en: 'Advanced solutions for engineering projects and large-scale designs' },
  'products.p3': { ar: 'قطع غيار أصلية وأسطوانات طباعة', en: 'Genuine Spare Parts & German-imported Drums' },
  'products.p3desc': { ar: 'قطع وارد ألمانيا أصلية 100% بضمان المصنع', en: 'Original German-imported parts with 100% factory guarantee' },
  'products.p4': { ar: 'أحبار أصلية عالية الجودة', en: 'Original Toners' },
  'products.p4desc': { ar: 'أحبار وتونر أصلية توفر أفضل جودة طباعة', en: 'Original toners and inks providing the best print quality' },
  'products.learnMore': { ar: 'تعرف أكثر', en: 'Learn More' },

  // Brands
  'brands.title': { ar: 'العلامات التجارية الموثوقة', en: 'Trusted Brands' },
  'brands.subtitle': { ar: 'نوفر منتجات من أشهر الشركات العالمية', en: 'We supply products from the world\'s most renowned companies' },
  'brands.footer': {
    ar: 'نحن الموزع الموثوق الأول لهذه العلامات التجارية في مصر',
    en: 'We are the first trusted distributor of these brands in Egypt'
  },

  // Services
  'services.title': { ar: 'خدماتنا', en: 'Our Services' },
  'services.subtitle': { ar: 'نقدم حلولاً متكاملة تلبي جميع احتياجاتك', en: 'We provide integrated solutions meeting all your needs' },
  'services.s1': { ar: 'بيع جملة وقطاعي', en: 'B2B Wholesale & B2C Retail' },
  'services.s1desc': { ar: 'نقدم أسعار مميزة للجملة والتجزئة مع مرونة في الدفع والتوصيل', en: 'We offer special prices for wholesale and retail with flexible payment and delivery options' },
  'services.s1f1': { ar: 'أسعار تنافسية', en: 'Competitive Prices' },
  'services.s1f2': { ar: 'شروط سهلة', en: 'Easy Terms' },
  'services.s1f3': { ar: 'دعم مستمر', en: 'Continuous Support' },
  'services.s2': { ar: 'دعم فني وصيانة متكاملة', en: 'Comprehensive Technical Support & Maintenance' },
  'services.s2desc': { ar: 'فريق متخصص يقدم الدعم الفني والصيانة الدورية للمعدات', en: 'Specialized team providing technical support and regular equipment maintenance' },
  'services.s2f1': { ar: 'صيانة دورية', en: 'Regular Maintenance' },
  'services.s2f2': { ar: 'دعم فني 24/7', en: '24/7 Technical Support' },
  'services.s2f3': { ar: 'قطع غيار أصلية', en: 'Genuine Parts' },
  'services.s3': { ar: 'شحن سريع لجميع المحافظات', en: 'Fast Nationwide Shipping' },
  'services.s3desc': { ar: 'توصيل آمن وسريع لجميع أنحاء مصر مع تأمين كامل', en: 'Safe and fast delivery to all parts of Egypt with full insurance' },
  'services.s3f1': { ar: 'توصيل آمن', en: 'Safe Delivery' },
  'services.s3f2': { ar: 'تتبع فوري', en: 'Real-time Tracking' },
  'services.s3f3': { ar: 'تأمين شامل', en: 'Full Insurance' },

  // Contact
  'contact.title': { ar: 'تواصل معنا', en: 'Contact Us' },
  'contact.subtitle': { ar: 'نحن هنا لخدمتك في أي وقت', en: 'We\'re here to serve you anytime' },
  'contact.location': { ar: 'الموقع', en: 'Location' },
  'contact.phone': { ar: 'الهاتف', en: 'Phone' },
  'contact.email': { ar: 'البريد الإلكتروني', en: 'Email' },
  'contact.cairo': { ar: 'القاهرة، مصر', en: 'Cairo, Egypt' },
  'contact.heading': { ar: 'تواصل معنا الآن', en: 'Contact Us Now' },
  'contact.description': {
    ar: 'هل لديك استفسارات حول منتجاتنا أو خدماتنا؟ تواصل معنا مباشرة واحصل على إجابات فورية من فريقنا المتخصص.',
    en: 'Do you have any questions about our products or services? Contact us directly and get instant answers from our specialized team.'
  },
  'contact.callNow': { ar: 'اتصل بنا الآن', en: 'Call Us Now' },
  'contact.visitWebsite': { ar: 'زيارة الموقع', en: 'Visit Website' },

  // Footer
  'footer.description': {
    ar: 'شريكك الموثوق في استيراد وتوزيع ماكينات الطباعة والتصوير عالية الجودة',
    en: 'Your trusted partner in importing and distributing high-quality printing and copier machines'
  },
  'footer.quickLinks': { ar: 'الروابط السريعة', en: 'Quick Links' },
  'footer.contactInfo': { ar: 'معلومات التواصل', en: 'Contact Information' },
  'footer.hours': { ar: 'ساعات العمل', en: 'Working Hours' },
  'footer.satThu': { ar: 'السبت - الخميس', en: 'Saturday - Thursday' },
  'footer.hours1': { ar: '9:00 ص - 7:00 م', en: '9:00 AM - 7:00 PM' },
  'footer.closed': { ar: 'الجمعة والسبت: مغلق', en: 'Friday & Saturday: Closed' },
  'footer.copyright': {
    ar: 'جميع الحقوق محفوظة © {year} شركة إس إف سي فلاش. كل الحقوق محفوظة.',
    en: 'All Rights Reserved © {year} S.F.C Flash Company. All rights reserved.'
  },
  'footer.privacy': { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
  'footer.terms': { ar: 'الشروط والأحكام', en: 'Terms & Conditions' },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
