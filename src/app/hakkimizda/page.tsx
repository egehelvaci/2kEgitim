'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function HakkimizdaPage() {
  // 2K Eğitim'in Farkı
  const differences = [
    '28 yıllık saha ve eğitim tecrübesi',
    'Bankacılık, sigorta, telekom, kamu dahil birçok sektörde uygulama',
    'Kuruma özel eğitim tasarımı',
    'İçerik geliştirme + uygulama + dijitalleştirme becerisi',
    'Hazır değil, yaşayan eğitim programları'
  ];

  // Sayfa içeriği için animasyon seçenekleri
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sahadan Gelen <span style={{color: "#f5b421"}}>Eğitim Gücü</span></h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              2K Eğitim ve Danışmanlık, kurucusu Koray Karataş'ın 28 yıllık saha ve eğitim tecrübesiyle kurulmuştur.
              Eğitimleri hazır kalıplarla değil, kurumun iç dinamiklerini analiz ederek tasarlarız. Sadece bilgi aktarmayı değil, 
              sahada karşılığı olan davranış dönüşümünü hedefleriz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kurucunun Mesajı Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center md:items-start"
            >
              <div className="relative w-56 h-56 md:w-72 md:h-72 mb-4 flex justify-center md:justify-start">
                <div className="relative w-56 h-56 md:w-72 md:h-72">
                  <Image
                    src="/images/hakkimizda/kurucumuz.png"
                    alt="Koray Karataş"
                    fill
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                    className="shadow-lg"
                  />
                </div>
              </div>
              <div className="text-center md:text-left mt-2">
                <h3 className="text-xl font-bold">Koray Karataş</h3>
                <p className="text-gray-600">Kurucu – Eğitmen & Danışman</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 md:mt-0"
            >
              <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Kurucunun <span style={{color: "#f5b421"}}>Mesajı</span></h2>
              <div className="bg-gray-50 p-5 md:p-6 rounded-xl shadow-sm mb-6 relative">
                <div className="text-4xl md:text-5xl text-gray-200 absolute top-4 left-4">"</div>
                <p className="text-gray-700 mb-4 relative z-10 px-4 md:px-6 pt-4">
                  Bir eğitimin kalıcılığı, sahada işe yarayıp yaramadığıyla ölçülür. Bu yüzden yıllardır kurumlara sadece 
                  içerik değil, sonuç üreten bir yaklaşım sunuyorum. 
                </p>
                <p className="text-gray-700 mb-4 relative z-10 px-4 md:px-6 pb-4">
                  Hazır sunumlar yerine, temsilciyle birlikte sahaya inmeyi tercih ediyorum. Çünkü değişim, uzaktan değil; 
                  içeriden yaşanır.
                </p>
                <div className="text-4xl md:text-5xl text-gray-200 absolute bottom-4 right-4">"</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2K Eğitim'in Farkı Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
            >
              2K Eğitim'in <span style={{color: "#f5b421"}}>Farkı</span>
            </motion.h2>
          </div>

          <div className="bg-white p-5 md:p-8 rounded-xl shadow-md max-w-3xl mx-auto">
            <ul className="space-y-4 md:space-y-6">
              {differences.map((difference, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <FaCheckCircle className="text-accent mt-1 mr-3 flex-shrink-0 text-base md:text-lg" />
                  <p className="text-base md:text-lg">{difference}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Esnek Yapı ve İşbirliği Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">Esnek Yapı ve <span style={{color: "#f5b421"}}>İşbirliği Modeli</span></h2>
              <div className="bg-gray-50 p-5 md:p-8 rounded-xl shadow-md">
                <p className="text-gray-700 mb-4 text-base md:text-lg">
                  2K Eğitim, şu anda ağırlıklı olarak kurucusunun birebir yürüttüğü bir yapıdadır. İhtiyaç halinde uzman 
                  eğitmenlerle iş birliği yapılmakta; her projeye uygun bir çözüm ortağıyla ilerlenmektedir.
                </p>
                <p className="text-gray-700 text-base md:text-lg">
                  Bu esnek yapı, her kurumun kendine özgü ihtiyaçlarına daha hızlı ve etkili çözümler sunmamızı sağlar. 
                  Sizin ihtiyaçlarınıza en uygun uzman ekibi oluşturarak, en verimli sonucu elde etmeyi hedefliyoruz.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16" style={{backgroundColor: "#f5b421"}}>
        <div className="container-custom text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Kurumunuza özel çözüm tasarımı için birlikte konuşalım
            </h2>
            <Link 
              href="/iletisim"
              className="inline-flex items-center bg-white text-accent font-bold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 mt-4 md:mt-6 text-sm md:text-base"
            >
              Bizimle İletişime Geçin <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
} 