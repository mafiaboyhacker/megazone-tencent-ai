'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  DocumentChartBarIcon,
  BoltIcon,
  GlobeAltIcon,
  SparklesIcon,
  CloudArrowUpIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  BeakerIcon,
  CircleStackIcon,
  ArrowDownTrayIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UsersIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

// 산업별 디지털 전환 데이터
const industryTransformation = [
  {
    title: '제조업',
    icon: CubeTransparentIcon,
    description: 'AI 기반 스마트 팩토리',
    value: '63% 도입',
    colorClass: 'from-blue-500 to-cyan-500',
    gradientFrom: 'rgb(59, 130, 246)',
    gradientTo: 'rgb(34, 211, 238)',
    metrics: [
      { label: '생산성 향상', value: '45%' },
      { label: '불량률 감소', value: '38%' },
      { label: '에너지 절감', value: '25%' }
    ]
  },
  {
    title: '금융업',
    icon: CircleStackIcon,
    description: '디지털 금융 서비스',
    value: '78% 도입',
    colorClass: 'from-purple-500 to-pink-500',
    gradientFrom: 'rgb(168, 85, 247)',
    gradientTo: 'rgb(236, 72, 153)',
    metrics: [
      { label: '업무 자동화', value: '56%' },
      { label: '고객 만족도', value: '42%' },
      { label: '비용 절감', value: '33%' }
    ]
  },
  {
    title: '의료업',
    icon: BeakerIcon,
    description: '스마트 헬스케어',
    value: '52% 도입',
    colorClass: 'from-emerald-500 to-teal-500',
    gradientFrom: 'rgb(16, 185, 129)',
    gradientTo: 'rgb(20, 184, 166)',
    metrics: [
      { label: '진단 정확도', value: '67%' },
      { label: '처리 시간', value: '48%' },
      { label: '환자 만족도', value: '58%' }
    ]
  }
];

// 시장 데이터 타입 정의
interface MarketMetric {
  name: string;
  value: string;
}

interface MarketCharacteristic {
  title: string;
  icon: any; // heroicons 타입
  description: string;
  color: string;
}

interface MarketData {
  title: string;
  metrics: MarketMetric[];
  description: string;
  color: string;
  marketCharacteristics: string[];
  advantages?: string[];
  challenges?: string[];
}

// 매력도 비교 데이터
const attractivenessComparison: { [key: string]: MarketData } = {
  gameMarket: {
    title: '게임 시장 (레드오션)',
    metrics: [
      { name: '2025년 시장 규모', value: '230억 달러' },
      { name: '연간 성장률', value: '7~8%' },
      { name: '경쟁 강도', value: '매우 높음' },
      { name: '진입 장벽', value: '매우 높음' },
      { name: '시장 포화도', value: '90%' }
    ],
    description: '이미 성숙 단계에 접어든 레드오션 시장으로, 대형 게임사들의 독점적 지위와 높은 초기 투자 비용으로 인해 신규 진입이 매우 어려운 상황입니다.',
    color: 'from-red-500 to-pink-500',
    challenges: [
      '높은 초기 개발 비용',
      '치열한 경쟁 구도',
      '긴 수익화 주기',
      '시장 포화로 인한 마케팅 비용 증가',
      '기존 업체들의 강력한 진입 장벽'
    ],
    marketCharacteristics: [
      '기존 시장 공간에서의 치열한 경쟁',
      '제한된 성장 가능성',
      '가격 경쟁으로 인한 수익성 감소',
      '차별화가 어려운 시장 환경'
    ]
  },
  aiMarket: {
    title: 'AI 클라우드 서비스 시장 (블루오션)',
    metrics: [
      { name: '2025년 시장 규모', value: '68.3억 달러' },
      { name: '연간 성장률', value: '25%' },
      { name: '경쟁 강도', value: '낮음' },
      { name: '진입 장벽', value: '낮음' },
      { name: '시장 포화도', value: '30%' }
    ],
    description: '미개척 블루오션 시장으로, 폭발적인 성장세와 낮은 진입 장벽으로 새로운 기회가 풍부하며, 정부의 적극적 AI 투자와 높은 경제적 잠재력이 뒷받침됩니다.',
    color: 'from-blue-500 to-cyan-500',
    advantages: [
      '빠른 시장 성장',
      '정부 지원 정책',
      '다양한 수익 모델',
      '낮은 시장 진입 장벽',
      '높은 수익성'
    ],
    marketCharacteristics: [
      '미개척 시장에서의 선점 효과',
      '무한한 성장 잠재력',
      '차별화된 가치 창출',
      '새로운 수요 창출'
    ]
  }
};

// 시장 매력도 상세 분석
const marketAttractivenessDetails = [
  {
    title: '기술 혁신성',
    icon: LightBulbIcon,
    metrics: [
      { name: 'AI/ML 기술 발전', score: 95 },
      { name: '클라우드 인프라', score: 92 },
      { name: '데이터 분석 역량', score: 88 }
    ],
    colorClass: 'from-emerald-400 to-teal-500',
    gradientFrom: 'rgb(52, 211, 153)',
    gradientTo: 'rgb(20, 184, 166)'
  },
  {
    title: '시장 잠재력',
    icon: RocketLaunchIcon,
    metrics: [
      { name: '시장 규모 (2030)', score: 95 },
      { name: '성장률 (CAGR)', score: 89 },
      { name: 'GDP 기여도', score: 83 }
    ],
    colorClass: 'from-blue-400 to-indigo-500',
    gradientFrom: 'rgb(96, 165, 250)',
    gradientTo: 'rgb(99, 102, 241)'
  },
  {
    title: '경쟁 우위',
    icon: ShieldCheckIcon,
    metrics: [
      { name: '기술 경쟁력', score: 90 },
      { name: '시장 선점 효과', score: 95 },
      { name: '수익성', score: 92 }
    ],
    colorClass: 'from-purple-400 to-pink-500',
    gradientFrom: 'rgb(168, 85, 247)',
    gradientTo: 'rgb(236, 72, 153)'
  }
];

// 시장 특성 카드 데이터
const marketCharacteristics = [
  {
    title: 'AI 기술 혁신 주도',
    icon: RocketLaunchIcon,
    description: 'AI는 모든 산업의 디지털 전환을 주도하며, 특히 소상공인과 중소기업의 디지털 혁신을 가속화하는 핵심 동력입니다.',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    title: '광범위한 적용 분야',
    icon: UsersIcon,
    description: '제조, 금융, 의료 등 전 산업 분야에 걸쳐 AI 서비스 수요가 급증하고 있어, 다양한 시장 기회를 제공합니다.',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    title: '높은 수익성',
    icon: CurrencyDollarIcon,
    description: '구독형 비즈니스 모델과 높은 서비스 마진으로 안정적인 수익 창출이 가능하며, 초기 투자 대비 높은 ROI를 기대할 수 있습니다.',
    color: 'from-purple-400 to-pink-500'
  }
];

// 파티클 타입 정의
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

// 파티클 배경 컴포넌트
const BackgroundParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    const count = 30;
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        color: i % 3 === 0 ? '#3B82F6' : i % 3 === 1 ? '#8B5CF6' : '#10B981',
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5
      });
    }
    
    setParticles(newParticles);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// 파일 다운로드 함수
const handleDownload = async () => {
  try {
    const response = await fetch('/api/download-report');
    if (!response.ok) throw new Error('다운로드 실패');
    
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'megazone-tencent-ai-strategy.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error('다운로드 오류:', error);
    alert('보고서 다운로드 중 오류가 발생했습니다.');
  }
};

export default function Strategy() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-black via-blue-900/20 to-black relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent rotate-12 transform scale-150" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-transparent -rotate-12 transform scale-150" />
        <BackgroundParticles />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative mb-16"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <SparklesIcon className="w-16 h-16 mx-auto mb-6 text-blue-500 drop-shadow-lg" />
          </motion.div>
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-8">
            산업별 디지털 전환 현황
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
          />
        </motion.div>

        {/* 산업별 디지털 전환 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {industryTransformation.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              onHoverStart={() => setHoveredIndustry(industry.title)}
              onHoverEnd={() => setHoveredIndustry(null)}
              className={`relative rounded-xl overflow-hidden p-1 bg-gradient-to-r ${industry.colorClass}`}
            >
              <div className="bg-gray-900 rounded-lg p-6 h-full relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndustry === industry.title ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <industry.icon 
                  className="w-10 h-10 mb-4" 
                  style={{color: industry.gradientFrom}}
                />
                <h3 className="text-lg font-bold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{industry.description}</p>
                <div className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${industry.colorClass}`}>
                  {industry.value}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredIndustry === industry.title ? 1 : 0,
                    height: hoveredIndustry === industry.title ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-2"
                >
                  {industry.metrics.map((metric, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">{metric.label}</span>
                      <span className="text-white font-semibold">{metric.value}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 매력도 비교 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-12">
            시장 매력도 비교 분석
          </h2>

          {/* 게임 vs AI 시장 비교 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {Object.entries(attractivenessComparison).map(([key, market]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${market.color} p-1 rounded-xl`}
              >
                <div className="bg-gray-900 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-white mb-6">{market.title}</h3>
                  <div className="space-y-4 mb-6">
                    {market.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex justify-between items-center"
                      >
                        <span className="text-gray-400">{metric.name}</span>
                        <span className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${market.color}`}>
                          {metric.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400 text-sm border-t border-gray-800 pt-4 mb-4"
                  >
                    {market.description}
                  </motion.p>
                  <div className="space-y-4">
                    <div className="border-t border-gray-800 pt-4">
                      <h4 className="text-sm font-semibold text-white mb-3">
                        {key === 'aiMarket' ? '블루오션 특성' : '레드오션 특성'}
                      </h4>
                      <ul className="list-disc list-inside space-y-2">
                        {market.marketCharacteristics.map((characteristic, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            className={`text-sm ${key === 'aiMarket' ? 'text-blue-400' : 'text-red-400'}`}
                          >
                            {characteristic}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    {key === 'aiMarket' && market.advantages && (
                      <div className="border-t border-gray-800 pt-4">
                        <h4 className="text-sm font-semibold text-white mb-2">주요 장점</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {market.advantages.map((advantage, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + i * 0.1 }}
                              className="text-sm text-emerald-400"
                            >
                              {advantage}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {key === 'gameMarket' && market.challenges && (
                      <div className="border-t border-gray-800 pt-4">
                        <h4 className="text-sm font-semibold text-white mb-2">주요 도전 과제</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {market.challenges.map((challenge, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + i * 0.1 }}
                              className="text-sm text-red-400"
                            >
                              {challenge}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 시장 특성 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {marketCharacteristics.map((characteristic, index) => (
              <motion.div
                key={characteristic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br ${characteristic.color} p-1 rounded-xl`}
              >
                <div className="bg-gray-900 rounded-lg p-6 h-full">
                  <characteristic.icon className={`w-10 h-10 mb-4 text-transparent bg-clip-text bg-gradient-to-r ${characteristic.color}`} />
                  <h3 className="text-xl font-bold text-white mb-4">{characteristic.title}</h3>
                  <p className="text-gray-400 text-sm">{characteristic.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 상세 매력도 분석 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketAttractivenessDetails.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className={`bg-gradient-to-br ${category.colorClass} p-1 rounded-xl`}
              >
                <div className="bg-gray-900 rounded-lg p-6">
                  <category.icon className="w-10 h-10 mb-4" style={{color: category.gradientFrom}} />
                  <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
                  <div className="space-y-4">
                    {category.metrics.map((metric, i) => (
                      <div key={i} className="relative">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">{metric.name}</span>
                          <span className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${category.colorClass}`}>
                            {metric.score}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.colorClass}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${metric.score}%` }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 다운로드 버튼 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
            <span>전략 보고서 다운로드</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 