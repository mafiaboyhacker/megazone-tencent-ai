'use client'

import { motion } from 'framer-motion'
import { CloudArrowUpIcon, CpuChipIcon, BeakerIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: 'GPU 클라우드 서비스',
    description: '고성능 GPU 자원을 필요한 만큼 유연하게 사용할 수 있는 서비스를 제공합니다.',
    icon: CpuChipIcon,
    features: ['AI 모델 학습/추론', '렌더링 서비스', '연구용 컴퓨팅'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: '클라우드 파인튜닝',
    description: '사전 학습된 AI 모델을 고객의 요구사항에 맞게 최적화합니다.',
    icon: BeakerIcon,
    features: ['산업별 특화 모델', '한국어 최적화', '개인화 솔루션'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI 에이전트 서비스',
    description: '자동화된 작업 수행과 지능형 고객 응대를 위한 AI 에이전트를 제공합니다.',
    icon: CloudArrowUpIcon,
    features: ['고객 지원 자동화', '업무 프로세스 최적화', '데이터 분석'],
    color: 'from-green-500 to-teal-500',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" data-aos="fade-up">
            서비스 소개
          </h2>
          <p className="text-gray-400 text-lg" data-aos="fade-up" data-aos-delay="200">
            최첨단 AI 기술을 활용한 클라우드 서비스
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-6">
                <service.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 