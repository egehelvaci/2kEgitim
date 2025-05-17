'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaBuilding, FaCheckCircle, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    kvkkApproval: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formFocus, setFormFocus] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{
    kvkkApproval?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    
    // Hata mesajını temizle
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleFocus = (fieldName: string) => {
    setFormFocus(fieldName);
  };

  const handleBlur = () => {
    setFormFocus(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formda hata kontrolü
    const errors: {
      kvkkApproval?: string;
    } = {};
    
    if (!formData.kvkkApproval) {
      errors.kvkkApproval = "KVKK aydınlatma metnini onaylamanız gerekmektedir.";
    }
    
    // Eğer hata varsa formu gönderme
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
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
        kvkkApproval: false,
      });
    }, 1500);
  };

  // Animasyon varyantları
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const contactItems = [
    {
      icon: <FaBuilding className="w-5 h-5" />,
      title: "Şirket",
      content: "2K Eğitim Danışmanlık"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Adres",
      content: "Kadıköy, İstanbul"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "E-posta",
      content: <a href="mailto:info@2kegitim.com" className="text-amber-600 hover:text-amber-700 transition-colors">info@2kegitim.com</a>
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      title: "Telefon",
      content: <a href="tel:+905332630663" className="text-amber-600 hover:text-amber-700 transition-colors">0533 263 0663</a>
    },
    {
      icon: <FaClock className="w-5 h-5" />,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00"
    }
  ];

  return (
    <main className="bg-gradient-to-b from-white to-white py-16 px-4 pt-36 md:pt-40" style={{background: "linear-gradient(to bottom, white, rgba(245, 180, 33, 0.05))"}}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
            Sizin İçin <span style={{color: "#f5b421"}}>Buradayız</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Eğitim ihtiyacınızı birlikte konuşalım, kurumunuza özel çözümünüzü birlikte tasarlayalım.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* İletişim Bilgileri */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg backdrop-blur-sm h-full transform hover:scale-[1.01] transition-all duration-300" style={{borderColor: "rgba(245, 180, 33, 0.3)"}}>
              <motion.div 
                className="space-y-7"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {contactItems.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    variants={itemVariants}
                  >
                    <div className="mr-4 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl shadow-inner" 
                      style={{
                        backgroundColor: "rgba(245, 180, 33, 0.1)",
                        color: "#f5b421"
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                      <div className="text-gray-600">{item.content}</div>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="pt-6 mt-6"
                  variants={itemVariants}
                  style={{borderTopColor: "rgba(245, 180, 33, 0.3)"}}
                >
                  <Link href="https://wa.me/905332630663" 
                    className="flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp ile İletişime Geçin
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* İletişim Formu */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 overflow-hidden relative" style={{borderColor: "rgba(245, 180, 33, 0.3)"}}>
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30 blur-2xl z-0" style={{backgroundColor: "rgba(245, 180, 33, 0.1)"}}></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-30 blur-2xl z-0" style={{backgroundColor: "rgba(245, 180, 33, 0.2)"}}></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Bize <span style={{color: "#f5b421"}}>Yazın</span></h3>
                
                {submitSuccess ? (
                  <div 
                    className="rounded-xl p-8 text-center"
                    style={{
                      background: "linear-gradient(to right, rgba(245, 180, 33, 0.05), rgba(245, 180, 33, 0.1))",
                      border: "1px solid rgba(245, 180, 33, 0.2)"
                    }}
                  >
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{background: "linear-gradient(to right, #f5b421, #f5b421)"}}>
                      <FaCheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3" style={{color: "#e0a30a"}}>Mesajınız Gönderildi!</h4>
                    <p style={{color: "#e0a30a"}}>En kısa sürede sizinle iletişime geçeceğiz.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Adınız */}
                    <div className="form-group">
                      <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Tam adınızı giriniz"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all duration-300"
                        style={{
                          borderColor: formFocus === 'name' ? '#f5b421' : '#e5e7eb',
                          boxShadow: formFocus === 'name' ? '0 0 0 4px rgba(245, 180, 33, 0.2)' : 'none',
                          backgroundColor: "rgba(245, 180, 33, 0.03)"
                        }}
                      />
                    </div>

                    {/* E-posta */}
                    <div className="form-group">
                      <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                        E-posta Adresiniz
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="E-posta adresinizi giriniz"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all duration-300"
                        style={{
                          borderColor: formFocus === 'email' ? '#f5b421' : '#e5e7eb',
                          boxShadow: formFocus === 'email' ? '0 0 0 4px rgba(245, 180, 33, 0.2)' : 'none',
                          backgroundColor: "rgba(245, 180, 33, 0.03)"
                        }}
                      />
                    </div>

                    {/* Telefon */}
                    <div className="form-group">
                      <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
                        Telefon Numaranız
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Telefon numaranızı giriniz"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all duration-300"
                        style={{
                          borderColor: formFocus === 'phone' ? '#f5b421' : '#e5e7eb',
                          boxShadow: formFocus === 'phone' ? '0 0 0 4px rgba(245, 180, 33, 0.2)' : 'none',
                          backgroundColor: "rgba(245, 180, 33, 0.03)"
                        }}
                      />
                    </div>

                    {/* Şirket Adı */}
                    <div className="form-group">
                      <label htmlFor="company" className="block mb-2 text-gray-700 font-medium">
                        Şirket Adı (Opsiyonel)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Şirket adını giriniz"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => handleFocus('company')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all duration-300"
                        style={{
                          borderColor: formFocus === 'company' ? '#f5b421' : '#e5e7eb',
                          boxShadow: formFocus === 'company' ? '0 0 0 4px rgba(245, 180, 33, 0.2)' : 'none',
                          backgroundColor: "rgba(245, 180, 33, 0.03)"
                        }}
                      />
                    </div>

                    {/* Mesaj */}
                    <div className="form-group">
                      <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Mesajınızı buraya giriniz"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 rounded-xl border focus:outline-none transition-all duration-300 resize-none"
                        style={{
                          borderColor: formFocus === 'message' ? '#f5b421' : '#e5e7eb',
                          boxShadow: formFocus === 'message' ? '0 0 0 4px rgba(245, 180, 33, 0.2)' : 'none',
                          backgroundColor: "rgba(245, 180, 33, 0.03)"
                        }}
                      />
                    </div>

                    {/* KVKK Onayı */}
                    <div className="form-group">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="kvkkApproval"
                            name="kvkkApproval"
                            type="checkbox"
                            checked={formData.kvkkApproval}
                            onChange={handleChange}
                            onFocus={() => handleFocus('kvkkApproval')}
                            onBlur={handleBlur}
                            className="w-5 h-5 rounded border-gray-300 focus:ring-2"
                            style={{
                              accentColor: "#f5b421",
                              borderColor: formErrors.kvkkApproval ? 'red' : '#f5b421'
                            }}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="kvkkApproval" className="text-gray-700">
                            <a href="/kvkk" className="hover:underline" style={{color: "#f5b421"}} target="_blank" rel="noopener noreferrer">KVKK Aydınlatma Metni</a>&apos;ni okudum ve kişisel verilerimin işlenmesine onay veriyorum.
                          </label>
                          {formErrors.kvkkApproval && <p className="text-red-500 text-xs mt-1">{formErrors.kvkkApproval}</p>}
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl font-medium text-white shadow-md hover:shadow-lg transform transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                      style={{
                        background: isSubmitting ? '#e0a30a' : 'linear-gradient(to right, #f5b421, #f5b421)'
                      }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                          Gönderiliyor...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <FaPaperPlane className="mr-2" /> Mesajı Gönder
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* KVKK Mini Metni */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 max-w-3xl mx-auto">
            Tarafımıza iletilen iletişim bilgileri, yalnızca sizinle bağlantı kurmak ve taleplerinizi değerlendirmek amacıyla kullanılacaktır. KVKK kapsamında tüm veriler gizli tutulur.
          </p>
        </div>
      </div>
    </main>
  );
} 