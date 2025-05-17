'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaComments, FaChartLine, FaHandshake, FaPhone, FaClipboardList, FaTheaterMasks, FaLightbulb, FaBullhorn, FaPhoneAlt, FaUsers, FaStar, FaChartBar, FaQuestion, FaRegComments } from 'react-icons/fa';

const SatisEgitimleriPage = () => {
  // Neden satış eğitimi almalısınız verileri
  const reasons = [
    {
      icon: <FaLightbulb />,
      title: "Performans Artışı",
      description: "Pratik tekniklerle satış becerilerinizi geliştirerek performansınızı ve kazancınızı artırın."
    },
    {
      icon: <FaHandshake />,
      title: "Müşteri İlişkileri",
      description: "Güven oluşturma ve müşteri ilişkilerini sürdürülebilir hale getirme becerilerinizi geliştirin."
    },
    {
      icon: <FaBullhorn />,
      title: "İkna Kabiliyeti",
      description: "İtirazları fırsata çevirme ve ikna tekniklerini kullanarak kapatma oranlarınızı yükseltin."
    }
  ];

  // Satış eğitimi hizmetlerimiz
  const services = [
    {
      icon: <FaRegComments className="w-12 h-12 text-blue-600" />,
      title: "İtiraz Karşılama ve İkna Becerileri",
      description: "Müşteri itirazlarını nasıl fırsata çevireceğinizi ve etkin ikna teknikleriyle satışı sonuçlandırmayı öğrenin.",
      color: "blue"
    },
    {
      icon: <FaQuestion className="w-12 h-12 text-purple-600" />,
      title: "Faydayı Dilleştirme ve Soru Teknikleri",
      description: "Ürün ve hizmetlerinizin faydalarını etkili bir şekilde anlatmayı ve doğru soruları sorarak müşterileri yönlendirmeyi öğrenin.",
      color: "purple"
    },
    {
      icon: <FaPhone className="w-12 h-12 text-amber-600" />,
      title: "Telefonda Satış ve Güven Oluşturma",
      description: "Telefon görüşmelerinde etkin iletişim kurarak müşteri güvenini kazanma ve uzaktan satış yapma becerilerinizi geliştirin.",
      color: "amber"
    },
    {
      icon: <FaTheaterMasks className="w-12 h-12 text-green-600" />,
      title: "Rol Oyunları ve Gerçek Senaryolar",
      description: "Gerçek satış senaryoları üzerinden uygulamalı rol oyunları ile becerilerinizi pratikte geliştirin.",
      color: "green"
    },
    {
      icon: <FaUsers className="w-12 h-12 text-orange-600" />,
      title: "Sektöre Özel Eğitim Programları",
      description: "Her sektöre ve işletme yapısına özel olarak tasarlanabilir satış eğitim programları.",
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20" style={{background: "linear-gradient(to right, rgba(239, 246, 255, 0.6), rgba(245, 180, 33, 0.05))"}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              Satış <span style={{color: "#f5b421"}}>Eğitimleri</span>
            </h1>
            <p className="text-lg text-gray-700 mb-10 font-medium">
              Davranış Odaklı, Saha Gerçekliğine Dayalı Satış
            </p>
            <a 
              href="#services" 
              className="text-white font-medium px-8 py-3 rounded-full inline-flex items-center transition-all mt-4"
              style={{
                backgroundColor: "#f5b421",
                boxShadow: "0 4px 6px -1px rgba(245, 180, 33, 0.2), 0 2px 4px -2px rgba(245, 180, 33, 0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#e0a30a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f5b421";
              }}
            >
              Hizmetlerimizi İnceleyin <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Satış Eğitimi Hizmetlerimiz */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Satış <span style={{color: "#f5b421"}}>Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600">
              İhtiyaçlarınıza özel olarak tasarlanmış, sahada uygulanabilir satış teknikleri ve stratejileri
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-${service.color}-600 bg-white`}>
                <div className={`w-16 h-16 rounded-lg bg-${service.color}-50 flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/iletisim" 
              className="text-white font-medium px-8 py-3 rounded-full inline-flex items-center transition-all"
              style={{
                backgroundColor: "#f5b421",
                boxShadow: "0 4px 6px -1px rgba(245, 180, 33, 0.2), 0 2px 4px -2px rgba(245, 180, 33, 0.1)"
              }}
            >
              Teklif İsteyin <FaClipboardList className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Neden Bu Eğitim Bölümü */}
      <section className="py-20" style={{backgroundColor: "rgba(245, 180, 33, 0.05)"}}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Neden Satış Eğitimi <span style={{color: "#f5b421"}}>Almalısınız?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Rekabetçi pazarda öne çıkmak için satış yeteneklerinizi geliştirmeye yatırım yapın.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white">
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{backgroundColor: "rgba(245, 180, 33, 0.1)"}}>
                    <div className="text-2xl" style={{color: "#f5b421"}}>{reason.icon}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Satış ekibinizi güçlendirin</h2>
            <p className="text-lg mb-8 text-white/90">
              İşletmeniz için özel olarak tasarlanmış satış eğitimi programları ile ekibinizin performansını artırın.
            </p>
            <Link 
              href="/iletisim" 
              className="bg-white text-amber-600 px-8 py-3 rounded-full font-medium hover:bg-amber-50 transition-colors inline-flex items-center"
            >
              <FaPhoneAlt className="mr-2" /> İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SatisEgitimleriPage; 