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
      <section className="fullscreen-hero min-h-[100vh] relative">
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
        
        {/* Scroll Down Arrow - Sadece masaüstü görünümünde ve turuncu efektli */}
        <motion.div 
          className="hidden sm:flex absolute sm:left-10 sm:top-1/2 transform sm:-translate-y-1/2 z-10 cursor-pointer"
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
          <div className="flex flex-col items-center">
            <span className="text-amber-300 font-medium mb-2 text-sm drop-shadow-md">Aşağı Kaydırın</span>
            <div className="bg-gradient-to-r from-amber-500 to-amber-400 p-3 rounded-full shadow-lg shadow-amber-500/30 backdrop-blur-sm hover:shadow-amber-400/50 transition-all duration-300">
              <FaChevronDown className="w-5 h-5 text-white" />
            </div>
          </div>
        </motion.div>
        
        <div className="container relative z-10 px-4 md:px-0 text-center flex flex-col justify-center min-h-[100vh] pb-32 sm:pb-40 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto pt-16 sm:pt-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg">
              Sadece Bildiğimizi Değil, <span className="text-amber-300">Yaşadıklarımızı</span> Paylaşıyoruz
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-md">
              Hayatın içinde, işin mutfağında öğrenilmiş bilgiyle eğitim ve gelişim çözümleri üretiyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/egitim-cozumlerimiz" 
                className="inline-flex items-center justify-center bg-white text-amber-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Eğitim Çözümlerimiz
              </Link>
              <Link 
                href="/iletisim" 
                className="inline-flex items-center justify-center bg-amber-500 text-white hover:bg-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl mt-2 sm:mt-0"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Özellik Kutuları */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-0 left-0 right-0 w-full px-3 sm:px-4 md:px-10 z-10 pb-4 sm:pb-8 md:pb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-7xl mx-auto">
            {/* Uzman */}
            <div className="bg-cream-50/95 p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-amber-100 backdrop-blur-sm hover:shadow-lg transition-all">
              <h3 className="text-lg sm:text-xl font-bold text-amber-600 mb-1 sm:mb-2">Uzman</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Alanında uzman eğitimcilerle kaliteli eğitim deneyimi</p>
            </div>
            
            {/* Sade */}
            <div className="bg-cream-50/95 p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-amber-100 backdrop-blur-sm hover:shadow-lg transition-all">
              <h3 className="text-lg sm:text-xl font-bold text-amber-600 mb-1 sm:mb-2">Sade</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Karmaşıklıktan uzak, açık ve net anlatımlar</p>
            </div>
            
            {/* Anlaşılır */}
            <div className="bg-cream-50/95 p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-amber-100 backdrop-blur-sm hover:shadow-lg transition-all">
              <h3 className="text-lg sm:text-xl font-bold text-amber-600 mb-1 sm:mb-2">Anlaşılır</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Herkesin anlayabileceği şekilde ifade edilmiş kavramlar</p>
            </div>
            
            {/* Uygulanabilir */}
            <div className="bg-cream-50/95 p-3 sm:p-4 md:p-6 rounded-lg shadow-md border border-amber-100 backdrop-blur-sm hover:shadow-lg transition-all">
              <h3 className="text-lg sm:text-xl font-bold text-amber-600 mb-1 sm:mb-2">Uygulanabilir</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">Teoriden çok pratiğe dayalı, hemen kullanılabilir bilgiler</p>
            </div>
          </div>
        </motion.div>
      </section>

      <div id="content-section"></div>
    </>
  );
};

export default Hero; 