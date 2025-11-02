import React from 'react';
import { useTranslation } from 'react-i18next';
import VillageGallery from '../components/gallery/VillageGallery';

const GalleryPage = () => {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery Section with built-in CTA */}
      <VillageGallery />
    </main>
  );
};

export default GalleryPage;
