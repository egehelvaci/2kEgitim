'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

// Renk sabitleri
const COLORS = {
  logo: {
    primary: '#0052CC', // Kurumsal Mavi (2K için)
    secondary: '#FF8C00' // Koyu turuncu (Eğitim için)
  },
  menu: {
    primary: '#FFA500', // Turuncu (menü başlıkları için)
    hover: '#FF8C00' // Koyu turuncu (hover durumu için)
  },
  white: '#FFFFFF',
  transparent: 'transparent',
  gray: {
    100: '#F3F4F6',
    800: '#1F2937'
  }
};

// Stil sabitleri
const STYLES = {
  header: {
    base: 'fixed w-full z-30 transition-all duration-300',
    scrolled: 'bg-white shadow-md py-1',
    default: 'bg-white py-2'
  },
  container: 'container-custom flex justify-between items-center',
  logo: {
    wrapper: 'flex items-center',
    text: 'text-5xl font-bold'
  },
  nav: {
    desktop: 'hidden md:flex space-x-8',
    mobile: {
      container: 'md:hidden bg-white w-full absolute top-full left-0 shadow-md',
      menu: 'container-custom py-4 flex flex-col space-y-4'
    }
  }
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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

  return (
    <header className={`${STYLES.header.base} ${scrolled ? STYLES.header.scrolled : STYLES.header.default}`}>
      <div className={STYLES.container}>
        <Link href="/" className={STYLES.logo.wrapper}>
          <div className="w-36 h-24 sm:w-44 sm:h-28 md:w-52 md:h-36 relative">
            <Image 
              src="/images/logo/2k_logo.png" 
              alt="2K Eğitim Logo" 
              fill
              className="object-contain"
              style={{ objectFit: 'contain', backgroundColor: 'transparent' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={STYLES.nav.desktop}>
          <NavLink href="/">Ana Sayfa</NavLink>
          <NavLink href="/egitim-cozumlerimiz">Eğitim Çözümlerimiz</NavLink>
          <NavLink href="/referanslarimiz">Referanslarımız</NavLink>
          <NavLink href="/hakkimizda">Hakkımızda</NavLink>
          <NavLink href="/iletisim">İletişim</NavLink>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
        >
          {isOpen ? (
            <FaTimes className="h-6 w-6" style={{ color: COLORS.menu.primary }} />
          ) : (
            <FaBars className="h-6 w-6" style={{ color: COLORS.menu.primary }} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className={STYLES.nav.mobile.container}>
          <div className={STYLES.nav.mobile.menu}>
            <MobileNavLink href="/" onClick={toggleMenu}>Ana Sayfa</MobileNavLink>
            <MobileNavLink href="/egitim-cozumlerimiz" onClick={toggleMenu}>Eğitim Çözümlerimiz</MobileNavLink>
            <MobileNavLink href="/referanslarimiz" onClick={toggleMenu}>Referanslarımız</MobileNavLink>
            <MobileNavLink href="/hakkimizda" onClick={toggleMenu}>Hakkımızda</MobileNavLink>
            <MobileNavLink href="/iletisim" onClick={toggleMenu}>İletişim</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="font-semibold text-lg transition-colors duration-200 relative group"
    style={{ 
      color: COLORS.menu.primary,
      textShadow: '0px 0px 1px rgba(0,0,0,0.2)'
    }}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-200 group-hover:w-full" 
          style={{ backgroundColor: COLORS.menu.hover }}
    />
  </Link>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <Link 
    href={href} 
    className="font-semibold text-lg py-3 block border-b border-gray-100 transition-colors duration-200"
    style={{ 
      color: COLORS.menu.primary,
      textShadow: '0px 0px 1px rgba(0,0,0,0.1)'
    }}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header; 