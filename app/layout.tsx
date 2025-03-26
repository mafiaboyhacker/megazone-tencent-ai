import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '메가존클라우드 & 텐센트 클라우드 코리아',
  description: 'AI 시장 협업 전략 보고서',
  metadataBase: new URL('https://megazone-tencent-ai.vercel.app'),
  openGraph: {
    title: '메가존클라우드 & 텐센트 클라우드 코리아',
    description: 'AI 시장 협업 전략 보고서',
    url: 'https://megazone-tencent-ai.vercel.app',
    siteName: '메가존클라우드 & 텐센트 클라우드 코리아',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '메가존클라우드 & 텐센트 클라우드 코리아',
    description: 'AI 시장 협업 전략 보고서',
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console 인증 코드
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <Analytics 
          beforeSend={(event) => {
            // 사용자 상호작용 이벤트 필터링
            if (event.type === 'click') {
              return {
                ...event,
                properties: {
                  ...event.properties,
                  timestamp: new Date().toISOString(),
                  userAgent: navigator.userAgent,
                  language: navigator.language,
                }
              }
            }
            return event;
          }}
          mode="production" // production 또는 development
        />
        <SpeedInsights />
      </body>
    </html>
  )
}
