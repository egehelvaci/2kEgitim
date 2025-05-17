'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaMicrophone, FaUserFriends, FaComments, FaClipboardList, FaLightbulb, FaTheaterMasks, FaEdit, FaPhoneAlt, FaVideo, FaPodcast, FaSlideshare, FaRegCommentDots, FaChalkboardTeacher, FaRegLightbulb } from 'react-icons/fa';

const SunumVeSahneBecerileriPage = () => {
  // Neden sunum ve sahne becerileri eğitimi almalısınız verileri
  const reasons = [
    {
      icon: <FaLightbulb />,
      title: "Etki Ve İkna",
      description: "Daha etkili ve ikna edici sunum ve konuşma becerileriyle iş etkileşimlerinizde sonuç alma gücünüzü artırın."
    },
    {
      icon: <FaRegLightbulb />,
      title: "Profesyonel İmaj",
      description: "Güven veren sahne duruşu ve sunum becerileriyle iş hayatında profesyonel imajınızı güçlendirin."
    },
    {
      icon: <FaTheaterMasks />,
      title: "Kendine Güven",
      description: "Topluluk önünde konuşma kaygısını yönetmeyi ve her türlü ortamda özgüvenli iletişim kurmayı öğrenin."
    }
  ];

  // Sunum ve sahne becerileri hizmetlerimiz
  const services = [
    {
      icon: <FaRegCommentDots className="w-12 h-12 text-blue-600" />,
      title: "İknanın Psikolojisi ve Sahne Dili",
      description: "Dinleyiciyi ikna etmek için gerekli sözsüz iletişim ve sahne dili teknikleri, beden dilinizin bilinçli kullanımı.",
      color: "blue"
    },
    {
      icon: <FaMicrophone className="w-12 h-12 text-purple-600" />,
      title: "Topluluk Önünde Konuşma ve Ses Kontrolü",
      description: "Ses tonunuzu, hızınızı ve vurguları etkili kullanarak, dinleyicinin dikkatini çekme ve sürdürme teknikleri.",
      color: "purple"
    },
    {
      icon: <FaEdit className="w-12 h-12 text-amber-600" />,
      title: "Sadeleştirme ve Yapılandırılmış Anlatım",
      description: "Karmaşık konuları sadeleştirme, ana fikri öne çıkaran ve akılda kalıcı bir yapıda sunma becerileri.",
      color: "amber"
    },
    {
      icon: <FaUserFriends className="w-12 h-12 text-green-600" />,
      title: "Katılımcıya Göre Uyarlanabilir Anlatım",
      description: "Farklı dinleyici profillerine göre sunum içeriğini ve anlatım tarzını uyarlama, hedef kitleye özel iletişim.",
      color: "green"
    },
    {
      icon: <FaVideo className="w-12 h-12 text-orange-600" />,
      title: "Gerçek Sunum Kayıtları Üzerinden Çalışma",
      description: "Katılımcıların kendi sunum kayıtları üzerinden analiz, geri bildirim ve pratik gelişim uygulamaları.",
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
              Sunum ve Sahne <span style={{color: "#f5b421"}}>Becerileri</span>
            </h1>
            <p className="text-lg text-gray-700 mb-10 font-medium">
              Etkili Anlatım, Sahne Duruşu, Güven Veren Sunum
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

      {/* Sunum Becerileri Hizmetlerimiz */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Sunum Becerileri <span style={{color: "#f5b421"}}>Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600">
              İş hayatında veya konferanslarda etkileyici, güven veren ve akılda kalıcı sunumlar yapabilmeniz için geliştirme çözümlerimiz
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
              Neden Sunum Becerileri Eğitimi <span style={{color: "#f5b421"}}>Almalısınız?</span>
            </h2>
            <p className="text-lg text-gray-600">
              Etkili sunum ve konuşma becerileri, iş hayatında farklılaşmanızı ve fikirlerinizin değer görmesini sağlayan temel yetkinliklerdir.
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
            <h2 className="text-3xl font-bold mb-6">Etkileyici sunumlarla fark yaratın</h2>
            <p className="text-lg mb-8 text-white/90">
              Kişisel veya kurumsal sunum becerilerinizi geliştirmek için özel tasarlanmış eğitim programlarımızdan yararlanın.
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

export default SunumVeSahneBecerileriPage; 