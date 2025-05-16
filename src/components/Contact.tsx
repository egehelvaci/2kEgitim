'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaRobot } from 'react-icons/fa';

const Contact = () => {
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

  return (
    <section id="contact" className="section bg-gradient-to-b from-gray-50 to-white pt-36 md:pt-40">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            <span className="text-primary">İletişim</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Sorularınız veya iş birliği fırsatları için bizimle iletişime geçin.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">İletişim Bilgilerimiz</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-primary">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Adres</h4>
                    <p className="text-gray-600">İstanbul, Türkiye</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-primary">
                    <FaPhoneAlt className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Telefon</h4>
                    <p className="text-gray-600">+90 (533) 263 06 63</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-primary">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">E-posta</h4>
                    <p className="text-gray-600">info@2kegitim.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-50 text-primary">
                    <FaClock className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Çalışma Saatleri</h4>
                    <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-5 bg-gray-50 rounded-xl">
                <h4 className="font-semibold mb-2">Hızlı Yanıt İçin</h4>
                <p className="text-gray-600 text-sm">Eğitim ve danışmanlık ihtiyaçlarınızla ilgili hızlı yanıt için formu doldurarak bizimle iletişime geçebilirsiniz.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
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
                  
                  <div className="space-y-4">
                    {/* KVKK Onay Kutusu */}
                    <div className="flex items-start mt-4">
                      <div className="flex items-center h-5">
                        <input
                          id="kvkkApproval"
                          name="kvkkApproval"
                          type="checkbox"
                          checked={formData.kvkkApproval}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="kvkkApproval" className="text-sm text-gray-600">
                          <a href="/kvkk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">KVKK Aydınlatma Metni</a>&apos;ni okudum ve kişisel verilerimin işlenmesine onay veriyorum.
                        </label>
                        {formErrors.kvkkApproval && (
                          <p className="mt-1 text-sm text-red-600">{formErrors.kvkkApproval}</p>
                        )}
                      </div>
                    </div>
                    
                    {/* Robot Değilim Doğrulaması */}
                    <div className="flex items-start mt-4">
                      <div className="flex items-center h-5">
                        <input
                          id="notRobot"
                          name="notRobot"
                          type="checkbox"
                          checked={formData.notRobot}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
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
                    </div>
                  </div>
                  
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 