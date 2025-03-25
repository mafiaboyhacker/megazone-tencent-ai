'use client'

import { motion } from 'framer-motion'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const marketShareData = {
  labels: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Naver Cloud', '기타'],
  datasets: [
    {
      data: [62.1, 12, 8, 6, 11.9],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const competitors = [
  {
    name: 'AWS',
    strengths: ['포괄적인 서비스', 'SageMaker 등 AI 도구', '글로벌 인프라'],
    focus: '전체 시장',
  },
  {
    name: 'Microsoft Azure',
    strengths: ['기업 고객 강점', '통합 AI/ML 서비스', 'MS 제품 연동'],
    focus: '기업 시장',
  },
  {
    name: 'Google Cloud',
    strengths: ['강력한 AI/ML 기술', 'TensorFlow 생태계', '연구 지원'],
    focus: 'AI/ML 개발자',
  },
  {
    name: 'Naver Cloud',
    strengths: ['한국어 서비스', '로컬 규제 이해', '국내 인프라'],
    focus: '국내 기업',
  },
]

export default function CompetitiveAnalysis() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" data-aos="fade-up">
            경쟁 분석
          </h2>
          <p className="text-gray-400 text-lg" data-aos="fade-up" data-aos-delay="200">
            시장 점유율 및 주요 경쟁사 분석
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-6">시장 점유율</h3>
            <div className="aspect-square max-w-md mx-auto">
              <Doughnut
                data={marketShareData}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        color: 'white',
                      },
                    },
                  },
                }}
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6">주요 경쟁사 분석</h3>
            {competitors.map((competitor, index) => (
              <motion.div
                key={competitor.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">{competitor.name}</h4>
                  <span className="text-sm text-gray-400">주력: {competitor.focus}</span>
                </div>
                <ul className="space-y-2">
                  {competitor.strengths.map((strength) => (
                    <li key={strength} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2" />
                      {strength}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 