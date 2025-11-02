import { useTranslation } from 'react-i18next';

// Committee members data
const committeeMembers = [
  {
    id: 1,
    name: 'Smt. Akshata Madan Wagchaudhe',
    marathiName: 'सौ. अक्षता मदन वाघचौडे',
    designation: 'sarpanch',
    designationMr: 'सरपंच',
    contact: '+91 9527302108',
    wardNo: '1A',
    wardNoMr: '१ अ',
    photo: '/assets/images/committee/sarpanch.jpeg'
  },
  {
    id: 2,
    name: 'Shri Narayan Jagnath Kedhar',
    marathiName: 'श्री. नारायण जगन्नाथ केदार',
    designation: 'deputySarpanch',
    designationMr: 'उपसरपंच',
    contact: '+91 8879700836',
    wardNo: '3C',
    wardNoMr: '३ क',
    photo: '/assets/images/committee/deputySarpanch.jpeg'
  },
  {
    id: 3,
    name: 'Shri Dnyaneshwar Anant Shelavale',
    marathiName: 'श्री. ज्ञानेश्वर अनंत शेलवले',
    designation: 'grampanchayatAdhikari',
    designationMr: 'ग्रामपंचायत अधिकारी',
    contact: '+91 7798041711',
    wardNo: null, // No ward number for officer
    photo: '/assets/images/committee/grampanchayatAdhikari.jpeg'
  }
];

// Other committee members (सदस्य)
const otherMembers = [
  {
    id: 5,
    name: 'Shri Ravindra Narayan Rasal',
    marathiName: 'श्री. रविंद्र नारायण रसाळ',
    wardNo: '1A',
    wardNoMr: '१ अ'
  },
  {
    id: 1,
    name: 'Shri Atmaram Babu Rasal',
    marathiName: 'श्री. आत्माराम बाबू रसाळ',
    wardNo: '2B',
    wardNoMr: '२ ब'
  },
  {
    id: 2,
    name: 'Smt. Ashwini Atmaram Rasal',
    marathiName: 'सौ. अश्विनी आत्माराम रसाळ',
    wardNo: '2B',
    wardNoMr: '२ ब'
  },
  {
    id: 3,
    name: 'Smt. Nayana Rajesh Rasal',
    marathiName: 'सौ. नयना राजेश रसाळ',
    wardNo: '2B',
    wardNoMr: '२ ब'
  },
  {
    id: 4,
    name: 'Smt. Ashwini Ganesh Rasal',
    marathiName: 'सौ. अश्विनी गणेश रसाळ',
    wardNo: '3C',
    wardNoMr: '३ क'
  }
];

const WorkingCommittee = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Group members by designation
  const sarpanch = committeeMembers.find(m => m.designation === 'sarpanch');
  const deputySarpanch = committeeMembers.find(m => m.designation === 'deputySarpanch');
  const grampanchayatAdhikari = committeeMembers.find(m => m.designation === 'grampanchayatAdhikari');

  // Function to render a key member card (Sarpanch, Deputy Sarpanch, Officer)
  const renderKeyMemberCard = (member) => {
    if (!member) return null;
    
    return (
      <div 
        key={member.id}
        className="bg-white rounded-xl shadow-md border-2 border-gray-200 p-4 sm:p-5 md:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="flex flex-col items-center text-center">
          {/* Circular Photo */}
          <div className="mb-4 flex justify-center">
            <div className="relative">
              {/* Outer decorative ring */}
              <div 
                className="absolute inset-0 rounded-full opacity-15 blur-sm"
                style={{
                  width: 'calc(100% + 12px)',
                  height: 'calc(100% + 12px)',
                  top: '-6px',
                  left: '-6px',
                  backgroundColor: '#4f46e5'
                }}
              ></div>
              {/* Circular Photo Container - Reduced Size */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 overflow-hidden rounded-full">
                <img
                  src={member.photo}
                  alt={currentLang === 'mr' ? member.marathiName : member.name}
                  className="w-full h-full rounded-full border-4 border-white shadow-lg"
                  style={{
                    borderColor: '#4f46e5',
                    objectFit: 'cover',
                    objectPosition: 'center center' // Center the face in the middle of circle
                  }}
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.target.style.display = 'none';
                    const placeholder = e.target.parentElement;
                    if (!placeholder.querySelector('.photo-placeholder')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'photo-placeholder w-full h-full rounded-full bg-primary/10 flex items-center justify-center text-primary text-5xl md:text-6xl border-4 border-white';
                      placeholder.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Designation Badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs sm:text-sm font-bold rounded-full bg-gray-100 text-gray-800 border border-gray-300">
              {currentLang === 'mr' ? member.designationMr : t(`committee.designations.${member.designation}`)}
            </span>
          </div>
          
          {/* Name */}
          <h3 className={`text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 font-devanagari ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
            {currentLang === 'mr' ? member.marathiName : member.name}
          </h3>
          
          {/* Contact with icon */}
          {member.contact && (
            <div className="mb-2 flex items-center justify-center text-gray-700">
              <span className="text-base mr-1.5">📞</span>
              <a 
                href={`tel:${member.contact}`} 
                className="hover:text-primary font-medium transition-colors text-sm sm:text-base"
              >
                {member.contact}
              </a>
            </div>
          )}
          
          {/* Ward Number */}
          {member.wardNo && (
            <div className="flex items-center justify-center text-gray-700">
              <span className="text-base mr-1.5">🏠</span>
              <span className="font-medium font-devanagari text-sm sm:text-base">
                {currentLang === 'mr' ? 'वॉर्ड क्रमांक:' : 'Ward No:'} {currentLang === 'mr' ? (member.wardNoMr || member.wardNo) : member.wardNo}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Function to render other member card
  const renderOtherMemberCard = (member) => {
    return (
      <div 
        key={member.id}
        className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
      >
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="text-2xl mb-2">👤</div>
          
          {/* Name */}
          <h4 className={`text-base font-semibold text-gray-800 mb-2 font-devanagari ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
            {currentLang === 'mr' ? member.marathiName : member.name}
          </h4>
          
          {/* Ward Number */}
          <div className="flex items-center justify-center text-gray-600">
            <span className="text-lg mr-1">🏠</span>
            <span className="text-sm font-medium font-devanagari">
              {currentLang === 'mr' ? 'वॉर्ड:' : 'Ward:'} {currentLang === 'mr' ? (member.wardNoMr || member.wardNo) : member.wardNo}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-12">
      {/* Key Members Section */}
      <div>
        <h2 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center font-devanagari ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
          {currentLang === 'mr' ? 'मुख्य सदस्य' : 'Key Members'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sarpanch */}
          {sarpanch && renderKeyMemberCard(sarpanch)}
          
          {/* Deputy Sarpanch */}
          {deputySarpanch && renderKeyMemberCard(deputySarpanch)}
          
          {/* Grampanchayat Adhikari */}
          {grampanchayatAdhikari && renderKeyMemberCard(grampanchayatAdhikari)}
        </div>
      </div>

      {/* Other Members Section */}
      {otherMembers.length > 0 && (
        <div>
          <h3 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center font-devanagari ${currentLang === 'mr' ? 'font-devanagari' : ''}`}>
            {currentLang === 'mr' ? 'इतर सदस्य यादी' : 'Other Members List'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherMembers.map(member => renderOtherMemberCard(member))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkingCommittee;
