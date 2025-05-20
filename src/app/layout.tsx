import type { Metadata, Viewport } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ThemeOverride from '@/components/ThemeOverride'

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
      { url: '/favicon.ico' },
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