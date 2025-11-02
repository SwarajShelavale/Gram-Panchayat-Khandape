import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('about.title', 'About Our Gram Panchayat')}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {t('about.subtitle', 'Learn about our history, vision, and the people who make it all possible.')}
          </p>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.history', 'Our History')}
              </h2>
              <p className="text-gray-600">
                {t('about.historyContent', 'The history of our Gram Panchayat dates back to...')}
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.vision', 'Vision & Mission')}
              </h2>
              <p className="text-gray-600">
                {t('about.visionContent', 'Our vision is to create a self-reliant and prosperous village community...')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
