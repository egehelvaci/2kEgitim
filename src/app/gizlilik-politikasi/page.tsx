import React from 'react';

export const metadata = {
  title: 'Gizlilik Politikası | 2K Eğitim',
  description: '2K Eğitim web sitesi gizlilik politikası ve kişisel verilerin korunması hakkında bilgiler',
};

const GizlilikPolitikasi = () => {
  return (
    <div className="bg-white py-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Gizlilik Politikası</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-lg text-gray-600 mb-8">
            2K Eğitim olarak, kişisel verilerinizin gizliliğini korumayı taahhüt ediyoruz. 
            Bu Gizlilik Politikası, web sitemiz üzerinden toplanan kişisel verilerin nasıl kullanıldığını, paylaşıldığını ve korunduğunu açıklamaktadır.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Topladığımız Bilgiler</h2>
          <p>
            Web sitemizi ziyaret ettiğinizde veya hizmetlerimizden yararlandığınızda aşağıdaki bilgileri toplayabiliriz:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li className="mb-2">
              <strong>Kişisel Bilgiler:</strong> Ad, soyad, e-posta adresi, telefon numarası, şirket adı, pozisyon gibi iletişim formları veya hizmet başvuruları aracılığıyla sağladığınız bilgiler.
            </li>
            <li className="mb-2">
              <strong>Kullanım Bilgileri:</strong> IP adresi, tarayıcı türü, ziyaret ettiğiniz sayfalar, web sitemizde geçirdiğiniz süre, tıkladığınız bağlantılar ve web sitemizle etkileşim kurma şekliniz hakkında bilgiler.
            </li>
            <li className="mb-2">
              <strong>Çerezler ve Benzer Teknolojiler:</strong> Web sitemiz, deneyiminizi kişiselleştirmek, site kullanımını analiz etmek ve pazarlama çabalarımızı iyileştirmek için çerezler ve benzer teknolojiler kullanır.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Bilgilerinizi Nasıl Kullanıyoruz</h2>
          <p>Topladığımız bilgileri aşağıdaki amaçlar için kullanabiliriz:</p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li className="mb-2">Hizmetlerimizi sağlamak ve iyileştirmek</li>
            <li className="mb-2">Sorularınıza ve taleplerinize yanıt vermek</li>
            <li className="mb-2">Size özel teklifler, ürünler ve hizmetler hakkında bilgi göndermek</li>
            <li className="mb-2">Web sitemizin ve hizmetlerimizin kullanımını analiz etmek</li>
            <li className="mb-2">Teknik sorunları tespit etmek ve çözmek</li>
            <li className="mb-2">Dolandırıcılığı önlemek ve güvenliği sağlamak</li>
            <li className="mb-2">Yasal yükümlülüklerimizi yerine getirmek</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Bilgilerin Paylaşılması</h2>
          <p>
            Kişisel verilerinizi aşağıdaki durumlarda üçüncü taraflarla paylaşabiliriz:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li className="mb-2">
              <strong>Hizmet Sağlayıcılar:</strong> Web sitemizi işletmek, hizmetlerimizi sunmak veya pazarlama faaliyetlerini yürütmek için güvendiğimiz üçüncü taraf hizmet sağlayıcılar.
            </li>
            <li className="mb-2">
              <strong>Yasal Gereklilikler:</strong> Yasal bir yükümlülüğe uymak, yasal süreci takip etmek veya kamu yetkililerinin taleplerini karşılamak için gerekli olduğunda.
            </li>
            <li className="mb-2">
              <strong>İş Transferleri:</strong> Bir birleşme, şirket satışı veya varlık satışı durumunda bilgileriniz aktarılan varlıkların bir parçası olabilir.
            </li>
            <li className="mb-2">
              <strong>İzninizle:</strong> Bilgilerinizi paylaşmak için açık izninizi aldığımız diğer durumlarda.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizi korumak için uygun teknik ve organizasyonel önlemleri alıyoruz. Ancak, internet üzerinden hiçbir veri iletiminin veya elektronik depolamanın %100 güvenli olmadığını unutmayın.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Veri Saklama</h2>
          <p>
            Kişisel verilerinizi, bu verileri toplama amacımız için gerekli olduğu sürece veya yasal yükümlülüklerimize uymak için gereken süre boyunca saklarız.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Haklarınız</h2>
          <p>
            Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li className="mb-2">Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li className="mb-2">Kişisel verilerinize erişim isteme</li>
            <li className="mb-2">Kişisel verilerinizin düzeltilmesini veya silinmesini talep etme</li>
            <li className="mb-2">Kişisel verilerinizin işlenmesine itiraz etme</li>
            <li className="mb-2">Kişisel verilerinizin işlenmesini kısıtlama</li>
            <li className="mb-2">Kişisel verilerinizi taşıma</li>
          </ul>
          <p>
            Bu haklarınızdan herhangi birini kullanmak için lütfen aşağıdaki iletişim bilgilerimiz üzerinden bizimle iletişime geçin.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Çocukların Gizliliği</h2>
          <p>
            Web sitemiz 18 yaşın altındaki kişilere yönelik değildir. Bilerek 18 yaşın altındaki bireylerden kişisel veri toplamıyoruz. 18 yaşın altındaki bir çocuğun bize kişisel verilerini sağladığını fark edersek, bu bilgileri kayıtlarımızdan silmek için adımlar atarız.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Üçüncü Taraf Bağlantıları</h2>
          <p>
            Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu web sitelerinin gizlilik uygulamalarından veya içeriğinden sorumlu değiliz. Bu web sitelerini ziyaret ettiğinizde, onların gizlilik politikalarını incelemenizi öneririz.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Gizlilik Politikası Değişiklikleri</h2>
          <p>
            Bu Gizlilik Politikasını istediğimiz zaman güncelleme hakkını saklı tutuyoruz. Güncellemeler web sitemizde yayınlandığında yürürlüğe girer. Önemli değişiklikler olması durumunda, sizi bilgilendirmek için makul adımlar atacağız.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. İletişim</h2>
          <p>
            Bu Gizlilik Politikası hakkında sorularınız veya endişeleriniz varsa, lütfen <a href="mailto:info@2kegitim.com" className="text-blue-600 hover:text-blue-800">info@2kegitim.com</a> adresi üzerinden bizimle iletişime geçmekten çekinmeyin.
          </p>
          
          <p className="text-sm text-gray-500 mt-8">
            Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR', {day: 'numeric', month: 'long', year: 'numeric'})}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GizlilikPolitikasi; 