import React from 'react';

export const metadata = {
  title: 'Çerez Politikası | 2K Eğitim',
  description: '2K Eğitim web sitesi çerez politikası ve kullanım bilgileri',
};

const CerezPolitikasi = () => {
  return (
    <div className="bg-white py-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Çerez Politikası</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-lg text-gray-600 mb-8">
            Bu Çerez Politikası, 2K Eğitim web sitesinde çerezlerin nasıl kullanıldığını açıklamaktadır. 
            Sitemizi ziyaret ettiğinizde çerezler aracılığıyla hangi bilgilerin toplandığını ve bu bilgilerin nasıl kullanıldığını anlamanız için bu metni dikkatlice okumanızı öneririz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Çerez Nedir?</h2>
          <p>
            Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınıza yerleştirilen küçük metin dosyalarıdır. 
            Bu dosyalar sizin tercihlerinizi ve site üzerindeki diğer etkinliklerinizi kaydetmek için yaygın olarak kullanılmaktadır. 
            Çerezler sayesinde internet sitesinin kullanıcı deneyimini iyileştirmek ve kullanıcı davranışlarını analiz etmek mümkün olur.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Kullandığımız Çerez Türleri</h2>
          <p>Web sitemizde aşağıdaki çerez türleri kullanılmaktadır:</p>
          
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li className="mb-2">
              <strong>Zorunlu Çerezler:</strong> Bu çerezler web sitesinin düzgün çalışması için gereklidir. Oturum açma, form doldurma gibi temel özellikleri etkinleştirirler. Bu çerezler olmadan site düzgün çalışamaz.
            </li>
            <li className="mb-2">
              <strong>Performans Çerezleri:</strong> Bu çerezler, ziyaretçilerin web sitesini nasıl kullandığı hakkında bilgi toplar. Hangi sayfaların en çok ziyaret edildiği, hata mesajları alınıp alınmadığı gibi bilgileri kaydederler. Bu çerezler, ziyaretçinin kimliğini tanımlamaz.
            </li>
            <li className="mb-2">
              <strong>İşlevsellik Çerezleri:</strong> Bu çerezler, web sitesinin daha kişiselleştirilmiş bir deneyim sunmak için kullanıcının tercihlerini hatırlamasına olanak tanır. Dil tercihleri, metin boyutu ayarları gibi bilgiler bu çerezler aracılığıyla saklanır.
            </li>
            <li className="mb-2">
              <strong>Hedefleme/Reklam Çerezleri:</strong> Bu çerezler, kullanıcılara ilgi alanlarına göre reklamlar göstermek için kullanılır. Ayrıca, bir reklamın gösterilme sayısını sınırlamak ve reklam kampanyalarının etkinliğini ölçmek için de kullanılırlar.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Çerez Yönetimi</h2>
          <p>
            Çoğu internet tarayıcısı, çerezleri otomatik olarak kabul edecek şekilde ayarlanmıştır. Tarayıcı ayarlarınızı değiştirerek çerezleri engelleyebilir veya çerez gönderildiğinde uyarı verecek şekilde ayarlayabilirsiniz.
            Çerezleri nasıl yöneteceğinizle ilgili daha fazla bilgi için tarayıcınızın yardım menüsüne bakabilirsiniz.
          </p>
          <p className="mt-4">
            Çerezleri devre dışı bırakmak veya engellemek isterseniz, web sitemizdeki bazı özelliklerin düzgün çalışmayabileceğini lütfen unutmayın.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Politika Değişiklikleri</h2>
          <p>
            Çerez Politikamızı zaman zaman güncelleyebiliriz. Politikamızda yapılan değişiklikler, güncellenmiş politikanın web sitemizde yayınlanmasıyla birlikte yürürlüğe girer.
            Bu nedenle, politikamızda yapılan değişikliklerden haberdar olmak için bu sayfayı düzenli olarak ziyaret etmenizi öneririz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">İletişim</h2>
          <p>
            Çerez Politikamız hakkında sorularınız veya yorumlarınız varsa, lütfen <a href="mailto:info@2kegitim.com" className="text-blue-600 hover:text-blue-800">info@2kegitim.com</a> adresi üzerinden bizimle iletişime geçmekten çekinmeyin.
          </p>
          
          <p className="text-sm text-gray-500 mt-8">
            Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR', {day: 'numeric', month: 'long', year: 'numeric'})}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CerezPolitikasi; 