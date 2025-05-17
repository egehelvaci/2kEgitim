'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  // Eğitim Alanları alt menü öğeleri
  const educationAreas = [
    { title: 'Bankacılık Eğitimleri', href: '/egitim-alanlarimiz/bankacilik-egitimleri' },
    { title: 'KOBİ\'ler için Kredi Skor Yönetimi', href: '/egitim-alanlarimiz/kobi-kredi-skor-yonetimi' },
    { title: 'Satış Eğitimleri', href: '/egitim-alanlarimiz/satis-egitimleri' },
    { title: 'Müşteri Deneyimi Eğitimleri', href: '/egitim-alanlarimiz/musteri-deneyimi-egitimleri' },
    { title: 'Yönetici Gelişimi ve Koçluk', href: '/egitim-alanlarimiz/yonetici-gelisimi-ve-kocluk' },
    { title: 'Eğiticinin Eğitimi', href: '/egitim-alanlarimiz/egiticinin-egitimi' },
    { title: 'Sunum ve Sahne Becerileri', href: '/egitim-alanlarimiz/sunum-ve-sahne-becerileri' },
    { title: 'Dijital Eğitim ve Video İçerik', href: '/egitim-alanlarimiz/dijital-egitim-ve-video-icerik' },
    { title: 'İş Sağlığı ve Güvenliği Eğitimleri', href: '/egitim-alanlarimiz/is-sagligi-ve-guvenligi-egitimleri' },
  ];

  // Client-side'da çalıştığından emin olmak için
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown dışına tıklandığında kapatma
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        dropdownButtonRef.current && 
        !dropdownButtonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);

  // Sayfa değişiminde menüyü kapat
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setDropdownOpen(false);
      setMobileDropdownOpen(false);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  // Client-side'da henüz çalışmıyorsa basit bir header göster
  if (!mounted) {
    return (
      <header className="fixed w-full z-30 bg-white py-4 shadow-lg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="w-36 h-16 relative">
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
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="font-medium text-base text-gray-800">Ana Sayfa</Link>
              <Link href="/egitim-alanlarimiz" className="font-medium text-base text-gray-800">Eğitim Alanlarımız</Link>
              <Link href="/referanslarimiz" className="font-medium text-base text-gray-800">Referanslarımız</Link>
              <Link href="/hakkimizda" className="font-medium text-base text-gray-800">Hakkımızda</Link>
              <Link href="/iletisim" className="font-medium text-base text-gray-800">İletişim</Link>
            </nav>
            <button className="md:hidden p-3 rounded-md text-gray-800">
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header 
      className="fixed w-full z-30 transition-all duration-500"
      style={{
        background: scrolled 
          ? 'linear-gradient(to right, white, #f5b421 50%, #f5b421)' 
          : 'rgba(255, 255, 255, 0.8)',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(8px)',
        borderBottom: scrolled ? '1px solid rgba(245, 180, 33, 0.2)' : 'none'
      }}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center relative group">
            <div className={`w-44 h-16 relative ${scrolled ? 'scale-95' : 'scale-100'} transition-all duration-300 pl-2 pr-6`}>
              <div className={`absolute inset-0 transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
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
              <div className={`absolute inset-0 transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
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
            </div>
            <div 
              className={`absolute -bottom-1 left-0 h-0.5 bg-white rounded-full transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} 
              style={{ width: 0 }}
              onMouseEnter={(e) => e.currentTarget.style.width = '100%'}
              onMouseLeave={(e) => e.currentTarget.style.width = '0'}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" scrolled={scrolled} customColor="#f5b421">Ana Sayfa</NavLink>
            
            {/* Eğitim Alanlarımız Dropdown */}
            <div className="relative">
              <button
                ref={dropdownButtonRef}
                onClick={toggleDropdown}
                className="font-medium text-base transition-all duration-300 flex items-center"
                style={{ 
                  color: scrolled ? 'white' : 'rgb(31, 41, 55)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = scrolled ? 'rgba(255, 255, 255, 0.9)' : '#f5b421'}
                onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? 'white' : 'rgb(31, 41, 55)'}
              >
                Eğitim Alanlarımız <FaChevronDown className={`ml-1 transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div 
                  ref={dropdownRef}
                  className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50 transform origin-top transition-transform"
                  style={{ 
                    border: `1px solid ${scrolled ? 'rgba(245, 180, 33, 0.4)' : 'rgb(229, 231, 235)'}`
                  }}
                >
                  <Link 
                    href="/egitim-alanlarimiz" 
                    className="block px-4 py-2 text-sm font-medium text-gray-900 transition-colors"
                    style={{ 
                      color: 'rgb(17, 24, 39)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(245, 180, 33, 0.1)';
                      e.currentTarget.style.color = '#f5b421';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'rgb(17, 24, 39)';
                    }}
                  >
                    Tüm Eğitim Alanlarımız
                  </Link>
                  <div className="my-1 border-t border-gray-100"></div>
                  {educationAreas.map((area, index) => (
                    <Link 
                      key={index} 
                      href={area.href}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(245, 180, 33, 0.1)';
                        e.currentTarget.style.color = '#f5b421';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'rgb(55, 65, 81)';
                      }}
                    >
                      {area.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <NavLink href="/referanslarimiz" scrolled={scrolled} customColor="#f5b421">Referanslarımız</NavLink>
            <NavLink href="/hakkimizda" scrolled={scrolled} customColor="#f5b421">Hakkımızda</NavLink>
            <NavLink href="/iletisim" scrolled={scrolled} customColor="#f5b421">İletişim</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 rounded-full transition-all"
            style={{ 
              color: scrolled ? 'white' : 'rgb(31, 41, 55)',
              backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = scrolled 
                ? 'rgba(255, 255, 255, 0.2)' 
                : 'rgba(245, 180, 33, 0.1)';
              e.currentTarget.style.color = scrolled ? 'white' : '#f5b421';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = scrolled 
                ? 'rgba(255, 255, 255, 0.1)' 
                : 'transparent';
              e.currentTarget.style.color = scrolled ? 'white' : 'rgb(31, 41, 55)';
            }}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div 
          className="md:hidden w-full absolute top-full left-0 shadow-lg z-50 animate-fadeDown"
          style={{ 
            background: scrolled
              ? 'linear-gradient(to bottom, #f5b421, #f5b421)'
              : 'white'
          }}
        >
          <div className="container mx-auto py-4 px-4">
            <div className="flex flex-col space-y-1">
              <MobileNavLink href="/" onClick={toggleMenu} scrolled={scrolled} customColor="#f5b421">Ana Sayfa</MobileNavLink>
              
              {/* Mobil Eğitim Alanlarımız Dropdown */}
              <div 
                style={{ 
                  borderBottom: scrolled 
                    ? '1px solid rgba(255, 255, 255, 0.2)' 
                    : '1px solid rgb(243, 244, 246)'
                }}
              >
                <button 
                  onClick={toggleMobileDropdown}
                  className="font-medium py-3 w-full text-left flex items-center justify-between transition-all"
                  style={{ 
                    color: scrolled ? 'white' : 'rgb(31, 41, 55)',
                    paddingLeft: scrolled ? '0.5rem' : '0',
                    borderTopLeftRadius: scrolled ? '0.375rem' : '0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = scrolled 
                      ? 'rgba(255, 255, 255, 0.1)' 
                      : 'transparent';
                    e.currentTarget.style.color = scrolled ? 'white' : '#f5b421';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = scrolled ? 'white' : 'rgb(31, 41, 55)';
                  }}
                >
                  <span>Eğitim Alanlarımız</span>
                  <FaChevronDown className={`transform transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {mobileDropdownOpen && (
                  <div className="pl-4 py-2 space-y-1">
                    <Link 
                      href="/egitim-alanlarimiz"
                      className="block py-2 px-3 text-sm font-medium rounded-md transition-colors"
                      style={{ 
                        color: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgb(55, 65, 81)'
                      }}
                      onClick={toggleMenu}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = scrolled 
                          ? 'rgba(255, 255, 255, 0.1)' 
                          : 'rgba(245, 180, 33, 0.1)';
                        e.currentTarget.style.color = scrolled ? 'white' : '#f5b421';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = scrolled 
                          ? 'rgba(255, 255, 255, 0.9)' 
                          : 'rgb(55, 65, 81)';
                      }}
                    >
                      Tüm Eğitim Alanlarımız
                    </Link>
                    
                    {educationAreas.map((area, index) => (
                      <Link 
                        key={index} 
                        href={area.href}
                        className="block py-2 px-3 text-sm font-medium rounded-md transition-colors"
                        style={{ 
                          color: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgb(55, 65, 81)'
                        }}
                        onClick={toggleMenu}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = scrolled 
                            ? 'rgba(255, 255, 255, 0.1)' 
                            : 'rgba(245, 180, 33, 0.1)';
                          e.currentTarget.style.color = scrolled ? 'white' : '#f5b421';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = scrolled 
                            ? 'rgba(255, 255, 255, 0.9)' 
                            : 'rgb(55, 65, 81)';
                        }}
                      >
                        {area.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <MobileNavLink href="/referanslarimiz" onClick={toggleMenu} scrolled={scrolled} customColor="#f5b421">Referanslarımız</MobileNavLink>
              <MobileNavLink href="/hakkimizda" onClick={toggleMenu} scrolled={scrolled} customColor="#f5b421">Hakkımızda</MobileNavLink>
              <MobileNavLink href="/iletisim" onClick={toggleMenu} scrolled={scrolled} customColor="#f5b421">İletişim</MobileNavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ 
  href, 
  children,
  scrolled,
  customColor 
}: { 
  href: string; 
  children: React.ReactNode;
  scrolled: boolean;
  customColor: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href} 
      className="font-medium text-base transition-all duration-300 relative group"
      style={{ 
        color: scrolled ? 'white' : 'rgb(31, 41, 55)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={{ 
        color: isHovered 
          ? scrolled ? 'rgba(255, 255, 255, 0.9)' : customColor 
          : scrolled ? 'white' : 'rgb(31, 41, 55)'
      }}>
        {children}
      </span>
      <span 
        style={{ 
          position: 'absolute',
          bottom: '-4px',
          left: 0,
          width: isHovered ? '100%' : 0,
          height: '2px',
          borderRadius: '9999px',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : customColor,
          transition: 'all 0.3s ease'
        }} 
      />
    </Link>
  );
};

const MobileNavLink = ({ 
  href, 
  onClick, 
  children,
  scrolled,
  customColor
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode;
  scrolled: boolean;
  customColor: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href} 
      className="font-medium py-3 block transition-all"
      style={{ 
        color: scrolled ? 'white' : 'rgb(31, 41, 55)',
        borderBottom: scrolled 
          ? '1px solid rgba(255, 255, 255, 0.2)' 
          : '1px solid rgb(243, 244, 246)',
        paddingLeft: scrolled && isHovered ? '0.5rem' : '0',
        borderTopLeftRadius: scrolled ? '0.375rem' : '0',
        backgroundColor: scrolled && isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span 
        style={{ 
          transition: 'all 0.3s ease',
          color: isHovered 
            ? scrolled ? 'white' : customColor
            : scrolled ? 'white' : 'rgb(31, 41, 55)',
        }}
      >
        {children}
      </span>
    </Link>
  );
};

export default Header; 