import { useTranslation } from 'react-i18next';

const Schemes = () => {
  const { t } = useTranslation();
  
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('schemes.title', 'Schemes & Services')}
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {t('schemes.subtitle', 'Explore various government schemes and services available for our villagers.')}
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {['central', 'state', 'local'].map((schemeType) => (
            <div key={schemeType} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {t(`schemes.${schemeType}`, schemeType)}
              </h2>
              <p className="text-gray-600">
                {t(`schemes.${schemeType}Description`, `Details about ${t(`schemes.${schemeType}`)} will be displayed here.`)}
              </p>
              <div className="mt-4">
                <button className="text-primary hover:text-primary/80 font-medium">
                  {t('common.viewAll', 'View All')} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
