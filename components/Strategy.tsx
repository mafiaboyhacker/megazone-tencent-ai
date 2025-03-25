'use client'

import { motion } from 'framer-motion'
import {
  RocketLaunchIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const strategies = [
  {
    title: '단계적 시장 확장',
    icon: RocketLaunchIcon,
    steps: [
      '게임사 고객 AI 서비스 확장',
      '미디어/엔터테인먼트 산업 진출',
      '전체 산업으로 확대',
    ],
  },
  {
    title: '비즈니스 모델',
    icon: CurrencyDollarIcon,
    steps: [
      '엔터프라이즈 통합 AI 플랫폼',
      'AI 비즈니스 스타터 패키지',
      '페이 애즈 유 고 모델',
    ],
  },
  {
    title: '파트너십 전략',
    icon: UserGroupIcon,
    steps: [
      '학계 및 연구기관 협력',
      '산업별 대표기업 협력',
      'GPU 제조사와 파트너십',
    ],
  },
  {
    title: '성장 목표',
    icon: ChartBarIcon,
    steps: [
      '2025년까지 시장점유율 10% 달성',
      '연간 고객 증가율 50% 이상',
      'AI 서비스 매출 비중 30% 확대',
    ],
  },
]

export default function Strategy() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" data-aos="fade-up">
            전략적 제안
          </h2>
          <p className="text-gray-400 text-lg" data-aos="fade-up" data-aos-delay="200">
            시장 선도를 위한 단계별 전략
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 overflow-hidden group hover:from-gray-700 hover:to-gray-800 transition-colors duration-300"
            >
              {/* 배경 효과 */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              <div className="relative z-10">
                <strategy.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">{strategy.title}</h3>
                
                <div className="space-y-4">
                  {strategy.steps.map((step, stepIndex) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (stepIndex * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-sm">
                        {stepIndex + 1}
                      </span>
                      <span className="text-gray-300">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 호버 효과 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            <span>전략 상세 문서 다운로드</span>
            <svg
              className="ml-2 w-5 h-5"
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
          </a>
        </motion.div>
      </div>
    </section>
  )
} 