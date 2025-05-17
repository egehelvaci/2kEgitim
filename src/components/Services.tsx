'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUniversity, 
  FaChartLine, 
  FaHandshake, 
  FaHeadset, 
  FaUserTie, 
  FaChalkboardTeacher, 
  FaPodcast, 
  FaVideo, 
  FaHardHat 
} from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Bankacılık Eğitimleri',
    description: 'Şube ve çağrı merkezi ekiplerine özel, segment bazlı saha uygulamaları',
    icon: <FaUniversity className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-blue-50 text-blue-600',
    details: 'Bankacılık sektöründe ihtiyaç duyulan tüm teorik ve pratik bilgileri, güncel düzenlemeler ve piyasa deneyimleriyle harmanlayan eğitim programlarımız.'
  },
  {
    id: 2,
    title: 'KOBİ\'ler için Kredi Skor Yönetimi',
    description: 'KOBİ\'lere finansal okuryazarlık ve Findeks odaklı uygulamalı içerikler',
    icon: <FaChartLine className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-purple-50 text-purple-600',
    details: 'KOBİ\'lere özel finansal okuryazarlık, Findeks skor yönetimi ve kredi başvuru süreçleri hakkında detaylı, uygulamalı eğitim programları.'
  },
  {
    id: 3,
    title: 'Satış Eğitimleri',
    description: 'İtiraz karşılama, ikna, fayda sunumu, davranış odaklı teknikler',
    icon: <FaHandshake className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-amber-50 text-amber-600',
    details: 'Satış profesyonellerine özel itiraz karşılama teknikleri, ikna yöntemleri ve fayda sunumu konularında davranış odaklı uygulamalı eğitimler.'
  },
  {
    id: 4,
    title: 'Müşteri Deneyimi Eğitimleri',
    description: 'Temsil dili, empati, ilk temas, şikâyet karşılamada duygusal zeka',
    icon: <FaHeadset className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-green-50 text-green-600',
    details: 'Müşteri iletişiminde temsil dili, empati kurma, ilk temas anı ve şikâyet yönetiminde duygusal zeka kullanımı odaklı eğitimler.'
  },
  {
    id: 5,
    title: 'Yönetici Gelişimi ve Koçluk',
    description: 'Koçvari liderlik, geri bildirim, rol farkındalığı ile davranışsal gelişim',
    icon: <FaUserTie className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-orange-50 text-orange-600',
    details: 'Yöneticilere özel koçvari liderlik, etkili geri bildirim teknikleri ve rol farkındalığı ile davranışsal gelişim sağlayan yönetici gelişim programları.'
  },
  {
    id: 6,
    title: 'Eğiticinin Eğitimi',
    description: 'Kurum içi eğitmen havuzu oluşturma, aktarıcı dil, prova ve geri bildirim',
    icon: <FaChalkboardTeacher className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-teal-50 text-teal-600',
    details: 'Kurum içi eğitmen havuzu oluşturma, etkili aktarım teknikleri, sunum provası ve geri bildirim mekanizmaları içeren kapsamlı eğitici yetiştirme programları.'
  },
  {
    id: 7,
    title: 'Sunum ve Sahne Becerileri',
    description: 'Etkili anlatım, sahnede duruş, ikna gücü ve temsil etkisi',
    icon: <FaPodcast className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-red-50 text-red-600',
    details: 'Etkili anlatım teknikleri, sahnede profesyonel duruş, ikna gücü ve kurumsal temsil etkisi konularında uygulamalı eğitimler.'
  },
  {
    id: 8,
    title: 'Dijital Eğitim ve Video İçerik',
    description: 'Video senaryosu, prodüksiyon, LMS uyumlu içerik üretimi',
    icon: <FaVideo className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-indigo-50 text-indigo-600',
    details: 'Video eğitim senaryosu yazma, profesyonel prodüksiyon ve LMS sistemlerine uyumlu dijital içerik üretimi konularında uzman danışmanlık hizmetleri.'
  },
  {
    id: 9,
    title: 'İş Sağlığı ve Güvenliği Eğitimleri',
    description: 'Uygulamalı, mevzuata uygun ve farkındalık kazandırıcı İSG modülleri',
    icon: <FaHardHat className="w-6 h-6 sm:w-8 sm:h-8" />,
    color: 'bg-yellow-50 text-yellow-600',
    details: 'Güncel mevzuata uygun, uygulamalı ve çalışanlarda farkındalık oluşturan İş Sağlığı ve Güvenliği eğitim modülleri.'
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
              
              <a 
                href={`/egitim-alanlarimiz/${activeService.id === 1 ? 'bankacilik-egitimleri' :
                  activeService.id === 2 ? 'kobi-kredi-skor-yonetimi' :
                  activeService.id === 3 ? 'satis-egitimleri' :
                  activeService.id === 4 ? 'musteri-deneyimi-egitimleri' :
                  activeService.id === 5 ? 'yonetici-gelisimi-ve-kocluk' :
                  activeService.id === 6 ? 'egiticinin-egitimi' :
                  activeService.id === 7 ? 'sunum-ve-sahne-becerileri' :
                  activeService.id === 8 ? 'dijital-egitim-ve-video-icerik' :
                  'is-sagligi-ve-guvenligi-egitimleri'}`} 
                className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 ${
                  activeService.id === 1 ? 'bg-blue-600' :
                  activeService.id === 2 ? 'bg-purple-600' :
                  activeService.id === 3 ? 'bg-amber-600' :
                  activeService.id === 4 ? 'bg-green-600' :
                  activeService.id === 5 ? 'bg-orange-600' :
                  activeService.id === 6 ? 'bg-teal-600' :
                  activeService.id === 7 ? 'bg-red-600' :
                  activeService.id === 8 ? 'bg-indigo-600' :
                  'bg-yellow-600'
                } text-white rounded-md font-medium hover:opacity-90 transition-colors text-sm sm:text-base`}
              >
                Detaylı Bilgi
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 