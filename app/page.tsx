import { Metadata } from 'next'
import Hero from '@/components/Hero'
import MarketAnalysis from '@/components/MarketAnalysis'
import Services from '@/components/Services'
import CustomerSegments from '@/components/CustomerSegments'
import CompetitiveAnalysis from '@/components/CompetitiveAnalysis'
import Strategy from '@/components/Strategy'

export const metadata: Metadata = {
  title: '메가존클라우드 & 텐센트 클라우드 코리아 - AI 시장 협업 전략',
  description: 'AI 시장 협업 전략 보고서 - 클라우드 서비스의 미래',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Hero />
      <MarketAnalysis />
      <Services />
      <CustomerSegments />
      <CompetitiveAnalysis />
      <Strategy />
    </main>
  )
} 