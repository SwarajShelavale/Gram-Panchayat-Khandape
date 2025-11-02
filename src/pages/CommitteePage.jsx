import React from 'react';
import { useTranslation } from 'react-i18next';
import WorkingCommittee from '../components/working-committee/WorkingCommittee';
import { sarpanchData } from '../data/sarpanchData';

const CommitteePage = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('committee.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('committee.subtitle')}
          </p>
        </div>

        {/* Sarpanch's Message */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {currentLang === 'mr' ? 'सरपंचांचा संदेश' : 'Message from Sarpanch'}
          </h3>
          <p className="text-gray-600 mb-4">
            {sarpanchData.message[currentLang] || sarpanchData.message.en}
          </p>
          <div className="text-right">
            <p className="font-medium text-primary">
              - {currentLang === 'mr' ? sarpanchData.marathiName : sarpanchData.name}
            </p>
            <p className="text-sm text-gray-500">
              {currentLang === 'mr' ? sarpanchData.designationMr : t(`committee.designations.${sarpanchData.designation}`)}
            </p>
          </div>
        </div>

        {/* Working Committee Component */}
        <WorkingCommittee />
      </div>
    </main>
  );
};

export default CommitteePage;
