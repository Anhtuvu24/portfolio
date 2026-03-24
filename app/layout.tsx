import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Vũ Anh Tú — Fullstack Developer',
  description:
    'Fullstack Developer with 3+ years building scalable web apps in AI, insurance, and Web3 domains. Proficient in ReactJS, TypeScript, Node.js, and real-time systems.',
  keywords: [
    'Fullstack Developer',
    'ReactJS',
    'TypeScript',
    'NextJS',
    'NodeJS',
    'Vũ Anh Tú',
    'Frontend Developer',
    'Vietnam Developer',
    'Web Developer Hanoi',
  ],
  authors: [{ name: 'Vũ Anh Tú', url: 'https://portfolio-nine-iota-93.vercel.app/' }],
  creator: 'Vũ Anh Tú',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://portfolio-nine-iota-93.vercel.app/',
    title: 'Vũ Anh Tú — Fullstack Developer',
    description:
      'Fullstack Developer with 3+ years building scalable web apps in AI, insurance, and Web3 domains.',
    siteName: 'Vũ Anh Tú Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vũ Anh Tú — Fullstack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vũ Anh Tú — Fullstack Developer',
    description:
      'Fullstack Developer with 3+ years building scalable web apps in AI, insurance, and Web3 domains.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vuanhtu.dev',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${dmSerif.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#050810" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vũ Anh Tú',
              jobTitle: 'Fullstack Developer',
              email: 'anhtuvu2413@gmail.com',
              telephone: '0354394229',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hoài Đức',
                addressRegion: 'Hà Nội',
                addressCountry: 'VN',
              },
              knowsAbout: ['ReactJS', 'TypeScript', 'Node.js', 'ExpressJS', 'Web3', 'AI Applications'],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Hanoi University of Industry',
              },
            }),
          }}
        />
      </head>
      <body className="font-body bg-night-950 text-star-200 antialiased">
        <SpeedInsights />
        {children}
      </body>
    </html>
  )
}
