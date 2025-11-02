import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Sample gallery items with placeholder images
const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1582213782619-08c7b131e1d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'village_meeting',
    description: 'village_meeting_desc',
    category: 'meeting',
    date: '15 January 2024'
  },
  {
    id: 2,
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'ganesh_utsav',
    description: 'ganesh_utsav_desc',
    category: 'festival',
    date: '2 September 2024'
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'road_construction',
    description: 'road_construction_desc',
    category: 'development',
    date: '10 March 2024'
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'school_event',
    description: 'school_event_desc',
    category: 'education',
    date: '5 February 2024'
  },
  {
    id: 5,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'health_camp',
    description: 'health_camp_desc',
    category: 'development',
    date: '20 April 2024'
  },
  {
    id: 6,
    type: 'video',
    src: 'https://www.youtube.com/embed/9xwazD5SyVg',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    title: 'republic_day',
    description: 'republic_day_desc',
    category: 'festival',
    date: '26 January 2024'
  },
  // Public Buildings (सार्वजनिक इमारती)
  {
    id: 7,
    type: 'image',
    src: '/assets/images/public-buildings/ganpatimandir.jpeg',
    title: 'ganpati_mandir',
    description: 'ganpati_mandir_desc',
    category: 'publicBuildings',
    date: 'Ongoing'
  },
  {
    id: 8,
    type: 'image',
    src: '/assets/images/public-buildings/grampanchayatKaryalay.jpg',
    title: 'grampanchayat_office',
    description: 'grampanchayat_office_desc',
    category: 'publicBuildings',
    date: 'Ongoing'
  },
  {
    id: 9,
    type: 'image',
    src: '/assets/images/public-buildings/hanumanmandir.jpeg',
    title: 'hanuman_mandir',
    description: 'hanuman_mandir_desc',
    category: 'publicBuildings',
    date: 'Ongoing'
  },
  {
    id: 10,
    type: 'image',
    src: '/assets/images/public-buildings/jilhaparishadprathmikshala.jpeg',
    title: 'prathmik_shala',
    description: 'prathmik_shala_desc',
    category: 'publicBuildings',
    date: 'Ongoing'
  },
];

const VillageGallery = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Get categories from translations
  const categories = [
    { id: 'all', name: t('gallery.categories.all') },
    { id: 'meeting', name: t('gallery.categories.meeting') },
    { id: 'festival', name: t('gallery.categories.festival') },
    { id: 'development', name: t('gallery.categories.development') },
    { id: 'education', name: t('gallery.categories.education') },
    { id: 'publicBuildings', name: t('gallery.categories.publicBuildings') },
  ];

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative aspect-video bg-gray-100">
                {item.type === 'video' ? (
                  <>
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary" fill="currentColor" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1 font-devanagari">
                  {t(`gallery.items.${item.title}`)}
                </h3>
                <p className="text-sm text-gray-600 mb-2 font-devanagari">
                  {t(`gallery.items.${item.description}`)}
                </p>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div 
          className={`fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isMounted ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeModal}
        >
          <div 
            className={`relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 transform ${
              isMounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="aspect-video bg-black">
              {selectedItem.type === 'video' ? (
                <iframe
                  src={`${selectedItem.src}?autoplay=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={t(`gallery.items.${selectedItem.title}`)}
                ></iframe>
              ) : (
                <img 
                  src={selectedItem.src} 
                  alt={t(`gallery.items.${selectedItem.title}`)}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {t(`gallery.items.${selectedItem.title}`)}
              </h3>
              <p className="text-gray-600 mb-4">{t(`gallery.items.${selectedItem.description}`)}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{selectedItem.date}</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full">
                  {categories.find(c => c.id === selectedItem.category)?.name || selectedItem.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VillageGallery;
