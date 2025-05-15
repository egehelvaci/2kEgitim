'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaLaptop, FaUserTie, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Kurumsal Eğitimler',
    description: 'Kurum ihtiyacına özel tasarlanmış, sektör deneyimi ile zenginleştirilmiş eğitim programları.',
    icon: <FaChalkboardTeacher className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-blue-50 text-blue-600',
    details: 'Kurumsal eğitimlerimiz, şirketinizin ihtiyaçlarına göre tasarlanır. Her kurum için özel içerik ve metodoloji ile çalışanlarınızın potansiyelini en üst düzeye çıkarıyoruz.'
  },
  {
    id: 2,
    title: 'Dijital Eğitimler',
    description: 'Zaman ve mekandan bağımsız, modern öğrenme teknolojileri ile desteklenmiş online eğitim çözümleri.',
    icon: <FaLaptop className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-purple-50 text-purple-600',
    details: 'Dijital eğitimlerimiz ile zaman ve mekan kısıtlaması olmadan, interaktif içeriklerle öğrenme deneyimi sunuyoruz. Video, sınav ve canlı eğitim seçenekleri mevcuttur.'
  },
  {
    id: 3,
    title: 'Yönetici Gelişim Programları',
    description: 'Liderlik becerilerini ve yönetim kabiliyetlerini geliştirmeye yönelik kapsamlı eğitim programları.',
    icon: <FaUserTie className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-amber-50 text-amber-600',
    details: 'Yöneticilerinizin liderlik becerilerini geliştiren programlarımız stratejik düşünme, takım yönetimi, iletişim ve karar verme konularında gelişim sağlar.'
  },
  {
    id: 4,
    title: 'Takım Çalışması',
    description: 'Ekip dinamiklerini güçlendiren, iş birliğini ve iletişimi geliştiren interaktif çalışmalar.',
    icon: <FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-green-50 text-green-600',
    details: 'Takım çalışmalarımız ile ekibinizin uyum ve verimliliğini artırıyoruz. Ekip içi iletişim, problem çözme ve güven geliştirme üzerine etkinlikler düzenliyoruz.'
  },
  {
    id: 5,
    title: 'Kişisel Gelişim',
    description: 'Bireylerin profesyonel ve kişisel becerilerini geliştirmeye yönelik eğitim programları.',
    icon: <FaChartLine className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-red-50 text-red-600',
    details: 'Kişisel gelişim programlarımız ile çalışanların potansiyellerini keşfetmelerine ve kendilerini geliştirmelerine yardımcı oluyoruz. Zaman yönetimi, stres yönetimi ve iletişim becerileri gibi konuları kapsıyoruz.'
  },
  {
    id: 6,
    title: 'Danışmanlık Hizmetleri',
    description: 'Kurumsal süreçleri iyileştirmek ve performansı artırmak için profesyonel danışmanlık hizmetleri.',
    icon: <FaHandshake className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-teal-50 text-teal-600',
    details: 'Danışmanlık hizmetlerimiz ile kurumsal süreçlerinizi analiz ediyor, iyileştirme önerileri sunuyor ve uygulamada destek oluyoruz. Deneyimli danışmanlarımız ile kurumsal gelişiminize katkı sağlıyoruz.'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="section bg-white px-4 sm:px-0">
      <div className="container-custom">
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold"
          >
            Eğitim ve Hizmet <span className="text-primary">Çözümlerimiz</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base"
          >
            İşimize süsleme katmadan, gereksiz karmaşıklıklardan uzak, sade ve sonuç odaklı bir yaklaşımla çalışıyoruz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl h-full">
              <ul className="space-y-3 sm:space-y-4">
                {services.map((service) => (
                  <motion.li 
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: service.id * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => setActiveService(service)}
                      className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                        activeService.id === service.id
                          ? `${service.color} shadow-md`
                          : 'bg-white hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`rounded-full p-2 sm:p-3 mr-3 sm:mr-4 ${
                          activeService.id === service.id ? 'bg-white/30' : service.color
                        }`}>
                          {service.icon}
                        </div>
                        <h3 className="font-semibold text-base sm:text-lg line-clamp-2">{service.title}</h3>
                      </div>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <motion.div 
              key={activeService.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl overflow-hidden h-full p-5 sm:p-8"
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className={`rounded-full p-3 sm:p-4 mr-3 sm:mr-4 ${activeService.color}`}>
                  {activeService.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">{activeService.title}</h3>
              </div>
              
              <p className="text-gray-700 mb-4 text-sm sm:text-base">{activeService.description}</p>
              
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm mb-5 sm:mb-6">
                <h4 className="font-semibold mb-2 text-base sm:text-lg">Detaylı Bilgi</h4>
                <p className="text-gray-600 text-sm sm:text-base">{activeService.details}</p>
              </div>
              
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-light transition-colors text-sm sm:text-base">
                Detaylı Bilgi
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 