import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';

const Applications = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Applications list data
  const applications = [
    {
      id: 1,
      title: 'जन्म दाखला अर्ज',
      titleEn: 'Birth Certificate Application',
      description: 'जन्म दाखला मिळविण्यासाठी या अर्जाचा वापर करा. आवश्यक कागदपत्रे आणि पुराव्यांसह अर्ज भरा.',
      descriptionEn: 'Use this application form to obtain a birth certificate. Fill the application with required documents and proofs.',
      pdfUrl: '#'
    },
    {
      id: 2,
      title: 'रहिवासी दाखला अर्ज',
      titleEn: 'Residence Certificate Application',
      description: 'रहिवासी दाखला मिळविण्यासाठी या अर्जाचा वापर करा. आवश्यक पुरावे समाविष्ट करा.',
      descriptionEn: 'Use this application form to obtain a residence certificate. Include required proofs.',
      pdfUrl: '#'
    },
    {
      id: 3,
      title: 'उत्पन्न प्रमाणपत्र अर्ज',
      titleEn: 'Income Certificate Application',
      description: 'उत्पन्न प्रमाणपत्र मिळविण्यासाठी या अर्जाचा वापर करा. आर्थिक दस्तऐवज समाविष्ट करा.',
      descriptionEn: 'Use this application form to obtain an income certificate. Include financial documents.',
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
            📄 {currentLang === 'mr' ? 'अर्ज' : 'Applications'}
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            {currentLang === 'mr' 
              ? 'विविध सेवांसाठी अर्ज करण्यासाठी येथे आपले स्वागत आहे'
              : 'Welcome to apply for various services'}
          </p>
        </div>
        
        {/* Applications List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div 
              key={app.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-center">📄</div>
              
              {/* Title */}
              <h3 className={`text-xl font-bold text-gray-800 mb-3 text-center font-devanagari ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
                {currentLang === 'mr' ? app.title : app.titleEn}
              </h3>
              
              {/* Description */}
              <p className={`text-sm text-gray-600 mb-6 text-center font-devanagari ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
                {currentLang === 'mr' ? app.description : app.descriptionEn}
              </p>
              
              {/* Download Button */}
              <button
                onClick={() => handleDownload(app.pdfUrl, app.title)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span className="font-devanagari">
                  {currentLang === 'mr' ? 'PDF डाउनलोड करा' : 'Download PDF'}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;

