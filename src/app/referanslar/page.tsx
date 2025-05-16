'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

// Logo tanımlamaları - company-logos klasöründen
const logos = [
  { name: 'Akbank', src: '/images/referanslar/company-logos/akbank.png' },
  { name: 'Aktif Bank', src: '/images/referanslar/company-logos/aktifbank.png' },
  { name: 'Aksigorta', src: '/images/referanslar/company-logos/aksigorta.png' },
  { name: 'Aksis', src: '/images/referanslar/company-logos/aksis.png' },
  { name: 'Atos', src: '/images/referanslar/company-logos/atos.png' },
  { name: 'Avivasa', src: '/images/referanslar/company-logos/avivasa.png' },
  { name: 'Çağrı Merkezleri Derneği', src: '/images/referanslar/company-logos/Cagri-Merkezleri-Dernegi.jpg' },
  { name: 'DenizBank', src: '/images/referanslar/company-logos/denizbank.png' },
  { name: 'Deniz Ev', src: '/images/referanslar/company-logos/denizev.png' },
  { name: 'Halk Bank', src: '/images/referanslar/company-logos/halkbank.png' },
  { name: 'HSBC', src: '/images/referanslar/company-logos/HSBC-Logo.png' },
  { name: 'ING Bank', src: '/images/referanslar/company-logos/ing-bank-logo.png' },
  { name: 'İş Yatırım', src: '/images/referanslar/company-logos/Isyatirim_logo.png' },
  { name: 'Mettler Toledo', src: '/images/referanslar/company-logos/mettler-toledo.png' },
  { name: 'Odeabank', src: '/images/referanslar/company-logos/odeabank.png' },
  { name: 'Pronet', src: '/images/referanslar/company-logos/pronet.png' },
  { name: 'QNB', src: '/images/referanslar/company-logos/QNB-Logo.png' },
  { name: 'QNB Finansfaktoring', src: '/images/referanslar/company-logos/qnb_finansfaktoring_logo.png' },
  { name: 'Ray Sigorta', src: '/images/referanslar/company-logos/ray-sigorta.png' },
  { name: 'TEB', src: '/images/referanslar/company-logos/teb.png' },
  { name: 'Turkcell', src: '/images/referanslar/company-logos/turkcell.png' },
  { name: 'Türk Telekom', src: '/images/referanslar/company-logos/türktelekom.png' },
  { name: 'Türkiye İş Bankası', src: '/images/referanslar/company-logos/işbankası.png' },
  { name: 'Vakıfbank', src: '/images/referanslar/company-logos/vakıfbank.png' },
  { name: 'Ziraat Bankası', src: '/images/referanslar/company-logos/ziraatbankasi.png' },
];

export default function ReferanslarPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/referanslar/referanslar-hero.jpg"
          alt="Referanslar Hero"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="container-custom h-full flex items-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white font-medium mb-4 backdrop-blur-sm">
              Referanslarımız
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Güvenilir İş Ortaklarımız
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mb-10">
              Türkiye&apos;nin önde gelen kurumlarıyla çalışıyor, başarı hikayelerini birlikte yazıyoruz.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/iletisim"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-accent hover:bg-gray-100 transition-all transform hover:scale-105 font-medium"
              >
                Bize Ulaşın
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies Section - tamamen yeniden düzenlendi */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Güven Duyulan İş Ortağınız</h2>
            <p className="text-gray-600 mb-6">Türkiye&apos;nin önde gelen kurumları ile çalışıyoruz</p>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          {mounted && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {logos.map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all h-36"
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
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

      {/* CTA Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/referanslar/referanslar-cta.jpg"
            alt="CTA Background"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Başarı Hikayenizi Birlikte Yazalım
            </h2>
            <p className="text-gray-600 mb-8">
              Kurumunuzun ihtiyaçlarına özel çözümlerimizi keşfetmek için bizimle iletişime geçin.
            </p>
            <Link 
              href="/iletisim"
              className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-full hover:bg-accent-dark transition-colors shadow-lg hover:shadow-xl"
            >
              Hemen İletişime Geçin
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
} 