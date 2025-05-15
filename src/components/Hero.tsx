'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden mt-0 px-4 sm:px-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="2K Eğitim Hero"
          fill
          className="object-cover opacity-99"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent"></div>
      </div>
      
      <div className="container-custom relative z-10 py-12 sm:py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white drop-shadow-lg">
              Sadece Bildiğimizi Değil, <span className="text-amber-300">Yaşadıklarımızı</span> Paylaşıyoruz
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0 drop-shadow-md">
              Hayatın içinde, işin mutfağında öğrenilmiş bilgiyle eğitim ve gelişim çözümleri üretiyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link 
                href="/egitim-cozumlerimiz" 
                className="inline-flex items-center justify-center bg-white text-amber-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Eğitim Çözümlerimiz
              </Link>
              <Link 
                href="/iletisim" 
                className="inline-flex items-center justify-center bg-amber-500 text-white hover:bg-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Bizimle İletişime Geçin
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-amber-50/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-amber-600 text-xl mb-2">Uzman</h3>
                  <p className="text-gray-700">Alanında uzman eğitimcilerle kaliteli eğitim deneyimi</p>
                </div>
                
                <div className="bg-amber-50/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-amber-600 text-xl mb-2">Sade</h3>
                  <p className="text-gray-700">Karmaşıklıktan uzak, açık ve net anlatımlar</p>
                </div>
                
                <div className="bg-amber-50/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-amber-600 text-xl mb-2">Anlaşılır</h3>
                  <p className="text-gray-700">Herkesin anlayabileceği şekilde ifade edilmiş kavramlar</p>
                </div>
                
                <div className="bg-amber-50/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-amber-600 text-xl mb-2">Uygulanabilir</h3>
                  <p className="text-gray-700">Teoriden çok pratiğe dayalı, hemen kullanılabilir bilgiler</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobil için özellikleri gösteren bileşen */}
          <div className="block md:hidden mt-8">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-amber-600 text-lg mb-1">Uzman</h3>
                <p className="text-gray-700 text-sm">Alanında uzman eğitimcilerle kaliteli eğitim</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-amber-600 text-lg mb-1">Sade</h3>
                <p className="text-gray-700 text-sm">Karmaşıklıktan uzak, açık anlatımlar</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-amber-600 text-lg mb-1">Anlaşılır</h3>
                <p className="text-gray-700 text-sm">Kolay anlaşılır kavramlar</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-amber-600 text-lg mb-1">Uygulanabilir</h3>
                <p className="text-gray-700 text-sm">Pratiğe dayalı, kullanılabilir bilgiler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 