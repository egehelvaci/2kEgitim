'use client';

import { useEffect } from 'react';

/**
 * Bu bileşen, karanlık temalı tarayıcı ayarlarını geçersiz kılarak sitenin her zaman 
 * aydınlık tema görünümünde olmasını sağlar.
 */
const ThemeOverride = () => {
  useEffect(() => {
    // CSS'de özelleştirilmiş renklerin tarayıcı tema ayarlarını geçersiz kılmasını sağla
    const applyLightThemeOverride = () => {
      // HTML elementine data-force-color-scheme="light" ekle
      document.documentElement.setAttribute('data-force-color-scheme', 'light');
      
      // Zorunlu CSS kuralları
      const style = document.createElement('style');
      style.setAttribute('id', 'theme-override-style');
      style.textContent = `
        :root {
          color-scheme: light !important;
        }
        
        @media (prefers-color-scheme: dark) {
          :root {
            color-scheme: light !important;
          }
          
          html, body {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          
          * {
            forced-color-adjust: none !important;
          }
        }
        
        /* High contrast modu geçersiz kıl */
        @media (forced-colors: active) {
          * {
            forced-color-adjust: none !important;
          }
        }
      `;
      
      // Stil varsa önce kaldır, sonra ekle
      const existingStyle = document.getElementById('theme-override-style');
      if (existingStyle) {
        existingStyle.remove();
      }
      
      document.head.appendChild(style);
      
      // Sayfanın meta etiketlerini güncelle
      updateMetaTags();
    };
    
    // Meta etiketlerini güncelleyen fonksiyon
    const updateMetaTags = () => {
      // Mevcut meta etiketlerini kontrol et ve güncelle
      const metaTags = {
        'color-scheme': 'light',
        'theme-color': '#ffffff',
        'forced-colors': 'none',
        'prefers-color-scheme': 'light'
      };
      
      // Her bir meta etiketi için
      Object.entries(metaTags).forEach(([name, content]) => {
        // Mevcut etiketi bul
        let meta = document.querySelector(`meta[name="${name}"]`);
        
        // Etiket yoksa oluştur
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        
        // İçeriği ayarla
        meta.setAttribute('content', content);
      });
    };
    
    // Sayfa yüklendiğinde ve tarayıcı teması değiştiğinde çalıştır
    applyLightThemeOverride();
    
    // Renk şeması değişikliklerini dinle
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', applyLightThemeOverride);
    
    return () => {
      mediaQuery.removeEventListener('change', applyLightThemeOverride);
    };
  }, []);
  
  // Bileşen herhangi bir görsel element içermiyor
  return null;
};

export default ThemeOverride; 