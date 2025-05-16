'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCheckCircle, FaUsers, FaChalkboardTeacher, FaLaptopCode, FaHandshake } from 'react-icons/fa';

export default function HakkimizdaPage() {
  // Değerlerimiz için veri
  const values = [
    {
      icon: <FaUsers className="h-10 w-10 text-accent" />,
      title: 'Müşteri Odaklılık',
      description: 'Her kurumun kendine özgü ihtiyaçlarını anlar, çözümlerimizi bu doğrultuda şekillendiririz.'
    },
    {
      icon: <FaChalkboardTeacher className="h-10 w-10 text-accent" />,
      title: 'Deneyimsel Öğrenme',
      description: 'Teoriyi pratiğe, deneyimi kalıcı öğrenmeye dönüştüren metodolojiler kullanırız.'
    },
    {
      icon: <FaLaptopCode className="h-10 w-10 text-accent" />,
      title: 'Yenilikçilik',
      description: 'Dijital çağın gerektirdiği yenilikçi eğitim çözümlerini sunar, teknolojinin gücünü kullanırız.'
    },
    {
      icon: <FaHandshake className="h-10 w-10 text-accent" />,
      title: 'İş Ortaklığı',
      description: 'Müşterilerimizle iş ortağı mantığıyla çalışır, kurumlarının başarısını kendi başarımız olarak görürüz.'
    }
  ];

  // Benzersiz Avantajlarımız
  const advantages = [
    '29 yıllık saha ve kurumsal deneyim',
    'Gerçek iş hayatının deneyimlerine dayalı uygulamalı eğitimler',
    'Eğitimden dijital içerik üretimine anahtar teslim çözümler',
    'Her aşamada ölçülebilir gelişim hedefi'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Gerçek deneyimlerden beslenen eğitimlerimizle kurumunuzun başarısına katkı sağlıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biz Kimiz Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <Image
                src="/images/hakkimizda/about-us.jpg"
                alt="2K Eğitim ve Danışmanlık"
                fill
                className="object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent p-6 rounded-xl shadow-lg">
                <p className="text-white text-2xl font-bold">29+</p>
                <p className="text-white">Yıllık Deneyim</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Biz Kimiz?</h2>
              <p className="text-gray-700 mb-4">
                2K Eğitim ve Danışmanlık, satış, müşteri deneyimi, yönetici gelişimi ve dijital eğitim alanlarında uzmanlaşmış bir eğitim ve gelişim şirketidir.
              </p>
              <p className="text-gray-700 mb-4">
                2K Eğitim ve Danışmanlık, kurucusu Koray Karataş&apos;ın 29 yıllık saha tecrübesi ve kurumsal bilgi birikimi üzerine inşa edilmiştir.
              </p>
              <p className="text-gray-700">
                Bankacılık, bireysel emeklilik, hayat ve elementer sigortacılık, tarım, ithalat-ihracat ve finans piyasaları gibi farklı sektörlerde edindiğimiz saha deneyimi, sunduğumuz çözümlerin çok yönlü ve sahaya uyumlu olmasını sağlıyor.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ne Yapıyoruz Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Ne Yapıyoruz?
            </motion.h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
            <ul className="space-y-4">
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
                <p>Satış ve müşteri deneyimi eğitimleriyle sahada sonuç yaratıyoruz.</p>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
                <p>Yönetici gelişim programlarıyla liderlik ve koçluk becerilerini güçlendiriyoruz.</p>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
                <p>Eğitim ihtiyaçlarını özgün senaryolarla dijital içeriklere dönüştürüyoruz.</p>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
                <p>Kurumların kritik bilgi birikimlerini eğitim modülleri hâline getirerek kurumsal hafızayı güçlendiriyoruz.</p>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nasıl Çalışıyoruz Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Nasıl Çalışıyoruz?</h2>
              <p className="text-gray-700 mb-6">
                Her kurumun kendine özgü ihtiyaçları olduğunu biliyoruz. Bu nedenle, tüm projelerimizi kurum kültürüne, hedef kitleye ve saha gerçeklerine göre özel olarak tasarlıyoruz.
              </p>
              <p className="text-gray-700 mb-6">
                Eğitimden prodüksiyona kadar her adımda, bilgiyi uygulamaya, deneyimi kalıcı değişime dönüştürmeyi hedefliyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative h-80"
            >
              <Image
                src="/images/hakkimizda/how-we-work.jpg"
                alt="Çalışma Metodolojimiz"
                fill
                className="object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neden 2K Eğitim Section */}
      <section className="py-16 bg-accent text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Neden 2K Eğitim?
            </motion.h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <FaCheckCircle className="text-white mt-1 mr-3 flex-shrink-0" />
                <p className="text-white font-medium">✅ {advantage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Sizden birimiymiş&ccedil;esine çalışıyor, kurumunuzun vizyonuna katkı sağlıyoruz...</h2>
            <p className="text-gray-600 mb-8">
              Kurumunuzun gelişimine nasıl katkıda bulunabileceğimizi keşfetmek için bizimle iletişime geçin.
            </p>
            <button className="bg-accent text-white font-bold py-4 px-8 rounded-full hover:bg-accent-dark transition-colors shadow-lg hover:shadow-xl">
              İletişime Geçin
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
} 