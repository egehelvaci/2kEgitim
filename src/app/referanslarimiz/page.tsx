'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

// Logo bilgilerini içeren dizi
const references = [
  { name: 'Akbank', logo: '/images/referanslar/company-logos/akbank.png' },
  { name: 'Aktif Bank', logo: '/images/referanslar/company-logos/aktifbank.png' },
  { name: 'Aksigorta', logo: '/images/referanslar/company-logos/aksigorta.png' },
  { name: 'Aksis', logo: '/images/referanslar/company-logos/aksis.png' },
  { name: 'Avivasa', logo: '/images/referanslar/company-logos/avivasa.png' },
  { name: 'Atos', logo: '/images/referanslar/company-logos/atos.png' },
  { name: 'Çağrı Merkezleri Derneği', logo: '/images/referanslar/company-logos/Cagri-Merkezleri-Dernegi.jpg' },
  { name: 'DenizBank', logo: '/images/referanslar/company-logos/denizbank.png' },
  { name: 'Deniz Ev', logo: '/images/referanslar/company-logos/denizev.png' },
  { name: 'Halk Bank', logo: '/images/referanslar/company-logos/halkbank.png' },
  { name: 'QNB Finansfaktoring', logo: '/images/referanslar/company-logos/qnb_finansfaktoring_logo.png' },
  { name: 'HSBC', logo: '/images/referanslar/company-logos/HSBC-Logo.png' },
  { name: 'İş Yatırım', logo: '/images/referanslar/company-logos/Isyatirim_logo.png' },
  { name: 'ING Bank', logo: '/images/referanslar/company-logos/ing-bank-logo.png' },
  { name: 'Mettler Toledo', logo: '/images/referanslar/company-logos/mettler-toledo.png' },
  { name: 'QNB', logo: '/images/referanslar/company-logos/QNB-Logo.png' },
  { name: 'Odeabank', logo: '/images/referanslar/company-logos/odeabank.png' },
  { name: 'Pronet', logo: '/images/referanslar/company-logos/pronet.png' },
  { name: 'Ray Sigorta', logo: '/images/referanslar/company-logos/ray-sigorta.png' },
  { name: 'Turkcell', logo: '/images/referanslar/company-logos/turkcell.png' },
  { name: 'Türkiye İş Bankası', logo: '/images/referanslar/company-logos/işbankası.png' },
  { name: 'Türk Telekom', logo: '/images/referanslar/company-logos/türktelekom.png' },
  { name: 'Vakıfbank', logo: '/images/referanslar/company-logos/vakıfbank.png' },
  { name: 'Ziraat Bankası', logo: '/images/referanslar/company-logos/ziraatbankasi.png' },
  { name: 'TEB', logo: '/images/referanslar/company-logos/teb.png' },
];

// Referansları sektörlere göre gruplandırma
const sectors = [
  { name: 'Bankacılık ve Finans', count: 12 },
  { name: 'Sigorta', count: 3 },
  { name: 'Telekomünikasyon', count: 2 },
  { name: 'Teknoloji', count: 3 },
  { name: 'Gayrimenkul', count: 1 },
  { name: 'Dernek ve Odalar', count: 1 },
  { name: 'Diğer', count: 3 },
];

// Çözüm ortağı olduğumuz alanlar
const solutionAreas = [
  {
    title: "Bankacılık Sektörü",
    description: "20.000'den fazla katılımcıyla çalıştık. Şube satış ekiplerinden çağrı merkezlerine, yöneticilikten yatırım bankacılığına kadar tüm segmentlerde, kurumun diliyle konuşan eğitim çözümleri sunduk. Kimi projelerde sahaya inerek satışlara eşlik ettik, müşteriyle birlikte süreci deneyimledik."
  },
  {
    title: "Sigorta ve Bireysel Emeklilik",
    description: "Çağrı merkezi, saha satış ve yöneticilere yönelik müşteri memnuniyeti dönüşüm projelerinde yer aldık. Gerçek vakalara ve kurum içi ihtiyaçlara göre içerik geliştirildi. Uygulamalar, iş ortaklarına ödül kazandıracak etki düzeyine ulaştı."
  },
  {
    title: "Telekomünikasyon",
    description: "Temsilcilerin ses tonu, temsil dili ve ikna becerileri üzerine odaklanan eğitimlerde, gerçek çağrı kayıtları üzerinden çalışıldı. İletişimi sadece teknik değil, duygusal bir süreç olarak ele aldık."
  },
  {
    title: "Kamu ve Örgütsel Gelişim",
    description: "Beyaz yaka ve mavi yaka çalışanlarla aynı sahada çalışılabilecek ortak bir eğitim dili kurduk. İç eğitmen havuzu kurulumu, kurum içi bilgi birikiminin eğitime dönüşmesi gibi yapısal katkılar sağladık."
  }
];

export default function ReferanslarimizPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6"><span style={{color: "#f5b421"}}>Birlikte</span> Düşünen, <span style={{color: "#f5b421"}}>Birlikte</span> Gelişen İş <span style={{color: "#f5b421"}}>Ortaklığı</span></h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Eğitim ve danışmanlık bizim için bir hizmet sunmak değil; kurumla birlikte düşünmek, birlikte gelişmek anlamına geliyor.
            </p>
            <p className="text-md text-gray-600 max-w-3xl mx-auto mb-10">
              Bugüne dek farklı sektörlerden birçok kurumla sahada karşılık bulan, ihtiyaçlarına özel çözümler geliştirdik.
            </p>
          </motion.div>

          {/* Referans Sayıları */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 mb-16">
            {sectors.map((sector, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-accent mb-2">{sector.count}+</h3>
                <p className="text-gray-700 text-sm md:text-base">{sector.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referanslar Logoları */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Güven Duyulan <span style={{color: "#f5b421"}}>İş Ortağınız</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              2K Eğitim olarak, kurumlara özel çözümlerimiz ve deneyimli ekibimizle, 
              eğitim ve danışmanlık alanında güvenilir bir iş ortağıyız.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              28 yıllık deneyimimizle, Türkiye'nin önde gelen kuruluşlarına özel
              eğitim ve danışmanlık çözümleri sunuyoruz. İşte birlikte çalıştığımız bazı
              değerli iş ortaklarımız.
            </p>
          </div>
          
          {mounted && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {references.map((ref, idx) => (
                <div
                  key={idx}
                  className="w-full h-36 relative flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Image
                    src={ref.logo}
                    alt={ref.name}
                    width={100}
                    height={60}
                    className="max-w-full max-h-24 object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Çözüm Ortağı Olduğumuz Alanlar */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4"><span style={{color: "#f5b421"}}>Birlikte</span> Düşünen, <span style={{color: "#f5b421"}}>Birlikte</span> Gelişen İş <span style={{color: "#f5b421"}}>Ortaklığı</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Eğitim ve danışmanlık bizim için bir hizmet sunmak değil; kurumla birlikte düşünmek, birlikte gelişmek anlamına geliyor. Bugüne dek farklı sektörlerden birçok kurumla sahada karşılık bulan, ihtiyaçlarına özel çözümler geliştirdik.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4 text-accent">{area.title}</h3>
                <p className="text-gray-700">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{backgroundColor: "#f5b421"}}>
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              <span className="block mb-2">Hazır Eğitim Değil,</span>
              <span className="block"><span style={{color: "#000000"}}>Kurumunuza Özel</span> Çözüm Sunuyoruz</span>
            </h2>
            <p className="text-white text-lg mb-8 opacity-90">
              Her kurumun öğrenme ihtiyacı farklıdır. Biz, sizinle birlikte tasarlıyoruz. 
              Hemen tanışalım, birlikte en doğru çözümü oluşturalım...
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                href="/iletisim"
                className="bg-white text-accent font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Bizimle İletişime Geçin
              </Link>
              <Link 
                href="/egitim-alanlarimiz"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center"
              >
                Eğitim Alanlarımızı İnceleyin <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
} 