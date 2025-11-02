import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-primary">404</h1>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {t('notFound.title', 'Page Not Found')}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {t('notFound.message', 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.')}
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <Home className="h-4 w-4 mr-2" />
            {t('notFound.goHome', 'Go to Home')}
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('notFound.goBack', 'Go Back')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
