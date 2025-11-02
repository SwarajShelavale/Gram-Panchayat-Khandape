import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Custom hook for the animated background (currently unused but kept for future use)
const useBackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -50; // Start above the viewport
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = `hsla(${Math.random() * 60 + 30}, 70%, 60%, ${this.opacity})`;
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 50) {
          this.reset();
          this.y = -50;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(255, 153, 51, 0.1)');  // Saffron
      gradient.addColorStop(1, 'rgba(19, 136, 8, 0.1)');    // Green
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return canvasRef;
};

const Home = () => {
  const { t } = useTranslation();

  // Stats data for Khandape Grampanchayat
  const stats = [
    { label: t('home.stats.population'), value: '1,066', icon: '👥' },
    { label: t('home.stats.male'), value: '553', icon: '👨' },
    { label: t('home.stats.female'), value: '513', icon: '👩' },
    { label: t('home.stats.literacyRate'), value: '70.26%', icon: '📚' },
    { label: t('home.stats.households'), value: '203', icon: '🏠' },
  ];
  
  // Order stats as: Population, Male, Female, Households, Literacy Rate
  const orderedStats = [
    stats[0], // population
    stats[1], // male
    stats[2], // female
    stats[4], // households
    stats[3]  // literacy rate
  ];

  // Get current language (currently unused but kept for future use)
  // const { i18n } = useTranslation();
  // const currentLang = i18n.language;

  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-secondary/70"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/assets/village-bg.jpg")',
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.7)'
            }}
          ></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/schemes" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              {t('home.hero.ctaPrimary')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              {t('home.hero.ctaSecondary')}
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
            {orderedStats.map((stat, index) => (
              <div key={index} className="w-full max-w-[200px] text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow flex flex-col items-center justify-between h-full">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Welcome Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {t('home.welcome.title')}
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                {t('home.welcome.message')}
              </p>
              <div className="mt-8">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  {t('common.readMore')}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  className="w-full h-64 object-cover" 
                  src="https://images.unsplash.com/photo-1582213784413-88e15e0076be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt={t('home.welcome.imageAlt')} 
                />
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('home.welcome.sarpanchTitle')}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {t('home.welcome.sarpanchName')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
