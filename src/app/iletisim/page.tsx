'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Burada gerçek bir API çağrısı yapılacaktır.
    // Bu örnek için sadece başarılı olduğunu varsayıyoruz
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <main>
      <div className="container mx-auto px-4 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">İletişim</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* İletişim Bilgileri */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Şirket</h2>
                  <p>2K Eğitim Danışmanlık</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Adres</h2>
                  <p>Kadıköy, İstanbul</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">E-posta</h2>
                  <a href="mailto:info@2kegitim.com" className="text-blue-600 hover:underline">info@2kegitim.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full">
                  <FaPhoneAlt className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Telefon</h2>
                  <a href="tel:+905332630663" className="text-blue-600 hover:underline">0533 263 0663</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 flex-shrink-0 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full">
                  <FaClock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Çalışma Saatleri</h2>
                  <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                </div>
              </div>
              
              <div className="pt-6 mt-6 border-t border-gray-200">
                <Link href="https://wa.me/905332630663" className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp ile İletişime Geçin
                </Link>
              </div>
            </div>
          </div>
          
          {/* İletişim Formu */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6">Bize Yazın</h3>
            
            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <FaPaperPlane className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-green-700 mb-2">Mesajınız Gönderildi!</h4>
                <p className="text-green-600">En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Adınız Soyadınız*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-primary outline-none transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      E-posta Adresiniz*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-primary outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="company" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Şirket Adı
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-primary outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mesajınız*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-300 focus:border-primary outline-none transition-colors resize-none"
                  />
                </div>
                
                {submitError && (
                  <div className="text-red-500 text-sm">{submitError}</div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-medium text-white bg-primary hover:bg-primary-light transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 