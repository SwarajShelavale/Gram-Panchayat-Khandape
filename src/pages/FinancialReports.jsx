import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';

const FinancialReports = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Financial reports list data
  const reports = [
    {
      id: 1,
      title: 'वार्षिक आर्थिक अहवाल 2023-24',
      titleEn: 'Annual Financial Report 2023-24',
      description: 'ग्रामपंचायतीचा वित्त वर्ष 2023-24 चा वार्षिक आर्थिक अहवाल. सर्व आर्थिक कारवाई आणि खर्चाची तपशीलवार माहिती समाविष्ट आहे.',
      descriptionEn: 'Annual financial report of Gram Panchayat for fiscal year 2023-24. Includes detailed information of all financial transactions and expenses.',
      year: '2023-24',
      pdfUrl: '#'
    },
    {
      id: 2,
      title: 'अर्धवार्षिक अहवाल 2024',
      titleEn: 'Half Yearly Report 2024',
      description: 'वित्त वर्ष 2024 चा अर्धवार्षिक आर्थिक अहवाल. पहिल्या सहा महिन्यांच्या आर्थिक अंमलबजावणीची माहिती.',
      descriptionEn: 'Half yearly financial report for fiscal year 2024. Information about financial implementation of first six months.',
      year: '2024',
      pdfUrl: '#'
    },
    {
      id: 3,
      title: 'प्रगती अहवाल 2025',
      titleEn: 'Progress Report 2025',
      description: 'वित्त वर्ष 2025 चा प्रगती अहवाल. चालू वित्त वर्षातील विकासात्मक कामांचा प्रगती अहवाल.',
      descriptionEn: 'Progress report for fiscal year 2025. Progress report of development works in the current fiscal year.',
      year: '2025',
      pdfUrl: '#'
    }
  ];

  const handleDownload = (pdfUrl, _title) => {
    // In a real implementation, this would download the PDF
    // For now, it's a placeholder
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="py-12 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 font-devanagari">
            📊 {currentLang === 'mr' ? 'आर्थिक अहवाल' : 'Financial Reports'}
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            {currentLang === 'mr' 
              ? 'ग्रामपंचायतीचे आर्थिक अहवाल येथे पाहा'
              : 'View Gram Panchayat Financial Reports here'}
          </p>
        </div>
        
        {/* Reports List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div 
              key={report.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-center">📊</div>
              
              {/* Year Badge */}
              <div className="text-center mb-3">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                  {report.year}
                </span>
              </div>
              
              {/* Title */}
              <h3 className={`text-xl font-bold text-gray-800 mb-3 text-center font-devanagari ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
                {currentLang === 'mr' ? report.title : report.titleEn}
              </h3>
              
              {/* Description */}
              <p className={`text-sm text-gray-600 mb-6 text-center font-devanagari ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
                {currentLang === 'mr' ? report.description : report.descriptionEn}
              </p>
              
              {/* Download Button */}
              <button
                onClick={() => handleDownload(report.pdfUrl, report.title)}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span className="font-devanagari">
                  {currentLang === 'mr' ? 'डाउनलोड करा' : 'Download'}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialReports;

