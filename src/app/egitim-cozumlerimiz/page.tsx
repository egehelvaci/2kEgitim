'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaUsers, FaUserTie, FaChalkboardTeacher, FaLaptop, FaHardHat, FaBuilding, FaArrowRight, FaGraduationCap, FaPhoneAlt, FaHandshake, FaLaptopCode, FaSearch, FaFilter } from 'react-icons/fa';
import Link from 'next/link';
import TrainingCategory from '@/components/TrainingCategory';

export default function EgitimCozumlerimizPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [animateCards, setAnimateCards] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    setAnimateCards(true);
  }, []);

  const categories = [
    {
      id: 'satis',
      title: 'Satış ve Müşteri Deneyimi Eğitimleri',
      icon: <FaHandshake className="w-8 h-8 text-accent" />,
      imageSrc: '/images/egitim-cozumlerimiz/satis-egitimi.jpg',
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
      imageSrc: '/images/egitim-cozumlerimiz/yonetici-gelisimi.jpg',
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
      imageSrc: '/images/egitim-cozumlerimiz/yonetici-gelisimi.jpg',
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
      imageSrc: '/images/egitim-cozumlerimiz/dijital-egitim.jpg',
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
      imageSrc: '/images/egitim-cozumlerimiz/satis-egitimi.jpg',
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block rounded-full bg-white/80 backdrop-blur-sm px-6 py-2 border border-blue-100 mb-6 shadow-md">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-medium">
                Kurumsal Gelişim Programları
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
              Her Şeyi Değil, <span className="text-accent">Bildiğimizi Yapıyoruz</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Sektörünüze özel tasarlanmış, işin mutfağından gelen gerçek deneyimle hazırlanmış 
              eğitim ve gelişim programlarımız ile kurumsal başarınızı bir üst seviyeye taşıyın.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/iletisim" className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-medium inline-flex items-center transition-all transform hover:scale-105 shadow-lg">
                Bize Ulaşın
                <FaArrowRight className="ml-2" />
              </Link>
              <a href="#eğitimler" className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-full font-medium inline-flex items-center transition-all border border-gray-200 shadow-md hover:shadow-lg">
                Eğitimleri İncele
                <FaGraduationCap className="ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Arama ve Filtre Bölümü */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 overflow-hidden shadow-sm">
                <div className="pl-5">
                  <FaSearch className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Eğitim programı ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-4 px-4 bg-transparent outline-none text-gray-700"
                />
                <button 
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="bg-gray-100 h-full px-5 py-4 flex items-center border-l border-gray-200 hover:bg-gray-200 transition-colors"
                >
                  <FaFilter className={`${filterOpen ? 'text-accent' : 'text-gray-500'}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Eğitim Kategorileri */}
      <section className="py-16 bg-white" id="eğitimler">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent font-medium bg-accent/5 px-4 py-1 rounded-full"
            >
              Eğitim Çeşitlerimiz
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mt-4 mb-6"
            >
              Eğitimlerimiz
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              İhtiyacınıza uygun eğitim kategorisini seçerek detaylı bilgi alabilirsiniz.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative p-6 rounded-xl transition-all duration-300 overflow-hidden group ${
                  activeTab === index 
                    ? 'bg-accent text-white shadow-lg shadow-accent/30' 
                    : 'bg-white hover:bg-gray-50 border border-gray-100 hover:border-accent/30'
                }`}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center">
                  <div className={`mb-4 p-3 rounded-full ${
                    activeTab === index ? 'bg-white/20' : 'bg-accent/10'
                  }`}>
                    {cat.icon}
                  </div>
                  <h3 className={`text-base font-semibold text-center transition-colors`}>
                    {cat.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl mb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8"
              >
                <div className="md:order-2 relative h-[400px] md:h-auto overflow-hidden rounded-xl">
                  <Image 
                    src={categories[activeTab].imageSrc}
                    alt={categories[activeTab].title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                    <div className="p-8">
                      <h3 className="text-white text-3xl font-bold mb-3">{categories[activeTab].title}</h3>
                      <p className="text-white/90 text-lg">{categories[activeTab].courses.length} farklı eğitim programı</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="p-4 rounded-xl bg-accent/10">
                      {categories[activeTab].icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold ml-4 text-gray-800">
                      {categories[activeTab].title}
                    </h2>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                      <FaGraduationCap className="mr-2 text-accent" /> Eğitim Programları
                    </h3>
                    <div className="max-h-[300px] overflow-y-auto pr-4 space-y-4 custom-scrollbar">
                      {categories[activeTab].courses.map((course, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                        >
                          <div className="w-2 h-2 rounded-full bg-accent mr-4 mt-2"></div>
                          <div>
                            <p className="text-gray-800 font-medium">{course.title}</p>
                            <p className="text-gray-500 text-sm mt-1">{course.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href="/iletisim" 
                    className="inline-flex items-center justify-center px-6 py-4 bg-accent text-white rounded-xl hover:bg-accent-dark transition-colors shadow-lg hover:shadow-xl hover:shadow-accent/20 transform hover:translate-y-[-2px]"
                  >
                    Bu Eğitim Hakkında Bilgi Al
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* All Programs Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-medium bg-accent/5 px-4 py-1 rounded-full">Tüm Programlarımız</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Eğitim Çözümlerimiz</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              İşletmenizin ihtiyaçlarına uygun eğitim ve gelişim programları
            </p>
          </div>
          
          {searchQuery && filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-gray-50 p-8 rounded-xl max-w-2xl mx-auto"
              >
                <FaSearch className="mx-auto text-4xl text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">Sonuç Bulunamadı</h3>
                <p className="text-gray-600">
                  "{searchQuery}" araması için eğitim programı bulunamadı. Lütfen farklı anahtar kelimelerle tekrar deneyin.
                </p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors"
                >
                  Filtreyi Temizle
                </button>
              </motion.div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                animate={animateCards ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TrainingCategory 
                  title={category.title}
                  courses={category.courses}
                  imageSrc={category.imageSrc}
                  icon={category.icon}
                />
              </motion.div>
            ))}
          </div>
          
          {filteredCategories.length > 0 && (
            <div className="text-center mt-12">
              <Link 
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-full hover:bg-accent-dark transition-colors shadow-lg hover:shadow-xl hover:shadow-accent/20 transform hover:translate-y-[-2px]"
              >
                Tüm Eğitimler Hakkında Bilgi Al
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute transform rotate-45 -right-24 -top-24 w-96 h-96 rounded-full bg-white"></div>
          <div className="absolute transform -rotate-45 -left-24 top-36 w-72 h-72 rounded-full bg-white"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Size Özel Eğitim Çözümleri</h2>
            <p className="text-white/90 text-lg mb-10">
              2K Eğitim, sektörünüze ve ihtiyaçlarınıza özel eğitim çözümleri için yanınızda. 
              Satış ekibinizi güçlendirmek, müşteri deneyiminizi iyileştirmek veya yönetici 
              kadronuzu geliştirmek için şirketinize özel programlarla hizmetinizdeyiz.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="/iletisim"
                className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-full font-medium inline-flex items-center transition-all transform hover:scale-105 shadow-lg"
              >
                <FaPhoneAlt className="mr-2" /> Hemen İletişime Geçin
              </Link>
              <Link 
                href="#eğitimler"
                className="bg-transparent text-white border-2 border-white/80 hover:bg-white/10 px-8 py-4 rounded-full font-medium inline-flex items-center transition-all"
              >
                <FaGraduationCap className="mr-2" /> Eğitimlere Dön
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