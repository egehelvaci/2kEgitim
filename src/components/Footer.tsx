'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-gray-800 pt-12 sm:pt-16 pb-6 sm:pb-8 shadow-inner">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 sm:mb-12">
          {/* Logo ve Kısa Açıklama */}
          <div>
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <div className="w-48 sm:w-60 h-20 sm:h-24 relative">
                <Image 
                  src="/images/logo/logosaydam2kegitim.png" 
                  alt="2K Eğitim Logo" 
                  fill
                  className="object-contain"
                  style={{ 
                    objectFit: 'contain',
                    objectPosition: 'left center'
                  }}
                  priority
                />
              </div>
            </Link>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
              2K Eğitim, işin mutfağında öğrenilmiş bilgiyle eğitim ve gelişim çözümleri üreten, teorik anlatımlar yerine sahada yaşanmış gerçek tecrübeler paylaşan bir eğitim danışmanlık firmasıdır.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <SocialLink href="https://linkedin.com" icon={<FaLinkedinIn />} />
            </div>
          </div>
          
          {/* Hızlı Linkler */}
          <div className="mt-2 sm:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-accent">
              Hızlı Linkler
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <FooterLink href="/">Ana Sayfa</FooterLink>
              <FooterLink href="/egitim-alanlarimiz">Eğitim Alanlarımız</FooterLink>
              <FooterLink href="/referanslarimiz">Referanslarımız</FooterLink>
              <FooterLink href="/hakkimizda">Hakkımızda</FooterLink>
              <FooterLink href="/iletisim">İletişim</FooterLink>
            </ul>
          </div>
          
          {/* İletişim Bilgileri */}
          <div className="mt-2 sm:mt-0">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-accent">
              İletişim
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base">Ataşehir, İstanbul</span>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base">+90 (533) 263 06 63</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-accent mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600 text-sm sm:text-base">info@2kegitim.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Alt Footer - Telif Hakkı Bildirimi */}
        <div className="pt-6 sm:pt-8 border-t border-gray-200 text-center sm:flex sm:flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-0">
            &copy; {currentYear} 2K Eğitim Danışmanlık. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:justify-start">
            <Link href="/gizlilik-politikasi" className="text-gray-500 hover:text-gray-800 text-xs sm:text-sm transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="text-gray-500 hover:text-gray-800 text-xs sm:text-sm transition-colors">
              Kullanım Koşulları
            </Link>
            <Link href="/cerez-politikasi" className="text-gray-500 hover:text-gray-800 text-xs sm:text-sm transition-colors">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors text-sm sm:text-base"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link href={href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base">
        {children}
      </Link>
    </li>
  );
};

export default Footer; 