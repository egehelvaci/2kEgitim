import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: '2K Eğitim | Uzman, Sade, Anlaşılır',
  description: 'Hayatın içinde, işin mutfağında öğrenilmiş bilgiyle eğitim ve gelişim çözümleri üretiyoruz. 2K Eğitim, sizin gibi çalışan, sizin gibi düşünen ve sizin başarınız için sizinle aynı tarafta duran bir iş ortağıdır.',
  keywords: 'eğitim, danışmanlık, kurumsal eğitim, kişisel gelişim, finansal eğitim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <div className="content-wrapper pt-48">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
} 