'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Video yüklendiğinde otomatik başlatma
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video otomatik başlatılamadı:", error);
      });
    }
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="fullscreen-hero relative pt-24 pb-48 sm:pb-40 md:pb-32 min-h-screen flex flex-col justify-between">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            src="https://s3.tebi.io/dogahotelfethiye/hero.mp4"
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 sm:bg-gradient-to-r sm:from-black/40 sm:to-black/30"></div>
        </div>
        
        {/* Ana İçerik */}
        <div className="container relative z-10 px-4 md:px-0 text-center mx-auto pt-20 md:pt-28 lg:pt-36 flex flex-col justify-center flex-grow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg">
              Eğitim Değil, <span style={{color: "#f5b421"}}>Davranış Değişimi</span> Tasarlıyoruz
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-md">
              Saha gerçekleriyle yoğrulmuş, ölçülebilir ve uygulanabilir kurumsal gelişim çözümleri.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/iletisim" 
                className="inline-flex items-center justify-center bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl"
                style={{color: "#f5b421"}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8f8f8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
              >
                Bize Ulaşın
              </Link>
              <Link 
                href="/iletisim" 
                className="inline-flex items-center justify-center text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl mt-2 sm:mt-0"
                style={{backgroundColor: "#f5b421"}}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e5a91e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f5b421';
                }}
              >
                Kuruma Özel Çözüm Talep Et
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Özellik Kutuları */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 w-full px-3 sm:px-4 md:px-10 mt-6 sm:mt-8 md:mt-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-0">
            {/* Uzman */}
            <div className="bg-cream-50/95 p-3 sm:p-4 md:p-6 rounded-lg shadow-md backdrop-blur-sm hover:shadow-lg transition-all" style={{borderColor: "rgba(245, 180, 33, 0.3)"}}>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{color: "#f5b421"}}>Uzman</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">28 yıllık saha deneyimiyle oluşturulmuş, sektöre özel içerikler.</p>
            </div>
            
            {/* Sade */}
            <div className="bg-cream-50/95 p-3 sm:p-4 md:p-6 rounded-lg shadow-md backdrop-blur-sm hover:shadow-lg transition-all" style={{borderColor: "rgba(245, 180, 33, 0.3)"}}>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{color: "#f5b421"}}>Sade</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Eğitimlerimizde karmaşa değil, netlik ve akılda kalıcılık esastır.</p>
            </div>
            
            {/* Anlaşılır */}
            <div className="bg-cream-50/95 p-3 sm:p-4 md:p-6 rounded-lg shadow-md backdrop-blur-sm hover:shadow-lg transition-all" style={{borderColor: "rgba(245, 180, 33, 0.3)"}}>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{color: "#f5b421"}}>Anlaşılır</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Teknik detayları yalınlaştırır, herkesin kolayca içselleştirmesini sağlarız.</p>
            </div>
            
            {/* Uygulanabilir */}
            <div className="bg-cream-50/95 p-3 sm:p-4 md:p-6 rounded-lg shadow-md backdrop-blur-sm hover:shadow-lg transition-all" style={{borderColor: "rgba(245, 180, 33, 0.3)"}}>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{color: "#f5b421"}}>Uygulanabilir</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Sahada hemen kullanabileceğiniz gerçek çözümler sunarız.</p>
            </div>
          </div>
          
          {/* Scroll Down Arrow - Ortada ve en altta */}
          <motion.div 
            className="flex justify-center mt-8 sm:mt-10 md:mt-12"
            onClick={scrollToContent}
            animate={{ 
              y: [0, 10, 0],
              opacity: scrollPosition > 100 ? 0 : 1
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              opacity: { duration: 0.3 }
            }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex flex-col items-center cursor-pointer">
              <span className="font-medium mb-2 text-sm drop-shadow-md text-white">Aşağı Kaydırın</span>
              <div className="p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300" 
                style={{
                  background: `linear-gradient(to right, #f5b421, #f5b421)`,
                  boxShadow: `0 10px 15px -3px rgba(245, 180, 33, 0.3), 0 4px 6px -4px rgba(245, 180, 33, 0.3)`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 15px -3px rgba(245, 180, 33, 0.5), 0 4px 6px -4px rgba(245, 180, 33, 0.5)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 15px -3px rgba(245, 180, 33, 0.3), 0 4px 6px -4px rgba(245, 180, 33, 0.3)`;
                }}
              >
                <FaChevronDown className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <div id="content-section"></div>
    </>
  );
};

export default Hero; 