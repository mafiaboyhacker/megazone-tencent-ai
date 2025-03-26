'use client'

import { motion } from 'framer-motion'
import {
  RocketLaunchIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  SparklesIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline'

const marketData = [
  {
    title: '클라우드 시장',
    stats: [
      { year: 2025, value: '68.3억 달러' },
      { year: 2030, value: '198.9억 달러' },
      { label: '연평균 성장률', value: '23.82%' }
    ]
  },
  {
    title: 'AI 시장',
    stats: [
      { year: 2024, value: '31억 달러' },
      { year: 2033, value: '300억 달러' },
      { label: '연평균 성장률', value: '26.6%' }
    ]
  },
  {
    title: 'GPU 클라우드',
    stats: [
      { year: 2030, value: '4.93억 달러' },
      { label: '연평균 성장률', value: '24.4%' }
    ]
  }
]

const strategies = [
  {
    title: '단계적 시장 확장',
    icon: RocketLaunchIcon,
    description: '게임 산업(230억 달러)에서 AI 시장(2025년 7.72억 달러)으로 확장',
    steps: [
      '게임사 고객 AI 서비스 확장',
      '미디어/엔터테인먼트 산업 진출',
      '전체 산업으로 확대 (2030년 23.6억 달러 시장)',
    ],
  },
  {
    title: '비즈니스 모델',
    icon: CurrencyDollarIcon,
    description: 'AI 도입을 통한 GDP 12.6% 증가 전망',
    steps: [
      '엔터프라이즈 통합 AI 플랫폼',
      'AI 비즈니스 스타터 패키지',
      '페이 애즈 유 고 모델',
    ],
  },
  {
    title: '시장 점유율',
    icon: ChartBarIcon,
    description: 'AWS(62.1%), Azure(12%) 대비 차별화 전략',
    steps: [
      '2025년까지 시장점유율 10% 달성',
      '연간 고객 증가율 50% 이상',
      'AI 서비스 매출 비중 30% 확대',
    ],
  },
]

export default function Strategy() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/@TKLABEL_KIMTAEEUN.MD');
      if (!response.ok) throw new Error('파일을 찾을 수 없습니다.');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', '@TKLABEL_KIMTAEEUN.MD');
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('다운로드 중 오류가 발생했습니다:', error);
      alert('파일 다운로드에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-blue-900/20 to-black relative overflow-hidden">
      {/* 배경 그래픽 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rotate-12 transform scale-150" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent -rotate-12 transform scale-150" />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative"
        >
          <SparklesIcon className="w-12 h-12 mx-auto mb-6 text-blue-500" />
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-8">
            전략적 제안
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            메가존클라우드와 텐센트클라우드의 AI 시장 진출 전략
            <br />
            <span className="text-sm">2025년까지 1만개 GPU 확보 목표</span>
          </p>
        </motion.div>

        {/* 시장 데이터 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {marketData.map((market, index) => (
            <motion.div
              key={market.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative group"
            >
              <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <PresentationChartLineIcon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{market.title}</h3>
              <ul className="space-y-3">
                {market.stats.map((stat, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span className="text-gray-400">
                      {stat.year ? `${stat.year}년` : stat.label}:
                    </span>
                    <span className="text-blue-400 font-semibold">{stat.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 전략 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative group"
            >
              <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <strategy.icon className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">{strategy.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{strategy.description}</p>
              <ul className="space-y-3">
                {strategy.steps.map((step, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    <span className="text-gray-400">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center relative"
        >
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <span>전략 상세 문서 다운로드</span>
            <svg
              className="ml-2 w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
} 