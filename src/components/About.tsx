'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaUserGraduate, FaBriefcase, FaUsers, FaClock } from 'react-icons/fa';
import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-primary">Rakamlarla 2K Eğitim</h3>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <FaUserGraduate className="w-12 h-12 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800">1000+</div>
                  <div className="text-gray-600 mt-2">Eğitim</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <FaBriefcase className="w-12 h-12 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800">50+</div>
                  <div className="text-gray-600 mt-2">Kurum</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <FaUsers className="w-12 h-12 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800">2000+</div>
                  <div className="text-gray-600 mt-2">Katılımcı</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <FaClock className="w-12 h-12 text-accent" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800">29+</div>
                  <div className="text-gray-600 mt-2">Yıllık Deneyim</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Biz <span className="text-accent">Kimiz?</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              2K Eğitim ve Danışmanlık, satış, müşteri deneyimi, yönetici gelişimi ve dijital eğitim alanlarında uzmanlaşmış bir eğitim ve gelişim şirketidir.
            </p>
            
            <p className="text-gray-600 mb-6">
              2K Eğitim ve Danışmanlık, kurucusu Koray Karataş'ın 29 yıllık saha tecrübesi ve kurumsal bilgi birikimi üzerine inşa edilmiştir.
            </p>
            
            <p className="text-gray-600 mb-8">
              Bankacılık, bireysel emeklilik, sigortacılık, tarım, ithalat-ihracat ve finans piyasaları gibi farklı sektörlerde edindiğimiz saha deneyimi, sunduğumuz çözümlerin çok yönlü ve sahaya uyumlu olmasını sağlıyor.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-accent p-1 rounded-full text-white">
                  <FaCheck className="w-4 h-4" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Gerçek Deneyim</h3>
                  <p className="text-gray-600">Pratik hayatın gerçeklerinden ve sahadaki deneyimlerden beslenen eğitim tasarımları</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-accent p-1 rounded-full text-white">
                  <FaCheck className="w-4 h-4" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Ölçülebilir Gelişim</h3>
                  <p className="text-gray-600">Her aşamada ölçülebilir gelişim hedefi ile tasarlanmış programlar</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-accent p-1 rounded-full text-white">
                  <FaCheck className="w-4 h-4" />
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">Anahtar Teslim Çözümler</h3>
                  <p className="text-gray-600">Eğitimden dijital içerik üretimine kadar eksiksiz hizmet</p>
                </div>
              </div>
            </div>

            <Link 
              href="/hakkimizda" 
              className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
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