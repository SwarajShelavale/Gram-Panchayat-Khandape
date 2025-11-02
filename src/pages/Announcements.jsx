import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Announcements = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Information buttons data
  const infoButtons = [
    {
      id: 1,
      label: 'शासन निर्णय',
      labelEn: 'Government Resolutions',
      description: 'शासन निर्णय येथे पाहा',
      descriptionEn: 'View Government Resolutions here',
      icon: '🏛️',
      color: 'bg-blue-500 hover:bg-blue-600',
      href: 'https://gr.maharashtra.gov.in/1145/Government-Resolutions',
      isExternal: true,
      tooltip: 'शासन निर्णय पाहा'
    },
    {
      id: 2,
      label: 'अर्ज',
      labelEn: 'Applications',
      description: 'अर्ज भरण्यासाठी येथे क्लिक करा',
      descriptionEn: 'Click here to apply',
      icon: '📄',
      color: 'bg-green-500 hover:bg-green-600',
      href: '/arj',
      isExternal: false
    },
    {
      id: 3,
      label: 'दाखले',
      labelEn: 'Certificates',
      description: 'दाखले डाउनलोड करण्यासाठी येथे क्लिक करा',
      descriptionEn: 'Click here to download certificates',
      icon: '🎓',
      color: 'bg-orange-500 hover:bg-orange-600',
      href: '/dakhale',
      isExternal: false
    },
    {
      id: 4,
      label: 'आर्थिक अहवाल',
      labelEn: 'Financial Reports',
      description: 'आर्थिक अहवाल येथे पाहा',
      descriptionEn: 'View Financial Reports here',
      icon: '📊',
      color: 'bg-gray-600 hover:bg-gray-700',
      href: '/arthik-ahwal',
      isExternal: false
    }
  ];

  const ButtonComponent = ({ button }) => {
    const buttonContent = (
      <div 
        className={`flex flex-col items-center justify-center p-8 rounded-2xl ${button.color} text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-h-[200px] relative overflow-hidden cursor-pointer`}
        title={button.tooltip || (currentLang === 'mr' ? button.label : button.labelEn)}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </div>
        
        {/* Icon - Emoji */}
        <div className="relative z-10 mb-4 text-5xl md:text-6xl">
          {button.icon}
        </div>
        
        {/* Label */}
        <h3 className={`text-xl md:text-2xl font-bold mb-2 text-center font-devanagari relative z-10 ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
          {currentLang === 'mr' ? button.label : button.labelEn}
        </h3>
        
        {/* Description */}
        <p className={`text-sm md:text-base text-white/90 text-center font-devanagari relative z-10 ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
          {currentLang === 'mr' ? button.description : button.descriptionEn}
        </p>
        
        {/* External link indicator */}
        {button.isExternal && (
          <div className="absolute top-4 right-4 z-10">
            <ExternalLink className="w-5 h-5" />
          </div>
        )}
      </div>
    );

    if (button.isExternal) {
      return (
        <a
          href={button.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <Link to={button.href} className="block w-full">
        {buttonContent}
      </Link>
    );
  };

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-devanagari">
            📢 {currentLang === 'mr' ? 'माहिती आणि घोषणा' : t('announcements.title', 'Information & Announcements')}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600">
            {t('announcements.subtitle', 'Stay updated with the latest news and announcements from the Gram Panchayat.')}
          </p>
        </div>
        
        {/* Information Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infoButtons.map((button) => (
            <ButtonComponent key={button.id} button={button} />
          ))}
        </div>
        
        {/* Announcements Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center font-devanagari">
            {currentLang === 'mr' ? 'नवीन घोषणा' : 'Latest Announcements'}
          </h2>
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="mx-2">•</span>
                  <span>{t('announcements.category', 'General')}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t('announcements.sampleTitle', 'Important Announcement Title')} {item}
                </h3>
                <p className="text-gray-600">
                  {t('announcements.sampleContent', 'This is a sample announcement. The actual content will be replaced with real announcements from the Gram Panchayat.')}
                </p>
                <button className="mt-3 text-primary hover:text-primary/80 text-sm font-medium">
                  {t('common.readMore', 'Read More')} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
