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

    // Kullanıcıya gönderilecek e-posta
    const customerMailOptions = {
      from: 'info@2kegitim.com',
      to: email,
      subject: '2K Eğitim - İletişim Formunuz Alındı',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 10px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://www.2kegitim.com/images/logo/logo2k.png" alt="2K Eğitim Logo" style="max-width: 200px; width: 100%;">
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
            <img src="https://www.2kegitim.com/images/logo/logo2k.png" alt="2K Eğitim Logo" style="max-width: 150px; width: 100%;">
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