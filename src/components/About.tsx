'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaUserGraduate, FaBriefcase, FaUsers, FaClock } from 'react-icons/fa';
import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 px-4 sm:px-0">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-primary">Rakamlarla 2K Eğitim</h3>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <FaUserGraduate className="w-8 h-8 sm:w-12 sm:h-12 text-accent" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold text-gray-800">1000+</div>
                  <div className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Eğitim</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <FaBriefcase className="w-8 h-8 sm:w-12 sm:h-12 text-accent" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold text-gray-800">50+</div>
                  <div className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Kurum</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <FaUsers className="w-8 h-8 sm:w-12 sm:h-12 text-accent" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold text-gray-800">40.000+</div>
                  <div className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Katılımcı</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <FaClock className="w-8 h-8 sm:w-12 sm:h-12 text-accent" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold text-gray-800">28+</div>
                  <div className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Yıllık Deneyim</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Biz <span className="text-accent">Kimiz?</span>
            </h2>
            
            <p className="text-gray-600 mb-4 sm:mb-6">
              2K Eğitim ve Danışmanlık, satış, müşteri deneyimi, yönetici gelişimi ve dijital eğitim alanlarında uzmanlaşmış bir eğitim ve gelişim şirketidir.
            </p>
            
            <p className="text-gray-600 mb-4 sm:mb-6">
              2K Eğitim ve Danışmanlık, kurucusu Koray Karataş&apos;ın 28 yıllık saha tecrübesi ve kurumsal bilgi birikimi üzerine inşa edilmiştir.
            </p>
            
            <p className="text-gray-600 mb-6 sm:mb-8">
              Bankacılık, bireysel emeklilik, sigortacılık, tarım, ithalat-ihracat ve finans piyasaları gibi farklı sektörlerde edindiğimiz saha deneyimi, sunduğumuz çözümlerin çok yönlü ve sahaya uyumlu olmasını sağlıyor.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-accent p-1 rounded-full text-white">
                  <FaCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="font-bold text-base sm:text-lg">Gerçek Deneyim</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Pratik hayatın gerçeklerinden ve sahadaki deneyimlerden beslenen eğitim tasarımları</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-accent p-1 rounded-full text-white">
                  <FaCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="font-bold text-base sm:text-lg">Ölçülebilir Gelişim</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Her aşamada ölçülebilir gelişim hedefi ile tasarlanmış programlar</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-accent p-1 rounded-full text-white">
                  <FaCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h3 className="font-bold text-base sm:text-lg">Anahtar Teslim Çözümler</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Eğitimden dijital içerik üretimine kadar eksiksiz hizmet</p>
                </div>
              </div>
            </div>

            <Link 
              href="/hakkimizda" 
              className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Daha Fazla Bilgi
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 