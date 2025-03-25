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
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">전략적 제안</h2>
          <p className="text-xl text-gray-400 mb-12">
            메가존클라우드와 텐센트클라우드의 AI 시장 진출 전략
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-4">시장 분석</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• 클라우드 시장 현황 파악</li>
              <li>• AI 시장 성장성 분석</li>
              <li>• 경쟁사 동향 조사</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-4">진입 전략</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• 단계별 시장 진입</li>
              <li>• 차별화된 서비스 제공</li>
              <li>• 현지화 전략 수립</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-pink-500/10 to-red-500/10 p-8 rounded-2xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-4">성장 전략</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• 파트너십 구축</li>
              <li>• 기술 경쟁력 강화</li>
              <li>• 시장 점유율 확대</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={handleDownload}
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
          </button>
        </motion.div>
      </div>
    </section>
  )
} 