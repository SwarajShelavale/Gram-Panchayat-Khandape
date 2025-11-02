import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';

const Certificates = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Certificates list data
  const certificates = [
    {
      id: 1,
      title: 'जन्म दाखला',
      titleEn: 'Birth Certificate',
      description: 'आपला जन्म दाखला येथून डाउनलोड करा. हा दाखला अधिकृत आहे आणि विविध कारणांसाठी वापरला जाऊ शकतो.',
      descriptionEn: 'Download your birth certificate from here. This certificate is official and can be used for various purposes.',
      pdfUrl: '#'
    },
    {
      id: 2,
      title: 'रहिवासी दाखला',
      titleEn: 'Residence Certificate',
      description: 'आपला रहिवासी दाखला येथून डाउनलोड करा. हा दाखला पत्ता सिद्ध करण्यासाठी वापरला जाऊ शकतो.',
      descriptionEn: 'Download your residence certificate from here. This certificate can be used to prove address.',
      pdfUrl: '#'
    },
    {
      id: 3,
      title: 'उत्पन्न दाखला',
      titleEn: 'Income Certificate',
      description: 'आपला उत्पन्न दाखला येथून डाउनलोड करा. हा दाखला विविध योजनांसाठी आवश्यक आहे.',
      descriptionEn: 'Download your income certificate from here. This certificate is required for various schemes.',
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
            🎓 {currentLang === 'mr' ? 'दाखले' : 'Certificates'}
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            {currentLang === 'mr' 
              ? 'विविध दाखले डाउनलोड करण्यासाठी येथे आपले स्वागत आहे'
              : 'Welcome to download various certificates'}
          </p>
        </div>
        
        {/* Certificates List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-center">🎓</div>
              
              {/* Title */}
              <h3 className={`text-xl font-bold text-gray-800 mb-3 text-center font-devanagari ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
                {currentLang === 'mr' ? cert.title : cert.titleEn}
              </h3>
              
              {/* Description */}
              <p className={`text-sm text-gray-600 mb-6 text-center font-devanagari ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
                {currentLang === 'mr' ? cert.description : cert.descriptionEn}
              </p>
              
              {/* Download Button */}
              <button
                onClick={() => handleDownload(cert.pdfUrl, cert.title)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
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

export default Certificates;

