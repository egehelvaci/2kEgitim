'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteLeft, FaUser, FaArrowRight } from 'react-icons/fa';

// Güncellenmiş logo bilgileri - company-logos klasöründen
const references = [
  { name: 'Akbank', logo: '/images/referanslar/company-logos/akbank.png' },
  { name: 'Aktif Bank', logo: '/images/referanslar/company-logos/aktifbank.png' },
  { name: 'Aksigorta', logo: '/images/referanslar/company-logos/aksigorta.png' },
  { name: 'Aksis', logo: '/images/referanslar/company-logos/aksis.png' },
  { name: 'Atos', logo: '/images/referanslar/company-logos/atos.png' },
  { name: 'Avivasa', logo: '/images/referanslar/company-logos/avivasa.png' },
  { name: 'Çağrı Merkezleri Derneği', logo: '/images/referanslar/company-logos/Cagri-Merkezleri-Dernegi.jpg' },
  { name: 'DenizBank', logo: '/images/referanslar/company-logos/denizbank.png' },
  { name: 'Deniz Ev', logo: '/images/referanslar/company-logos/denizev.png' },
  { name: 'Halk Bank', logo: '/images/referanslar/company-logos/halkbank.png' },
  { name: 'HSBC', logo: '/images/referanslar/company-logos/HSBC-Logo.png' },
  { name: 'ING Bank', logo: '/images/referanslar/company-logos/ing-bank-logo.png' },
  { name: 'İş Yatırım', logo: '/images/referanslar/company-logos/Isyatirim_logo.png' },
  { name: 'Mettler Toledo', logo: '/images/referanslar/company-logos/mettler-toledo.png' },
  { name: 'Odeabank', logo: '/images/referanslar/company-logos/odeabank.png' },
  { name: 'Pronet', logo: '/images/referanslar/company-logos/pronet.png' },
  { name: 'QNB', logo: '/images/referanslar/company-logos/QNB-Logo.png' },
  { name: 'QNB Finansfaktoring', logo: '/images/referanslar/company-logos/qnb_finansfaktoring_logo.png' },
  { name: 'Ray Sigorta', logo: '/images/referanslar/company-logos/ray-sigorta.png' },
  { name: 'TEB', logo: '/images/referanslar/company-logos/teb.png' },
  { name: 'Turkcell', logo: '/images/referanslar/company-logos/turkcell.png' },
  { name: 'Türk Telekom', logo: '/images/referanslar/company-logos/türktelekom.png' },
  { name: 'Türkiye İş Bankası', logo: '/images/referanslar/company-logos/işbankası.png' },
  { name: 'Vakıfbank', logo: '/images/referanslar/company-logos/vakıfbank.png' },
  { name: 'Ziraat Bankası', logo: '/images/referanslar/company-logos/ziraatbankasi.png' },
];

const testimonials = [
  {
    id: 1,
    content: "2K Eğitim ile çalışmak ekibimiz için büyük bir dönüm noktası oldu. Satış ekibimizin performansında gözle görülür bir artış yaşadık. Eğitimlerin pratik vaka çalışmalarıyla desteklenmesi büyük katkı sağladı.",
    author: "Ayşe Kara",
    position: "İnsan Kaynakları Direktörü",
    company: "Turkcell"
  },
  {
    id: 2,
    content: "Bankacılık sektörünün dinamik yapısına uygun olarak tasarlanmış eğitim programı tam ihtiyacımız olan konuları kapsıyordu. Eğitmenin finans sektörü deneyimi ve interaktif eğitim yaklaşımı çok etkileyiciydi.",
    author: "Mehmet Yılmaz",
    position: "Eğitim ve Gelişim Müdürü",
    company: "Akbank"
  },
  {
    id: 3,
    content: "Sigorta satış ekibimiz için hazırlanan özel program beklentilerimizin üzerinde sonuçlar verdi. Çalışanlarımızın müşteri ilişkileri ve ikna becerileri önemli ölçüde arttı. 2K Eğitim ekibinin profesyonel yaklaşımı için teşekkür ederiz.",
    author: "Kemal Demir",
    position: "Satış Direktörü",
    company: "Aksigorta"
  },
];

const References = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Otomatik kayma animasyonu
  useEffect(() => {
    if (!sliderRef.current || !mounted) return;
    
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const step = 1; // Yavaş kayma hızı
    const scrollSpeed = 30; // Kayma hızı (ms)
    
    const autoScroll = setInterval(() => {
      scrollAmount += step;
      
      if ((slider.scrollWidth - slider.clientWidth) <= slider.scrollLeft) {
        // En sona geldiğinde başa dön
        slider.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        slider.scrollLeft = scrollAmount;
      }
    }, scrollSpeed);
    
    return () => clearInterval(autoScroll);
  }, [mounted]);

  // Mouse ile sürükleme işlemleri
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Sürükleme hızını artırmak için çarpan
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="references" className="section bg-white py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            <span className="text-primary">Referanslarımız</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Türkiye&apos;nin önde gelen kurumları ile çalışmaktan gurur duyuyoruz.
          </motion.p>
        </div>

        {/* Film Şeridi Şeklinde Kayan Referanslar */}
        <div className="mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-hidden whitespace-nowrap py-6"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
              scrollbarWidth: 'none', // Firefox için scrollbar gizleme
              msOverflowStyle: 'none', // IE için scrollbar gizleme
            }}
          >
            {/* İlk set referanslar */}
            {references.map((ref, index) => (
              <div
                key={`first-${index}`}
                className="inline-block mx-4 p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-lg h-24 min-w-40"
              >
                <div className="flex items-center justify-center h-full">
                  <Image 
                    src={ref.logo} 
                    alt={ref.name}
                    width={80}
                    height={40}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
            
            {/* Sonsuz döngü için tekrar eden referanslar */}
            {references.map((ref, index) => (
              <div
                key={`second-${index}`}
                className="inline-block mx-4 p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-lg h-24 min-w-40"
              >
                <div className="flex items-center justify-center h-full">
                  <Image 
                    src={ref.logo} 
                    alt={ref.name}
                    width={80}
                    height={40}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              href="/referanslarimiz"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
            >
              Tüm Referanslarımızı Görüntüle
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="flex justify-center mb-10">
            <FaQuoteLeft className="text-primary opacity-20 w-16 h-16" />
          </div>
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeTestimonial === index ? 1 : 0,
                  x: activeTestimonial === index ? 0 : 20 
                }}
                transition={{ duration: 0.6 }}
                className="text-center"
                style={{ display: activeTestimonial === index ? 'block' : 'none' }}
              >
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                  &quot;{testimonial.content}&quot;
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="bg-primary text-white p-4 rounded-full mb-4">
                    <FaUser className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                  <p className="text-primary">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full mx-2 transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References; 