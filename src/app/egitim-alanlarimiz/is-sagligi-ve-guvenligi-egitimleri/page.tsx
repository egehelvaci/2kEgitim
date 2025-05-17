'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaHardHat, FaFireExtinguisher, FaToolbox, FaClipboardList, FaLightbulb, FaExclamationTriangle, FaHeartbeat, FaPhoneAlt, FaClipboardCheck, FaRegLightbulb, FaUserShield, FaMountain, FaShieldAlt } from 'react-icons/fa';

const IsSagligiVeGuvenligiEgitimleriPage = () => {
  // Neden İSG eğitimi almalısınız verileri
  const reasons = [
    {
      icon: <FaUserShield />,
      title: "Çalışan Güvenliği",
      description: "İş kazalarını ve meslek hastalıklarını önleyerek çalışanlarınızın sağlığını ve güvenliğini koruyun."
    },
    {
      icon: <FaLightbulb />,
      title: "Yasal Zorunluluk",
      description: "İSG mevzuatına uyum sağlayarak yasal yükümlülüklerinizi yerine getirin ve olası cezalardan kaçının."
    },
    {
      icon: <FaHeartbeat />,
      title: "Güvenlik Kültürü",
      description: "Kurumunuzda sürdürülebilir bir güvenlik kültürü oluşturarak uzun vadeli çalışan bağlılığını artırın."
    }
  ];

  // İSG eğitim hizmetlerimiz
  const services = [
    {
      icon: <FaShieldAlt className="w-12 h-12 text-blue-600" />,
      title: "Temel İş Sağlığı ve Güvenliği Eğitimi",
      description: "Mevzuat, iş kazaları, meslek hastalıkları, risk değerlendirme ve İSG'nin temel kavramlarını içeren kapsamlı eğitim.",
      color: "blue"
    },
    {
      icon: <FaMountain className="w-12 h-12 text-purple-600" />,
      title: "Yüksekte Çalışma ve Kurtarma Eğitimi",
      description: "Güvenli yüksekte çalışma teknikleri, düşüş durdurma sistemleri ve acil kurtarma prosedürleri üzerine uygulamalı eğitim.",
      color: "purple"
    },
    {
      icon: <FaFireExtinguisher className="w-12 h-12 text-amber-600" />,
      title: "Yangın Güvenliği ve Acil Durum Eğitimi",
      description: "Yangın önleme, tahliye prosedürleri ve acil durum müdahale teknikleri ile kriz anında hazırlıklı olma eğitimi.",
      color: "amber"
    },
    {
      icon: <FaToolbox className="w-12 h-12 text-green-600" />,
      title: "İş Ekipmanlarının Güvenli Kullanımı",
      description: "Sektöre özel iş ekipmanlarının güvenli kullanımı, bakımı ve kontrol prosedürleri üzerine uygulamalı eğitim.",
      color: "green"
    },
    {
      icon: <FaExclamationTriangle className="w-12 h-12 text-orange-600" />,
      title: "Risk Değerlendirme ve Yönetim Teknikleri",
      description: "İş yerinde riskleri tespit etme, analiz etme ve önleyici tedbirler geliştirme konularında metodolojik yaklaşım.",
      color: "orange"
    },
    {
      icon: <FaRegLightbulb className="w-12 h-12 text-teal-600" />,
      title: "Çalışanlara Yönelik İSG Farkındalık Eğitimleri",
      description: "Günlük çalışma hayatında güvenlik farkındalığını artırmaya yönelik interaktif ve uygulamalı eğitim programları.",
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
              İş Sağlığı ve Güvenliği <span style={{color: "#f5b421"}}>Eğitimleri</span>
            </h1>
            <p className="text-lg text-gray-700 mb-10 font-medium">
              Güvenli Çalışma Kültürü İçin Uygulamalı İSG Eğitimleri
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

      {/* Giriş Bölümü */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Kurumunuza Özel <span style={{color: "#f5b421"}}>İSG Çözümleri</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Çalışanların güvenliğini artırmak ve iş kazalarının önüne geçmek amacıyla kurumlara özel İş Sağlığı ve Güvenliği Eğitimleri sunuyoruz.
                Temel İSG mevzuatı, risk analizi, acil durum yönetimi, yüksekte çalışma ve iş ekipmanlarının güvenli kullanımı gibi konularda, teorik
                bilgiyi uygulamalı eğitimlerle pekiştiriyoruz.
              </p>
            </div>
            
            <div className="mt-12 p-8 rounded-xl bg-blue-50 border border-blue-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Eğitim Yaklaşımımız</h3>
              <p className="text-gray-700 mb-4">
                Eğitimlerimiz yalnızca yasal zorunlulukları karşılamakla kalmaz; çalışan farkındalığını artırır, kurum içinde sürdürülebilir bir güvenlik
                kültürü oluşturur.
              </p>
              <p className="text-gray-700">
                Kurumunuza özel yapılandırılmış, uzman eğitmenlerce verilen sahaya uygun çözümler sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İSG Eğitim Hizmetlerimiz */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              İSG Eğitim <span style={{color: "#f5b421"}}>Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600">
              Verilen Başlıca İSG Eğitimlerimiz ile kurumunuzda güvenli çalışma kültürünü teşvik edin
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
              Neden İSG Eğitimi <span style={{color: "#f5b421"}}>Almalısınız?</span>
            </h2>
            <p className="text-lg text-gray-600">
              İSG eğitimleri hem yasal bir zorunluluk hem de kurumunuzun ve çalışanlarınızın geleceği için kritik öneme sahiptir.
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
            <h2 className="text-3xl font-bold mb-6">Güvenli çalışma kültürünü güçlendirin</h2>
            <p className="text-lg mb-8 text-white/90">
              Kurumunuz için özel olarak tasarlanmış İSG eğitim programlarıyla hem yasal yükümlülüklerinizi karşılayın hem de çalışanlarınızı koruyun.
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

export default IsSagligiVeGuvenligiEgitimleriPage; 