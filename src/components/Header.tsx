'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Client-side'da çalıştığından emin olmak için
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Sayfa değişiminde menüyü kapat
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
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
              <Link href="/egitim-cozumlerimiz" className="font-medium text-base text-gray-800">Eğitim Çözümlerimiz</Link>
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
      className={`fixed w-full z-30 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-orange-400 via-primary to-accent py-2 shadow-lg backdrop-blur-sm border-b border-orange-500/20' 
          : 'bg-white/80 py-4 shadow-md backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center relative group">
            <div className={`w-36 h-16 relative ${scrolled ? 'scale-95' : 'scale-100'} transition-all duration-300`}>
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
            <div className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white rounded-full transition-all duration-500 group-hover:w-full ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" scrolled={scrolled}>Ana Sayfa</NavLink>
            <NavLink href="/egitim-cozumlerimiz" scrolled={scrolled}>Eğitim Çözümlerimiz</NavLink>
            <NavLink href="/referanslarimiz" scrolled={scrolled}>Referanslarımız</NavLink>
            <NavLink href="/hakkimizda" scrolled={scrolled}>Hakkımızda</NavLink>
            <NavLink href="/iletisim" scrolled={scrolled}>İletişim</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-3 rounded-full transition-all ${
              scrolled 
                ? 'text-white bg-white/10 hover:bg-white/20 shadow-inner'
                : 'text-gray-800 hover:bg-orange-100/50 hover:text-primary'
            }`}
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
        <div className={`md:hidden w-full absolute top-full left-0 shadow-lg z-50 ${
          scrolled
            ? 'bg-gradient-to-b from-accent to-primary animate-fadeDown'
            : 'bg-white animate-fadeDown'
        }`}>
          <div className="container mx-auto py-4 px-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" onClick={toggleMenu} scrolled={scrolled}>Ana Sayfa</MobileNavLink>
              <MobileNavLink href="/egitim-cozumlerimiz" onClick={toggleMenu} scrolled={scrolled}>Eğitim Çözümlerimiz</MobileNavLink>
              <MobileNavLink href="/referanslarimiz" onClick={toggleMenu} scrolled={scrolled}>Referanslarımız</MobileNavLink>
              <MobileNavLink href="/hakkimizda" onClick={toggleMenu} scrolled={scrolled}>Hakkımızda</MobileNavLink>
              <MobileNavLink href="/iletisim" onClick={toggleMenu} scrolled={scrolled}>İletişim</MobileNavLink>
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
  scrolled 
}: { 
  href: string; 
  children: React.ReactNode;
  scrolled: boolean;
}) => (
  <Link 
    href={href} 
    className={`font-medium text-base transition-all duration-300 relative group ${
      scrolled ? 'text-white hover:text-white/90' : 'text-gray-800 hover:text-primary'
    }`}
  >
    {children}
    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
      scrolled 
        ? 'bg-white/90'
        : 'bg-primary'
    }`} />
  </Link>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children,
  scrolled
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode;
  scrolled: boolean;
}) => (
  <Link 
    href={href} 
    className={`font-medium py-3 block border-b ${
      scrolled
        ? 'text-white border-white/20 hover:bg-white/10 pl-2 rounded-l-md transition-all'
        : 'text-gray-800 border-gray-100 hover:text-primary transition-colors'
    }`}
    onClick={onClick}
  >
    <span className="transition-all duration-300 group-hover:pl-2">{children}</span>
  </Link>
);

export default Header; 