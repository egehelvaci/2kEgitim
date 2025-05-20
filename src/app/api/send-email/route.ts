import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // E-posta göndermek için gerekli olan yapılandırma
    // NOT: Gmail kullanıyorsanız, "Daha az güvenli uygulama erişimi"ni açmanız gerekebilir
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // SMTP sunucusu (Gmail için örnek)
      port: 465, // SSL portu
      secure: true,
      auth: {
        user: 'info@2kegitim.com', // Gönderen e-posta adresi
        pass: process.env.EMAIL_PASSWORD || '19072k1907', // E-posta şifresi (güvenlik için .env dosyasından alınmalı)
      },
    });

    // Base64 kodlu logo (2K Eğitim logosu)
    const logoBase64 = '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';

    // Kullanıcıya gönderilecek e-posta
    const customerMailOptions = {
      from: 'info@2kegitim.com',
      to: email,
      subject: '2K Eğitim - İletişim Formunuz Alındı',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="data:image/png;base64,${logoBase64}" alt="2K Eğitim Logo" style="max-width: 200px; width: 100%;">
          </div>
          <h2 style="color: #f5b421; text-align: center;">Teşekkürler, ${name}!</h2>
          <p>Mesajınız başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #444;">Mesajınızın Detayları:</h3>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Şirket:</strong> ${company}</p>` : ''}
            <p><strong>Mesaj:</strong> ${message}</p>
          </div>
          <p style="font-size: 12px; color: #888; text-align: center; margin-top: 30px;">
            Bu e-posta, iletişim formunu doldurduğunuz için otomatik olarak gönderilmiştir. Lütfen bu e-postayı yanıtlamayınız.
          </p>
        </div>
      `,
    };

    // Site sahibine gönderilecek e-posta
    const ownerMailOptions = {
      from: 'info@2kegitim.com',
      to: 'info@2kegitim.com', // Site sahibinin e-posta adresi
      subject: `Yeni İletişim Formu: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="data:image/png;base64,${logoBase64}" alt="2K Eğitim Logo" style="max-width: 150px; width: 100%;">
          </div>
          <h2 style="color: #f5b421;">Yeni İletişim Formu</h2>
          <p>Website'nin iletişim formundan yeni bir mesaj aldınız.</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #444;">Mesaj Detayları:</h3>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Şirket:</strong> ${company}</p>` : ''}
            <p><strong>Mesaj:</strong> ${message}</p>
          </div>
          <p>Bu kişiye cevap vermek için doğrudan bu e-postayı yanıtlayabilirsiniz.</p>
        </div>
      `,
    };

    // E-postaları gönder
    await transporter.sendMail(customerMailOptions);
    await transporter.sendMail(ownerMailOptions);

    return NextResponse.json({
      success: true,
      message: 'E-postalar başarıyla gönderildi.',
    });
  } catch (error) {
    console.error('E-posta gönderme hatası:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'E-posta gönderilirken bir hata oluştu.',
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
} 