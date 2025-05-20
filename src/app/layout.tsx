import type { Metadata, Viewport } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeOverride from '@/components/ThemeOverride'
import Script from 'next/script'

const rubik = Rubik({ 
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: '2K Eğitim | Uzman, Sade, Anlaşılır',
  description: 'Hayatın içinde, işin mutfağında öğrenilmiş bilgiyle eğitim ve gelişim çözümleri üretiyoruz. 2K Eğitim, sizin gibi çalışan, sizin gibi düşünen ve sizin başarınız için sizinle aynı tarafta duran bir iş ortağıdır.',
  keywords: 'eğitim, danışmanlık, kurumsal eğitim, kişisel gelişim, finansal eğitim',
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
  other: {
    'forced-colors': 'none',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
  colorScheme: 'only light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${rubik.variable} light`} data-force-color-scheme="light">
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="forced-colors" content="none" />
        <meta name="google-site-verification" content="aO2WdNlk5JwqCSFoXegu9GmPD5rte16Om8nMG-hTHeg" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* JSON-LD yapılandırılmış veri - Google için Organization schema'sı */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '2K Eğitim',
              url: 'https://www.2kegitim.com',
              logo: 'https://www.2kegitim.com/images/logo/logo2k.png',
              sameAs: [
                'https://www.instagram.com/2kegitim',
                'https://www.linkedin.com/company/2kegitim'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+905332630663',
                contactType: 'customer service',
                email: 'info@2kegitim.com',
                areaServed: 'TR',
                availableLanguage: ['Turkish', 'English']
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'İstanbul',
                addressRegion: 'Ataşehir',
                addressCountry: 'TR'
              },
              description: 'Hayatın içinde, işin mutfağında öğrenilmiş bilgiyle eğitim ve gelişim çözümleri üretiyoruz.'
            })
          }}
        />
      </head>
      <body className={`${rubik.className} bg-white text-black`}>
        <ThemeOverride />
        <Header />
        <div className="content-wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
} 