'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaUserTie, FaHardHat, FaBuilding, FaArrowRight, FaGraduationCap, FaPhoneAlt, FaHandshake, FaLaptopCode, FaSearch, FaFilter, FaChartLine, FaHeadset, FaChalkboardTeacher, FaPodcast, FaVideo } from 'react-icons/fa';
import Link from 'next/link';
import TrainingCategory from '@/components/TrainingCategory';

export default function EgitimAlanlarimizPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [animateCards, setAnimateCards] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setAnimateCards(true);
    setIsMounted(true);
  }, []);

  const categories = [
    {
      id: 'satis',
      title: 'Satış ve Müşteri Deneyimi Eğitimleri',
      icon: <FaHandshake className="w-8 h-8 text-accent" />,
      imageSrc: '/images/egitim-alanlarimiz/satis-egitimi.jpg',
      courses: [
        {
          title: 'Satış Eğitimleri',
          description: 'Gerçek deneyime dayalı sahada etkili satış becerileri geliştirme'
        },
        {
          title: 'Müşteri Deneyimi Eğitimleri',
          description: 'İlk temastan sadakate kadar müşteri yolculuğunun her adımında mükemmel deneyim'
        },
        {
          title: 'Çağrı Merkezi Eğitimleri',
          description: 'Telefonda profesyonel ikna ve hizmet becerileri'
        },
        {
          title: 'İtiraz Karşılama ve İkna Teknikleri',
          description: 'Zorlayıcı müşteri itirazlarını ustalıkla yönetme'
        },
        {
          title: 'Saha Koçluğu',
          description: 'Eğitim sonrası sahada birebir gelişim ve performans takibi'
        },
        {
          title: 'Saha Satış Gücü Gelişim Programları',
          description: 'Saha ekiplerine performans artışı sağlayan yapılandırılmış gelişim'
        }
      ]
    },
    {
      id: 'kobi',
      title: 'KOBİ\'ler için Kredi Skor Yönetimi',
      icon: <FaBuilding className="w-8 h-8 text-accent" />,
      imageSrc: '/images/egitim-alanlarimiz/yonetici-gelisimi.jpg',
      courses: [
        {
          title: 'Finansal Sağlık Yönetimi',
          description: 'Ticari kredi skorlarını koruma ve geliştirme stratejileri'
        },
        {
          title: 'Finansal Tablo Analizi',
          description: 'Finansal tabloların ve nakit akışlarının skora etkisini anlama'
        },
        {
          title: 'Ödeme Disiplini Yönetimi',
          description: 'Ödeme disiplininin nasıl yönetileceği konusunda detaylı bilgiler'
        },
        {
          title: 'Risk Primi Azaltma',
          description: 'Risk primini azaltma yolları ve etkin finans yönetimi'
        },
        {
          title: 'Sağlıklı Kredi Kullanımı',
          description: 'Sağlıklı kredi kullanımı prensipleri ve uygulamalı örnekler'
        }
      ]
    },
    {
      id: 'yonetici',
      title: 'Yönetici ve Koçluk Gelişim Programları',
      icon: <FaUserTie className="w-8 h-8 text-accent" />,
      imageSrc: '/images/egitim-alanlarimiz/yonetici-gelisimi.jpg',
      courses: [
        {
          title: 'Yönetici Gelişim Programları',
          description: 'Sahadan gelen liderlik becerileri ve ekip yönetimi'
        },
        {
          title: 'Koçluk ve Gelişim Programları',
          description: 'Bireysel ve kurumsal koçluk çözümleri'
        },
        {
          title: 'Sunum ve Etkili İletişim Becerileri',
          description: 'Etkili sunumla ikna ve güven yaratma teknikleri'
        },
        {
          title: 'Performans Yönetimi',
          description: 'Ekip performansını ölçme ve geliştirme stratejileri'
        },
        {
          title: 'Liderlik Becerileri',
          description: 'Etkin liderlik ve yönetim becerileri geliştirme'
        }
      ]
    },
    {
      id: 'dijital',
      title: 'Dijital Eğitim ve Know-How Dönüşümü',
      icon: <FaLaptopCode className="w-8 h-8 text-accent" />,
      imageSrc: '/images/egitim-alanlarimiz/dijital-egitim.jpg',
      courses: [
        {
          title: 'Dijital Eğitim İçerikleri',
          description: 'Kuruma özel senaryolarla, etkili ve sürükleyici eğitim modülleri'
        },
        {
          title: 'Video Prodüksiyonu',
          description: 'Profesyonel prodüksiyon yönetimi (senaryo, çekim, kurgu, montaj)'
        },
        {
          title: 'Kurumsal Hafıza Yönetimi',
          description: 'Bilgi birikimini kurumsal hafızaya kazandırma stratejileri'
        },
        {
          title: 'KOBİ Dijital Çözümleri',
          description: 'KOBİ\'lere özel ekonomik dijital eğitim çözümleri'
        },
        {
          title: 'Know-How Dönüşümü',
          description: 'Saha tecrübesi ve uzmanlık bilgisini eğitim modüllerine dönüştürme'
        }
      ]
    },
    {
      id: 'isg',
      title: 'İş Sağlığı ve Güvenliği Eğitimleri',
      icon: <FaHardHat className="w-8 h-8 text-accent" />,
      imageSrc: '/images/egitim-alanlarimiz/satis-egitimi.jpg',
      courses: [
        {
          title: 'Temel İş Sağlığı ve Güvenliği',
          description: 'Yasal zorunlulukları karşılayan temel İSG eğitimleri'
        },
        {
          title: 'Yüksekte Çalışma ve Kurtarma',
          description: 'Güvenli yüksekte çalışma teknikleri ve kurtarma prosedürleri'
        },
        {
          title: 'Yangın Güvenliği ve Acil Durum',
          description: 'Yangın güvenliği ve acil durumlara müdahale eğitimleri'
        },
        {
          title: 'İş Ekipmanlarının Güvenli Kullanımı',
          description: 'İş ekipmanlarının güvenli kullanımı için uygulamalı eğitimler'
        },
        {
          title: 'Risk Değerlendirme ve Yönetim',
          description: 'Risk analizi, değerlendirme ve yönetim teknikleri'
        },
        {
          title: 'İSG Farkındalık Eğitimleri',
          description: 'Çalışanlara yönelik İSG farkındalık programları'
        }
      ]
    }
  ];

  // Arama işlevi
  const filteredCategories = searchQuery 
    ? categories.map(category => ({
        ...category,
        courses: category.courses.filter(course => 
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          course.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.courses.length > 0)
    : categories;

  // Server Side Rendering ve Client Side Rendering arasındaki uyumsuzluğu önlemek için
  if (!isMounted) {
    return (
      <div className="pt-32 pb-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Kuruma Özel, Sahaya Uygun, <span className="text-accent">Davranışa Dayalı</span> Eğitimler
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Eğitimlerimiz, hazır kataloglardan değil; kurumun yapısına, hedeflerine ve sahadaki gerçeklerine göre tasarlanır. 
              Katılımcılar sadece bilgi almaz, davranış kazanır. Eğitim sonrası dönüşüm ölçülebilir, içerik sürdürülebilir hâle gelir.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute transform rotate-45 -right-24 -top-24 w-96 h-96 rounded-full bg-blue-500/10"></div>
          <div className="absolute transform -rotate-45 -left-24 top-36 w-72 h-72 rounded-full bg-indigo-500/20"></div>
          <div className="absolute bottom-12 right-16 w-48 h-48 rounded-full bg-purple-500/10"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Kuruma Özel, Sahaya Uygun, <span className="text-accent">Davranışa Dayalı</span> Eğitimler
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Eğitimlerimiz, hazır kataloglardan değil; kurumun yapısına, hedeflerine ve sahadaki gerçeklerine göre tasarlanır. 
              Katılımcılar sadece bilgi almaz, davranış kazanır. Eğitim sonrası dönüşüm ölçülebilir, içerik sürdürülebilir hâle gelir.
            </p>
          </div>
        </div>
      </section>
      
      {/* Eğitim Alanları Kartları */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Eğitim Alanlarımız</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İhtiyacınıza uygun eğitim alanını seçerek detaylı bilgilere ulaşabilirsiniz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <Link href="/egitim-alanlarimiz/bankacilik-egitimleri" className="block h-full">
                <div className="p-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <FaBuilding className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bankacılık Eğitimleri</h3>
                  <p className="text-gray-600">Bankacılık sektörüne özel tasarlanmış, uygulamaya dönük programlar</p>
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <Link href="/egitim-alanlarimiz/kobi-kredi-skor-yonetimi" className="block h-full">
                <div className="p-6">
                  <div className="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                    <FaChartLine className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">KOBİ'ler için Kredi Skor Yönetimi</h3>
                  <p className="text-gray-600">Finansal sağlık ve kredi skoru yönetimi eğitimleri</p>
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <Link href="/egitim-alanlarimiz/satis-egitimleri" className="block h-full">
                <div className="p-6">
                  <div className="w-14 h-14 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
                    <FaHandshake className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Satış Eğitimleri</h3>
                  <p className="text-gray-600">İtiraz karşılama, ikna ve fayda sunumu teknikleri</p>
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <Link href="/egitim-alanlarimiz/musteri-deneyimi-egitimleri" className="block h-full">
                <div className="p-6">
                  <div className="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <FaHeadset className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Müşteri Deneyimi Eğitimleri</h3>
                  <p className="text-gray-600">Temsil dili, empati ve duygusal zeka teknikleri</p>
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <Link href="/egitim-alanlarimiz/yonetici-gelisimi-ve-kocluk" className="block h-full">
                <div className="p-6">
                  <div className="w-14 h-14 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                    <FaUserTie className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Yönetici Gelişimi ve Koçluk</h3>
                  <p className="text-gray-600">Koçvari liderlik, geri bildirim ve rol farkındalığı</p>
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <Link href="/egitim-alanlarimiz/egiticinin-egitimi" className="block h-full">
                <div className="p-6">
                  <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                    <FaChalkboardTeacher className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Eğiticinin Eğitimi</h3>
                  <p className="text-gray-600">Kurum içi eğitmen havuzu oluşturma ve aktarım teknikleri</p>
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <Link href="/egitim-alanlarimiz/sunum-ve-sahne-becerileri" className="block h-full">
                <div className="p-6">
                  <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                    <FaPodcast className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sunum ve Sahne Becerileri</h3>
                  <p className="text-gray-600">Etkili anlatım, sahnede duruş ve ikna gücü</p>
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <Link href="/egitim-alanlarimiz/dijital-egitim-ve-video-icerik" className="block h-full">
                <div className="p-6">
                  <div className="w-14 h-14 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                    <FaVideo className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Dijital Eğitim ve Video İçerik</h3>
                  <p className="text-gray-600">Video senaryosu, prodüksiyon ve LMS uyumlu içerik</p>
                </div>
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <Link href="/egitim-alanlarimiz/is-sagligi-ve-guvenligi-egitimleri" className="block h-full">
                <div className="p-6">
                  <div className="w-14 h-14 bg-yellow-50 rounded-lg flex items-center justify-center mb-4">
                    <FaHardHat className="w-6 h-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">İş Sağlığı ve Güvenliği Eğitimleri</h3>
                  <p className="text-gray-600">Uygulamalı, mevzuata uygun ve farkındalık kazandırıcı</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ddd;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }
      `}</style>
    </>
  );
} 