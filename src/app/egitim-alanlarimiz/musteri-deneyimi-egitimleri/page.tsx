'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaHandshake, FaUserFriends, FaSmile, FaPhoneAlt, FaClipboardList, FaLightbulb, FaBuilding, FaBullhorn, FaUsers, FaHeadset, FaBrain, FaComments, FaBriefcase, FaRegCommentDots } from 'react-icons/fa';

const MusteriDeneyimiEgitimleriPage = () => {
  // Neden müşteri deneyimi eğitimi almalısınız verileri
  const reasons = [
    {
      icon: <FaHandshake />,
      title: "Müşteri Sadakati",
      description: "Olumlu deneyimler yaşayan müşteriler markanıza sadık kalır ve tekrarlayan iş hacmi oluşturur."
    },
    {
      icon: <FaUserFriends />,
      title: "Olumlu Referans",
      description: "İyi bir deneyim yaşayan müşteriler, markanızın gönüllü elçileri olarak çevrelerine sizi tavsiye eder."
    },
    {
      icon: <FaSmile />,
      title: "Rekabet Avantajı",
      description: "Üstün müşteri deneyimi, fiyat ve ürün özelliklerinin ötesinde sürdürülebilir bir rekabet avantajı sağlar."
    }
  ];

  // Müşteri deneyimi hizmetlerimiz
  const services = [
    {
      icon: <FaHandshake className="w-12 h-12 text-blue-600" />,
      title: "İlk Temas Anında Güven Yaratma",
      description: "Müşteri ile ilk temas anında kalıcı bir güven oluşturma ve olumlu ilk izlenim bırakma teknikleri.",
      color: "blue"
    },
    {
      icon: <FaBrain className="w-12 h-12 text-purple-600" />,
      title: "Müşteri Neyi Hatırlar?",
      description: "Deneyimin en kritik anlarının (müşteri yolculuğunda zirve ve bitiş noktaları) etkili yönetimi.",
      color: "purple"
    },
    {
      icon: <FaRegCommentDots className="w-12 h-12 text-amber-600" />,
      title: "Temsil Dili Çalışmaları",
      description: "Yazılı ve sözlü iletişimde kurumsal temsil gücünü artıracak etkili dil becerileri.",
      color: "amber"
    },
    {
      icon: <FaComments className="w-12 h-12 text-green-600" />,
      title: "Şikayet Karşılamada Duygusal Zeka",
      description: "Zorlu müşteri durumlarını olumlu deneyime dönüştürmede duygusal zeka temelli yaklaşımlar.",
      color: "green"
    },
    {
      icon: <FaUsers className="w-12 h-12 text-orange-600" />,
      title: "Özelleştirilmiş Modüller",
      description: "Çağrı merkezi, şube, saha ekipleri için rol ve ihtiyaca göre özelleştirilmiş eğitim modülleri.",
      color: "orange"
    },
    {
      icon: <FaBuilding className="w-12 h-12 text-teal-600" />,
      title: "Kurum Kültürünün Dışa Yansıması",
      description: "Kurumsal değer ve kültürün müşteri karşısında nasıl temsil edileceğine dair bütünsel yaklaşım.",
      color: "teal"
    }
  ];

  return (
    <div className="min-h-screen pt-28">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20" style={{background: "linear-gradient(to right, rgba(239, 246, 255, 0.6), rgba(245, 180, 33, 0.05))"}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
              Müşteri Deneyimi <span style={{color: "#f5b421"}}>Eğitimleri</span>
            </h1>
            <p className="text-lg text-gray-700 mb-10 font-medium">
              Süreçten Duyguya, Temsil Gücü Odağında Deneyim
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

      {/* Müşteri Deneyimi Hizmetlerimiz */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Müşteri Deneyimi <span style={{color: "#f5b421"}}>Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600">
              Rakiplerinizden ayrışmanızı sağlayacak, müşteri sadakatini artıracak eğitim ve danışmanlık çözümlerimiz
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
              Neden Müşteri Deneyimi Eğitimi <span style={{color: "#f5b421"}}>Almalısınız?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Müşteri deneyimi, günümüzün rekabetçi pazarında işletmenizin en önemli farklılaşma noktasıdır.
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
            <h2 className="text-3xl font-bold mb-6">Unutulmaz müşteri deneyimleri yaratın</h2>
            <p className="text-lg mb-8 text-white/90">
              İşletmeniz için özel olarak tasarlanmış müşteri deneyimi eğitimleri ile rekabet avantajı elde edin.
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

export default MusteriDeneyimiEgitimleriPage; 