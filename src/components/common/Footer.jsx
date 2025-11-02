import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'schemes', path: '/schemes' },
    { key: 'info', path: '/announcements' },
    { key: 'tenders', path: '/tenders' },
    { key: 'contact', path: '/contact' },
  ];

  const contactInfo = [
    {
      icon: <MapPin size={18} className="text-primary" />,
      text: 'Gram Panchayat Khandpe Office, Village Name, Taluka, District, Maharashtra - 123456'
    },
    {
      icon: <Phone size={18} className="text-primary" />,
      text: '+91 9876543210',
      link: 'tel:+919876543210'
    },
    {
      icon: <Mail size={18} className="text-primary" />,
      text: 'info@grampanchayat.example',
      link: 'mailto:info@grampanchayat.example'
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, url: '#' },
    { icon: <Twitter size={20} />, url: '#' },
    { icon: <Instagram size={20} />, url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              {t('nav.about')}
            </h3>
            <p className="mb-4">
              {t('nav.home')} {t('nav.about')} content goes here. Brief description about the Gram Panchayat and its mission.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.icon.type.displayName}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t('common.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.key}>
                  <Link 
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t('nav.contact')}
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="mt-0.5">{info.icon}</span>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="hover:text-white transition-colors"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span>{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {t('nav.home')}. {t('common.allRightsReserved')}.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              {t('common.privacyPolicy')}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              {t('common.termsOfUse')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
