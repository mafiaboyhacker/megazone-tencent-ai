'use client'

import { motion, AnimatePresence } from 'framer-motion'
import {
  RocketLaunchIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  SparklesIcon,
  PresentationChartLineIcon,
  GlobeAltIcon,
  CloudIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  FireIcon,
  BeakerIcon,
  BoltIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

type IconComponent = typeof RocketLaunchIcon;

interface MarketData {
  title: string;
  icon: IconComponent;
  stats: Array<{
    year?: number;
    label?: string;
    value: string;
  }>;
  details: string[];
  graph: {
    labels: string[];
    data: number[];
  };
  whyImportant?: string[];
}

interface Strategy {
  title: string;
  icon: IconComponent;
  description: string;
  steps: string[];
  details: string[];
  benefits?: string[];
  challenges?: string[];
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const marketData = [
  {
    title: '한국 클라우드 시장',
    icon: GlobeAltIcon,
    stats: [
      { year: 2025, value: '68.3억 달러' },
      { year: 2030, value: '198.9억 달러' },
      { label: '연평균 성장률', value: '23.82%' }
    ],
    details: [
      '국내 클라우드 시장 점유율: AWS(62.1%), Azure(12%)',
      '2023년 34억 달러에서 2032년 106억 달러로 성장 전망',
      '정부의 디지털 전환 정책으로 공공부문 수요 증가',
      '5G 인프라 세계 최고 수준으로 클라우드 서비스 최적화'
    ],
    graph: {
      labels: ['2023', '2025', '2028', '2030'],
      data: [34, 68.3, 120, 198.9]
    },
    whyImportant: [
      '디지털 전환 가속화로 클라우드 수요 급증',
      '정부의 클라우드 퍼스트 정책 추진',
      '5G/6G 시대 엣지 컴퓨팅 수요 증가',
      '보안 및 규제 준수 요구사항 강화'
    ]
  },
  {
    title: '한국 AI 시장',
    icon: LightBulbIcon,
    stats: [
      { year: 2024, value: '31억 달러' },
      { year: 2033, value: '300억 달러' },
      { label: '연평균 성장률', value: '26.6%' }
    ],
    details: [
      '정부 주도 AI 반도체 투자: 1조원 규모',
      '2025년까지 1만개 GPU 확보 계획',
      'AI 도입 시 GDP 12.6% 증가 전망',
      '산업용 AI 솔루션 수요 급증'
    ],
    graph: {
      labels: ['2024', '2027', '2030', '2033'],
      data: [31, 85, 180, 300]
    },
    whyImportant: [
      'AI 기술 도입으로 기업 경쟁력 강화',
      '생성형 AI 시장의 폭발적 성장',
      '산업 전반의 AI 도입 가속화',
      '인력 부족 문제 해결을 위한 AI 활용'
    ]
  },
  {
    title: '한국 GPU 클라우드',
    icon: ChartBarIcon,
    stats: [
      { year: 2030, value: '4.93억 달러' },
      { label: '연평균 성장률', value: '24.4%' }
    ],
    details: [
      'AI 학습용 GPU 수요 증가로 시장 급성장',
      '기업용 GPU 클라우드 서비스 부족',
      '게임 개발사의 렌더링 수요 지속 증가',
      '연구기관의 컴퓨팅 자원 필요성 증대'
    ],
    graph: {
      labels: ['2025', '2027', '2029', '2030'],
      data: [2.1, 3.2, 4.1, 4.93]
    },
    whyImportant: [
      'AI 모델 학습을 위한 고성능 컴퓨팅 필수',
      'GPU 가격 상승으로 클라우드 수요 증가',
      '실시간 AI 추론을 위한 인프라 필요',
      '멀티 클라우드 환경에서의 GPU 자원 관리'
    ]
  }
]

const aiCloudFocus = {
  title: 'AI 클라우드 시장 집중 필요성',
  reasons: [
    {
      title: '시장 성장성',
      icon: ChartBarIcon,
      points: [
        'AI 시장 연평균 성장률 26.6% 전망',
        '2033년까지 300억 달러 규모로 성장',
        '생성형 AI로 인한 폭발적 수요 증가',
        'GPU 부족 현상으로 인한 프리미엄 시장 형성'
      ]
    },
    {
      title: '기술 경쟁력',
      icon: CpuChipIcon,
      points: [
        '텐센트의 AI 기술력과 메가존의 현지 경험 결합',
        '한국 시장 특화 AI 모델 개발 가능',
        '멀티 클라우드 관리 기술 보유',
        '엣지 컴퓨팅 솔루션 제공'
      ]
    },
    {
      title: '시장 차별성',
      icon: CloudIcon,
      points: [
        '한국어 특화 AI 서비스 제공',
        '로컬 기술 지원 및 컨설팅',
        '정부 규제 준수 및 보안 인증',
        '국내 데이터센터 기반 낮은 지연시간'
      ]
    },
    {
      title: '위험 요소 대응',
      icon: ShieldCheckIcon,
      points: [
        '데이터 주권 및 규제 준수',
        'AI 윤리 가이드라인 준수',
        '보안 인증 및 감사 대응',
        '서비스 안정성 보장'
      ]
    }
  ]
};

const marketAnalysis = {
  redOcean: {
    title: '레드오션 영역',
    icon: FireIcon,
    areas: [
      {
        name: '일반 클라우드 인프라',
        description: 'AWS, Azure 등이 시장 장악',
        share: '74.1%',
        competition: '매우 높음',
        growth: '낮음'
      },
      {
        name: '기본 AI 서비스',
        description: '범용 AI 서비스 시장',
        share: '15.2%',
        competition: '높음',
        growth: '중간'
      }
    ]
  },
  blueOcean: {
    title: '블루오션 기회',
    icon: BeakerIcon,
    areas: [
      {
        name: '한국어 특화 AI',
        description: '로컬라이즈된 AI 서비스',
        potential: '매우 높음',
        competition: '낮음',
        growth: '32.5%'
      },
      {
        name: 'GPU 클라우드',
        description: 'AI 학습용 고성능 컴퓨팅',
        potential: '높음',
        competition: '중간',
        growth: '24.4%'
      },
      {
        name: '산업특화 AI',
        description: '게임/미디어/제조 특화',
        potential: '매우 높음',
        competition: '낮음',
        growth: '28.7%'
      }
    ]
  }
};

const growthHighlights = {
  title: '핵심 성장 동력',
  points: [
    {
      title: 'AI 시장 성장',
      value: '26.6%',
      description: '연평균 성장률',
      highlight: '2033년 300억 달러 규모'
    },
    {
      title: 'GPU 수요',
      value: '24.4%',
      description: 'GPU 클라우드 성장률',
      highlight: '2025년 1만개 GPU 확보'
    },
    {
      title: '산업 영향',
      value: '12.6%',
      description: 'GDP 증가 효과',
      highlight: 'AI 도입 시 경제 효과'
    }
  ]
};

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
    details: [
      '국내 게임사와의 기존 협력 관계 활용',
      '한국의 높은 게임 산업 경쟁력 활용',
      '엔터테인먼트 산업의 AI 수요 증가',
      '산업별 맞춤형 AI 솔루션 제공'
    ],
    benefits: [
      '기존 고객 기반 활용으로 빠른 시장 진입',
      '산업별 레퍼런스 확보 용이',
      '안정적인 수익 기반 확보',
      '시장 검증된 서비스 확장'
    ],
    challenges: [
      '산업별 특화 기술 개발 필요',
      '경쟁사 대비 기술력 입증 필요',
      '초기 투자 비용 증가',
      '산업별 규제 대응 필요'
    ]
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
    details: [
      '기업 규모별 맞춤형 가격 정책',
      '한국 시장 특화 AI 모델 제공',
      '소상공인을 위한 저비용 패키지',
      '사용량 기반 유연한 과금 체계'
    ],
    benefits: [
      '고객 부담 최소화로 진입장벽 낮춤',
      '예측 가능한 수익 모델',
      '고객 확장성 보장',
      '시장 상황에 따른 유연한 대응'
    ],
    challenges: [
      '초기 수익성 확보 어려움',
      '서비스 품질 유지 비용',
      '경쟁사의 가격 정책 대응',
      '고객 이탈 방지'
    ]
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
    details: [
      '한국어 특화 AI 서비스로 차별화',
      '로컬 기술 지원 및 컨설팅 강화',
      '국내 데이터센터 확충 계획',
      '정부 규제 준수 및 보안 인증'
    ],
    benefits: [
      '시장 내 확고한 포지셔닝',
      '안정적인 수익 기반 확보',
      '규모의 경제 달성',
      '투자 유치 용이'
    ],
    challenges: [
      '대형 클라우드 기업과의 경쟁',
      '초기 투자 비용 부담',
      '기술력 격차 극복 필요',
      '인력 확보의 어려움'
    ]
  },
]

// 파티클 배경을 위한 컴포넌트
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

// 성장 라벨 추가
const koreanMarketStrengths = [
  {
    title: '한국어 NLP 기술',
    icon: DocumentChartBarIcon,
    description: '한국어 특화 AI 모델은 글로벌 모델 대비 15-20% 높은 정확도',
    value: '18% 향상',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: '세계적 IT 인프라',
    icon: BoltIcon,
    description: '세계 최고 수준의 5G 보급률과 초고속 네트워크',
    value: '5G 1위',
    color: 'from-emerald-500 to-green-500'
  },
  {
    title: '산업별 디지털 전환',
    icon: GlobeAltIcon,
    description: '제조/금융/의료 분야 AI 도입률 증가',
    value: '47% 증가',
    color: 'from-amber-500 to-yellow-500'
  }
];

export default function Strategy() {
  const [selectedMarket, setSelectedMarket] = useState<MarketData | null>(null);
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const handleCardClick = (type: string, item: any) => {
    if (type === 'market') {
      setSelectedMarket(selectedMarket === item ? null : item);
      setSelectedStrategy(null);
      setSelectedReason(null);
    } else if (type === 'strategy') {
      setSelectedStrategy(selectedStrategy === item ? null : item);
      setSelectedMarket(null);
      setSelectedReason(null);
    } else if (type === 'reason') {
      setSelectedReason(selectedReason === item ? null : item);
      setSelectedMarket(null);
      setSelectedStrategy(null);
    }
  };

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
        <BackgroundParticles />
      </div>

      {/* 메인 컨텐츠 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative"
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
            한국 시장 진출 전략
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"
          />
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            메가존클라우드와 텐센트클라우드의 한국 AI 시장 진출 전략
            <br />
            <span className="text-sm">정부 계획: 2025년까지 1만개 GPU 확보 및 1조원 규모 AI 반도체 투자</span>
          </p>
          
          {/* 한국 시장 강점 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {koreanMarketStrengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className={`relative rounded-xl overflow-hidden p-1 bg-gradient-to-r ${strength.color}`}
              >
                <div className="bg-gray-900 rounded-lg p-6 h-full">
                  <strength.icon className="w-10 h-10 text-transparent bg-clip-text bg-gradient-to-r mb-4" style={{backgroundImage: `linear-gradient(to right, ${strength.color.split(' ')[1].slice(5)}, ${strength.color.split(' ')[3].slice(5)})`}} />
                  <h3 className="text-lg font-bold text-white mb-2">{strength.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{strength.description}</p>
                  <div className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${strength.color}`}>
                    {strength.value}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI 클라우드 시장 집중 필요성 */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            {aiCloudFocus.title}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCloudFocus.reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedReason(selectedReason === reason.title ? null : reason.title)}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative group cursor-pointer"
              >
                <motion.div 
                  className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                  }}
                />
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
                />
                <reason.icon className="w-12 h-12 text-blue-500 mb-6" />
                <h4 className="text-2xl font-bold text-white mb-4">{reason.title}</h4>
                <ul className="space-y-3">
                  {reason.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2" />
                      <span className="text-gray-400">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 성장성 하이라이트 */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            {growthHighlights.title}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growthHighlights.points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative overflow-hidden"
              >
                <motion.div
                  animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0]
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
                />
                <div className="text-center relative">
                  <h4 className="text-xl font-bold text-white mb-2">{point.title}</h4>
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {point.value}
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{point.description}</p>
                  <div className="text-blue-400 text-sm font-semibold">{point.highlight}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 시장 분석 (레드오션/블루오션) */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 레드오션 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative overflow-hidden"
          >
            <motion.div
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-20 -left-20 w-60 h-60 bg-red-500/10 rounded-full blur-3xl"
            />
            <div className="flex items-center mb-6 relative">
              <FireIcon className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">{marketAnalysis.redOcean.title}</h3>
            </div>
            <div className="space-y-6 relative">
              {marketAnalysis.redOcean.areas.map((area, index) => (
                <div key={area.name} className="border-b border-gray-700 pb-4 last:border-0">
                  <h4 className="text-lg font-semibold text-white mb-2">{area.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{area.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs text-gray-500">시장 점유율</div>
                      <div className="text-red-400 font-semibold">{area.share}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">경쟁 강도</div>
                      <div className="text-red-400 font-semibold">{area.competition}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">성장성</div>
                      <div className="text-red-400 font-semibold">{area.growth}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 블루오션 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative overflow-hidden"
          >
            <motion.div
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"
            />
            <div className="flex items-center mb-6 relative">
              <BeakerIcon className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">{marketAnalysis.blueOcean.title}</h3>
            </div>
            <div className="space-y-6 relative">
              {marketAnalysis.blueOcean.areas.map((area, index) => (
                <div key={area.name} className="border-b border-gray-700 pb-4 last:border-0">
                  <h4 className="text-lg font-semibold text-white mb-2">{area.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{area.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs text-gray-500">시장 잠재력</div>
                      <div className="text-blue-400 font-semibold">{area.potential}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">경쟁 강도</div>
                      <div className="text-blue-400 font-semibold">{area.competition}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">성장률</div>
                      <div className="text-blue-400 font-semibold">{area.growth}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

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
              onClick={() => handleCardClick('market', market)}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative group cursor-pointer overflow-hidden"
            >
              <motion.div
                animate={{
                  x: [0, 50, 0],
                  y: [0, 30, 0]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -bottom-10 -right-10 w-36 h-36 bg-blue-500/5 rounded-full blur-2xl"
              />
              <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <market.icon className="w-12 h-12 text-blue-500 mb-6" />
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
              
              <AnimatePresence>
                {selectedMarket === market && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-gray-700"
                  >
                    <h4 className="text-lg font-semibold text-white mb-4">상세 정보</h4>
                    <ul className="space-y-2">
                      {market.details.map((detail, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 h-64 bg-gradient-to-b from-gray-900 to-black rounded-lg p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                      <div className="text-sm text-gray-400 mb-4">시장 규모 추이 (단위: 억 달러)</div>
                      <div className="h-44 flex items-end justify-between relative">
                        <div className="absolute inset-0 grid grid-rows-4 gap-4 pointer-events-none">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="border-b border-gray-800" />
                          ))}
                        </div>
                        {market.graph.data.map((value, i) => (
                          <div key={i} className="relative flex flex-col items-center w-16">
                            <div className="text-blue-400 text-sm mb-2 font-semibold">{value}</div>
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: `${(value / Math.max(...market.graph.data)) * 100}%` }}
                              transition={{ duration: 1, delay: i * 0.2 }}
                              className="w-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t relative group"
                            >
                              <motion.div
                                whileHover={{ opacity: 0.2 }}
                                className="absolute inset-0 bg-white opacity-0 transition-opacity rounded-t"
                              />
                            </motion.div>
                            <div className="text-gray-500 text-sm mt-2">{market.graph.labels[i]}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    {market.whyImportant && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white mb-4">중요성</h4>
                        <ul className="space-y-2">
                          {market.whyImportant.map((point, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
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
              onClick={() => handleCardClick('strategy', strategy)}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm relative group cursor-pointer overflow-hidden"
            >
              <motion.div
                animate={{
                  x: [0, 30, 0],
                  y: [0, 20, 0]
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"
              />
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

              <AnimatePresence>
                {selectedStrategy === strategy && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pt-6 border-t border-gray-700"
                  >
                    <h4 className="text-lg font-semibold text-white mb-4">상세 전략</h4>
                    <ul className="space-y-2">
                      {strategy.details.map((detail, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    
                    {strategy.benefits && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white mb-4">기대 효과</h4>
                        <ul className="space-y-2">
                          {strategy.benefits.map((benefit, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-1.5" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {strategy.challenges && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white mb-4">도전 과제</h4>
                        <ul className="space-y-2">
                          {strategy.challenges.map((challenge, i) => (
                            <li key={i} className="text-gray-400 text-sm flex items-start">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 mt-1.5" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold transition-all overflow-hidden group z-10"
          >
            <span className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">전략 상세 문서 다운로드</span>
            <motion.svg
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-2 w-5 h-5 relative z-10"
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
            </motion.svg>
            <div className="absolute inset-0 h-full w-full blur-lg bg-gradient-to-r from-blue-600/50 to-purple-600/50 scale-150 opacity-0 group-hover:opacity-40 transition-all duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 