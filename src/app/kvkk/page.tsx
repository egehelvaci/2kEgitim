import React from 'react';

export const metadata = {
  title: 'KVKK Aydınlatma Metni | 2K Eğitim',
  description: '2K Eğitim tarafından işlenen kişisel verileriniz hakkında bilgilendirme ve KVKK kapsamındaki haklarınız',
};

const KVKKPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 pt-20">KVKK Aydınlatma Metni</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-lg text-gray-600 mb-8">
            Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, veri sorumlusu sıfatıyla 
            2K Eğitim Danışmanlık ("2K Eğitim") tarafından kişisel verilerinizin işlenmesine ilişkin açıklamalar içermektedir.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Kişisel Verilerin İşlenme Amacı</h2>
          <p>
            Kişisel verileriniz aşağıdaki amaçlar doğrultusunda işlenmektedir:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li className="mb-2">Eğitim ve danışmanlık hizmetlerimizin sunulması</li>
            <li className="mb-2">İletişim faaliyetlerinin yürütülmesi</li>
            <li className="mb-2">Tarafınıza özel hizmet ve tekliflerin sunulması</li>
            <li className="mb-2">Müşteri memnuniyeti ve şikâyet yönetimi süreçlerinin yürütülmesi</li>
            <li className="mb-2">Sözleşme süreçlerinin yürütülmesi</li>
            <li className="mb-2">Pazarlama analiz çalışmalarının yapılması</li>
            <li className="mb-2">Hukuki yükümlülüklerin yerine getirilmesi</li>
            <li className="mb-2">İş faaliyetlerinin yürütülmesi</li>
            <li className="mb-2">Saklama ve arşiv faaliyetlerinin yürütülmesi</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. İşlenen Kişisel Veri Kategorileri</h2>
          <p>
            İşlenen kişisel verileriniz aşağıdaki kategorilerde yer almaktadır:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li className="mb-2">
              <strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası
            </li>
            <li className="mb-2">
              <strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres
            </li>
            <li className="mb-2">
              <strong>Müşteri İşlem Bilgileri:</strong> Eğitim bilgileri, talep bilgileri
            </li>
            <li className="mb-2">
              <strong>Çalışma Bilgileri:</strong> Şirket adı, departman, unvan
            </li>
            <li className="mb-2">
              <strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, çerez bilgileri
            </li>
            <li className="mb-2">
              <strong>Pazarlama Bilgileri:</strong> Alışkanlık ve beğenilerinize ilişkin bilgiler
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Kişisel Verilerin Aktarılması</h2>
          <p>
            Kişisel verileriniz, yukarıda belirtilen amaçlar doğrultusunda ve KVKK'nın 8. ve 9. maddelerinde belirtilen koşullara uygun olarak aşağıdaki alıcı gruplarına aktarılabilmektedir:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li className="mb-2">
              <strong>İş Ortaklarımız:</strong> Eğitim ve danışmanlık hizmetlerinin yürütülmesi amacıyla iş birliği içinde olduğumuz kuruluşlar
            </li>
            <li className="mb-2">
              <strong>Tedarikçilerimiz:</strong> Hizmetlerimizin yürütülmesi kapsamında destek aldığımız hizmet sağlayıcılar
            </li>
            <li className="mb-2">
              <strong>Hukuki Zorunluluklar:</strong> Yasal yükümlülüklerimiz kapsamında kamu kurum ve kuruluşları
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
          <p>
            Kişisel verileriniz, her türlü sözlü, yazılı, elektronik ortamda; web sitemiz, e-posta, telefon, form doldurma ve diğer yollarla toplanmakta ve işlenmektedir. Bu veriler, KVKK'nın 5. ve 6. maddelerinde belirtilen aşağıdaki hukuki sebeplere dayanarak işlenmektedir:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li className="mb-2">Açık rızanızın bulunması</li>
            <li className="mb-2">Kanunlarda açıkça öngörülmesi</li>
            <li className="mb-2">Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
            <li className="mb-2">Hukuki yükümlülüğümüzün yerine getirilmesi</li>
            <li className="mb-2">Temel hak ve özgürlüklerinize zarar vermemek kaydıyla, meşru menfaatlerimiz için veri işlenmesinin zorunlu olması</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Kişisel Veri Sahibinin KVKK Kapsamındaki Hakları</h2>
          <p>
            KVKK'nın 11. maddesi uyarınca, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li className="mb-2">Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li className="mb-2">Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
            <li className="mb-2">Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li className="mb-2">Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
            <li className="mb-2">Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
            <li className="mb-2">KVKK ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
            <li className="mb-2">Düzeltme, silme veya yok etme işlemlerinin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
            <li className="mb-2">İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişisel verilerinizin aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li className="mb-2">Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Kişisel Veri Sahibinin Haklarını Kullanma Yöntemi</h2>
          <p>
            Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle başvuruda bulunabilirsiniz:
          </p>
          <ul className="list-disc pl-6 mt-4 mb-6">
            <li className="mb-2">
              <strong>E-posta yoluyla:</strong> <a href="mailto:info@2kegitim.com" className="text-amber-600 hover:text-amber-700">info@2kegitim.com</a> adresine güvenli elektronik imzalı veya mobil imzalı olarak ya da sistemimizde kayıtlı e-posta adresiniz üzerinden
            </li>
            <li className="mb-2">
              <strong>Yazılı olarak:</strong> Kimliğinizi tevsik edici belgeler ile iadeli taahhütlü posta yoluyla veya noter kanalıyla
            </li>
          </ul>
          <p>
            Başvurunuzda; adınız-soyadınız, T.C. kimlik numaranız, iletişim bilgileriniz, talep konusu ve kimliğinizi doğrulayıcı belgeler bulunmalıdır.
          </p>
          <p>
            Başvurunuz, talebin niteliğine göre en kısa sürede ve en geç 30 (otuz) gün içinde ücretsiz olarak sonuçlandırılacaktır. İşlemin ayrıca bir maliyet gerektirmesi halinde, Kişisel Verileri Koruma Kurulu tarafından belirlenen tarife üzerinden ücret talep edilebilecektir.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Kişisel Verilerin Korunması</h2>
          <p>
            2K Eğitim, kişisel verilerinizin gizliliğini ve güvenliğini korumak için uygun güvenlik düzeyini temin etmeye yönelik gerekli her türlü teknik ve idari tedbiri almakta, bu kapsamda gerekli denetimleri yapmakta veya yaptırmaktadır.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Kişisel Verilerin Saklanması</h2>
          <p>
            Kişisel verileriniz, işlenme amaçlarının gerektirdiği süreler boyunca ve yasal yükümlülüklerimiz kapsamında saklanmaktadır. Saklanması gereken süre sona erdiğinde, kişisel verileriniz silinmekte, yok edilmekte veya anonim hale getirilmektedir.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Aydınlatma Metninde Değişiklikler</h2>
          <p>
            2K Eğitim, işbu aydınlatma metninde her zaman değişiklik yapabilir. Değişiklik yapılması halinde, aydınlatma metni güncel haliyle web sitemizde yayınlanacaktır.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Son güncellenme tarihi: {new Date().toLocaleDateString('tr-TR', {day: 'numeric', month: 'long', year: 'numeric'})}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KVKKPage; 