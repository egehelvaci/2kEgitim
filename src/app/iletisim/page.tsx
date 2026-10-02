'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaPaperPlane, FaBuilding, FaCheckCircle, FaRobot, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
  const [showModal, setShowModal] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    try {
      // API'ye istek gönder
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        setShowModal(true);
        toast.success('Mesajınız başarıyla gönderildi!');
        
        // Formu sıfırla
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          kvkkApproval: false,
        });
      } else {
        toast.error('Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error);
      toast.error('Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Modal'ı kapat
  const closeModal = () => {
    setShowModal(false);
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
  
  // Modal animasyonu
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
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
      content: "Ataşehir, İstanbul"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "E-posta",
      content: <a href="mailto:info@2kegitim.com" className="text-amber-600 hover:text-amber-700 transition-colors">info@2kegitim.com</a>
    }
  ];

  return (
    <main className="bg-gradient-to-b from-white to-white py-16 px-4 pt-36 md:pt-40" style={{background: "linear-gradient(to bottom, white, rgba(245, 180, 33, 0.05))"}}>
      {/* Toast bildirimleri için container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      
      {/* Başarı Modal'ı */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div 
              className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button 
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                aria-label="Kapat"
              >
                <FaTimes className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <FaCheckCircle className="w-10 h-10 text-green-500" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Teşekkürler!</h3>
                <p className="text-gray-600 mb-6">Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.</p>
                
                <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                  <p className="text-amber-800 text-sm">
                    <strong>Bilgilendirme:</strong> Form bilgileriniz <span className="font-semibold">info@2kegitim.com</span> adresine iletilmiştir ve e-posta adresinize bir onay mesajı gönderilmiştir.
                  </p>
                </div>
                
                <button
                  onClick={closeModal}
                  className="mt-6 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Tamam
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
            Beraber <span style={{color: "#f5b421"}}>Tasarlayalım</span>, Eğitim Değil <span style={{color: "#f5b421"}}>Çözüm</span> Olsun
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Size doğru soruları sorabilmemiz için bizimle iletişime geçin. Çünkü ancak birlikte anlayarak, sahaya uygun çözümler üretebiliriz.
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
                  <Link href="mailto:info@2kegitim.com"
                    className="flex items-center justify-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <FaEnvelope className="w-6 h-6 mr-3" />
                    E-posta ile İletişime Geçin
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
                
                {submitSuccess && !showModal ? (
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