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
    notRobot: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formFocus, setFormFocus] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{
    kvkkApproval?: string;
    notRobot?: string;
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
      notRobot?: string;
    } = {};
    
    if (!formData.kvkkApproval) {
      errors.kvkkApproval = "KVKK aydınlatma metnini onaylamanız gerekmektedir.";
    }
    
    if (!formData.notRobot) {
      errors.notRobot = "Robot olmadığınızı doğrulamanız gerekmektedir.";
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
        notRobot: false,
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
    <main className="bg-gradient-to-b from-white to-amber-50/50 py-16 px-4 pt-36 md:pt-40">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
            <span className="text-amber-600">İletişim</span>e Geçin
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Eğitim çözümlerimiz hakkında bilgi almak veya işbirliği yapmak için bizimle iletişime geçin.
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
            <div className="bg-white p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-amber-100 h-full transform hover:scale-[1.01] transition-all duration-300">
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
                    <div className="mr-4 w-12 h-12 flex-shrink-0 flex items-center justify-center bg-amber-100 text-amber-600 rounded-xl shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                      <div className="text-gray-600">{item.content}</div>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="pt-6 mt-6 border-t border-amber-100"
                  variants={itemVariants}
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
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100 overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full opacity-30 blur-2xl z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-200 rounded-full opacity-30 blur-2xl z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Bize <span className="text-amber-600">Yazın</span></h3>
                
                {submitSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-8 text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <FaCheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-amber-700 mb-3">Mesajınız Gönderildi!</h4>
                    <p className="text-amber-700">En kısa sürede sizinle iletişime geçeceğiz.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
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
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-4 py-3 rounded-xl border ${formFocus === 'name' ? 'border-amber-400 ring-2 ring-amber-200' : 'border-gray-200'} focus:outline-none transition-all duration-300 bg-amber-50/30`}
                      />
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
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
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          required
                          className={`w-full px-4 py-3 rounded-xl border ${formFocus === 'email' ? 'border-amber-400 ring-2 ring-amber-200' : 'border-gray-200'} focus:outline-none transition-all duration-300 bg-amber-50/30`}
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
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
                          onFocus={() => handleFocus('phone')}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 rounded-xl border ${formFocus === 'phone' ? 'border-amber-400 ring-2 ring-amber-200' : 'border-gray-200'} focus:outline-none transition-all duration-300 bg-amber-50/30`}
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
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
                        onFocus={() => handleFocus('company')}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 rounded-xl border ${formFocus === 'company' ? 'border-amber-400 ring-2 ring-amber-200' : 'border-gray-200'} focus:outline-none transition-all duration-300 bg-amber-50/30`}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
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
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        required
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border ${formFocus === 'message' ? 'border-amber-400 ring-2 ring-amber-200' : 'border-gray-200'} focus:outline-none transition-all duration-300 resize-none bg-amber-50/30`}
                      />
                    </motion.div>
                    
                    {/* KVKK Onay Kutusu */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                      className="flex items-start"
                    >
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="kvkkApproval"
                          name="kvkkApproval"
                          type="checkbox"
                          checked={formData.kvkkApproval}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="kvkkApproval" className="text-sm text-gray-600">
                          <a href="/kvkk" className="text-amber-600 hover:underline" target="_blank" rel="noopener noreferrer">KVKK Aydınlatma Metni</a>&apos;ni okudum ve kişisel verilerimin işlenmesine onay veriyorum.
                        </label>
                        {formErrors.kvkkApproval && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.kvkkApproval}</p>
                        )}
                      </div>
                    </motion.div>
                    
                    {/* Robot Değilim Doğrulaması */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-start"
                    >
                      <div className="flex items-center h-5 mt-1">
                        <input
                          id="notRobot"
                          name="notRobot"
                          type="checkbox"
                          checked={formData.notRobot}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                      </div>
                      <div className="ml-3 flex items-center">
                        <label htmlFor="notRobot" className="text-sm text-gray-600 flex items-center">
                          <FaRobot className="text-gray-400 mr-2" /> Robot olmadığımı doğruluyorum
                        </label>
                        {formErrors.notRobot && (
                          <p className="mt-1 text-sm text-red-600 ml-2">{formErrors.notRobot}</p>
                        )}
                      </div>
                    </motion.div>
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 rounded-xl font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-md hover:shadow-lg transform transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65 }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Gönderiliyor...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <FaPaperPlane className="mr-2" />
                          Gönder
                        </span>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 