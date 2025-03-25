'use client'

import { motion } from 'framer-motion'
import { BuildingOfficeIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const segments = [
  {
    title: '기업 고객',
    icon: BuildingOfficeIcon,
    description: '대기업 및 중견기업을 위한 엔터프라이즈급 AI 솔루션',
    needs: ['엔터프라이즈급 보안', '기존 시스템 통합', '확장 가능한 인프라'],
    opportunities: ['금융 리스크 평가', '의료 영상 분석', '제조 공정 최적화'],
  },
  {
    title: '소상공인',
    icon: ShoppingBagIcon,
    description: '중소기업과 소상공인을 위한 간편한 AI 서비스',
    needs: ['쉬운 사용성', '합리적인 가격', '빠른 도입'],
    opportunities: ['고객 관계 관리', '재고 관리', '마케팅 자동화'],
  },
  {
    title: '개인 사용자',
    icon: UserGroupIcon,
    description: '개발자, 연구자, 크리에이터를 위한 AI 플랫폼',
    needs: ['GPU 접근성', '개발 환경', '기술 지원'],
    opportunities: ['개인 프로젝트', '연구 활동', '콘텐츠 제작'],
  },
]

export default function CustomerSegments() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" data-aos="fade-up">
            고객 세그먼트
          </h2>
          <p className="text-gray-400 text-lg" data-aos="fade-up" data-aos-delay="200">
            다양한 고객층의 니즈에 맞춘 맞춤형 솔루션
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
            >
              <segment.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{segment.title}</h3>
              <p className="text-gray-400 mb-4">{segment.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">주요 니즈</h4>
                  <ul className="space-y-2">
                    {segment.needs.map((need) => (
                      <li key={need} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {need}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">기회 영역</h4>
                  <ul className="space-y-2">
                    {segment.opportunities.map((opportunity) => (
                      <li key={opportunity} className="flex items-center text-gray-300">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 