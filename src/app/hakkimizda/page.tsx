'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { useEffect } from 'react';

export default function HakkimizdaPage() {
  // Animasyonlar için kontrol
  const controls = useAnimation();

  // Sayfa yüklendiğinde animasyonları başlat
  useEffect(() => {
    // Sayfa görünür olduktan sonra animasyonları başlat
    controls.start('visible');
  }, [controls]);

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
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sahadan Gelen <span style={{color: "#f5b421"}}>Eğitim Gücü</span></h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              2K Eğitim, eğitimi bir sunum değil; kurumların gelişimine yön veren bir dönüşüm aracı olarak görür. 
              25 yılı aşkın saha ve eğitim deneyimimizle, hazır kalıplar yerine kurumunuza özel, davranışa yansıyan çözümler geliştiriyoruz. 
              Sahada karşılığı olmayan hiçbir içerik ya da uygulamayı "çözüm" olarak sunmuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kurucunun Mesajı Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              className="relative flex flex-col items-center"
            >
              <div className="relative mb-4 mx-auto">
                <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto">
                  <Image
                    src="/images/hakkimizda/kurucumuz.png"
                    alt="Koray Karataş"
                    fill
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: '54% 50%'
                    }}
                    className="shadow-lg"
                    priority
                  />
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold">Koray Karataş</h3>
                <p className="text-gray-600">Kurucu – Eğitmen & Danışman</p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              className="mt-8 md:mt-0"
            >
              <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Kurucunun <span style={{color: "#f5b421"}}>Mesajı</span></h2>
              <div className="bg-gray-50 p-5 md:p-6 rounded-xl shadow-sm mb-6 relative">
                <div className="text-4xl md:text-5xl text-gray-200 absolute top-4 left-4">"</div>
                <p className="text-gray-700 mb-4 relative z-10 px-4 md:px-6 pt-4">
                  Bir eğitimin kalitesi, sahada işe yarayıp yaramadığıyla ölçülür. Bu yüzden yıllardır kurumlara sadece 
                  içerik değil, çözüm üreten bir yaklaşım sunuyorum.
                </p>
                <p className="text-gray-700 mb-4 relative z-10 px-4 md:px-6 pb-4">
                  Hazır sunumlar yerine, temsilcilerle birlikte sahada yürümeyi tercih ediyorum.
                  Çünkü gerçek değişim; sürecin içine birlikte dâhil olduğumuzda başlar.
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
              initial="hidden"
              animate={controls}
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
            >
              2K Eğitim'in <span style={{color: "#f5b421"}}>Farkı</span>
            </motion.h2>
          </div>

          <div className="bg-white p-5 md:p-8 rounded-xl shadow-md max-w-3xl mx-auto">
            <motion.ul 
              initial="hidden"
              animate={controls}
              variants={containerVariants}
              className="space-y-4 md:space-y-6"
            >
              {differences.map((difference, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <FaCheckCircle className="text-accent mt-1 mr-3 flex-shrink-0 text-base md:text-lg" />
                  <p className="text-base md:text-lg">{difference}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Esnek Yapı ve İşbirliği Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              animate={controls}
              variants={itemVariants}
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
            initial="hidden"
            animate={controls}
            variants={itemVariants}
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