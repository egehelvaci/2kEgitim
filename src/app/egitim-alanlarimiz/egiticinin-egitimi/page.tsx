'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaGraduationCap, FaEdit, FaUserFriends, FaClipboardList, FaLightbulb, FaUserTie, FaComments, FaPhoneAlt, FaHeadset, FaMicrophone, FaFileAlt, FaEye, FaChalkboardTeacher, FaRegLightbulb } from 'react-icons/fa';

const EgiticininEgitimiPage = () => {
  // Neden eğiticinin eğitimi almalısınız verileri
  const reasons = [
    {
      icon: <FaLightbulb />,
      title: "İç Kaynak Etkinliği",
      description: "Dış eğitimcilere bağımlılığınızı azaltarak, kurum kültürünüzü bilen iç eğitmen kadrosu oluşturun."
    },
    {
      icon: <FaRegLightbulb />,
      title: "Sürdürülebilir Gelişim",
      description: "Kurumunuzda sürekli öğrenme kültürü oluşturarak kurumsal hafızayı güçlendirin ve gelişimi sürdürülebilir kılın."
    },
    {
      icon: <FaGraduationCap />,
      title: "Uygulamada Başarı",
      description: "Eğitimlerin iş süreçlerine daha etkili entegrasyonu ve yüksek uygulama başarısı elde edin."
    }
  ];

  // Eğiticinin eğitimi hizmetlerimiz
  const services = [
    {
      icon: <FaChalkboardTeacher className="w-12 h-12 text-blue-600" />,
      title: "Kurum İçi Eğitmen Yetiştirme",
      description: "Kurumunuza özel iç eğitmen havuzu oluşturma ve eğitmenlerin yetkinliklerini geliştirme programı.",
      color: "blue"
    },
    {
      icon: <FaFileAlt className="w-12 h-12 text-purple-600" />,
      title: "İçerik Sadeleştirme ve Yapılandırma",
      description: "Karmaşık konuların etkili aktarımı için içerik sadeleştirme, yapılandırma ve görselleştirme teknikleri.",
      color: "purple"
    },
    {
      icon: <FaMicrophone className="w-12 h-12 text-amber-600" />,
      title: "Mikro ve Aktif Öğrenme Teknikleri",
      description: "Kısa, odaklı mikro öğrenme modülleri tasarlama ve katılımcıyı sürece dahil eden aktif öğrenme yöntemleri.",
      color: "amber"
    },
    {
      icon: <FaEye className="w-12 h-12 text-green-600" />,
      title: "Katılımcı Odaklı Eğitmen Yaklaşımı",
      description: "Dinlemeyi, gözlemlemeyi ve bireysel gelişimi takip edebilmeyi sağlayan katılımcı odaklı eğitmen becerileri.",
      color: "green"
    },
    {
      icon: <FaComments className="w-12 h-12 text-orange-600" />,
      title: "Uygulamalı Prova ve Geri Bildirim",
      description: "Video kayıtları ile eğitmen performansının analizi, prova çalışmaları ve yapıcı geri bildirim sistemleri.",
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
              Eğiticinin <span style={{color: "#f5b421"}}>Eğitimi</span>
            </h1>
            <p className="text-lg text-gray-700 mb-10 font-medium">
              İç Eğitmen Havuzu Kurulumu ve Aktarım Becerileri
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

      {/* Eğiticinin Eğitimi Hizmetlerimiz */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Eğiticinin Eğitimi <span style={{color: "#f5b421"}}>Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600">
              Kurumunuzun içinde sürdürülebilir gelişim kültürü oluşturacak iç eğitmen yetiştirme çözümlerimiz
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
              Neden Eğiticinin Eğitimi <span style={{color: "#f5b421"}}>Almalısınız?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Kurum içi bilgi aktarımını güçlendirmek ve sürdürülebilir bir gelişim kültürü oluşturmak için iç eğitmen yetiştirme programları.
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
            <h2 className="text-3xl font-bold mb-6">İç eğitmen kapasitenizi güçlendirin</h2>
            <p className="text-lg mb-8 text-white/90">
              Kurumunuz için özel olarak tasarlanmış eğiticinin eğitimi programları ile kurumsal gelişim kültürünü içselleştirin.
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

export default EgiticininEgitimiPage; 