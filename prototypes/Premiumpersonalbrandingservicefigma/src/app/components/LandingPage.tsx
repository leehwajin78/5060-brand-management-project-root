import { Sparkles, Award, Users, TrendingUp } from 'lucide-react';

interface LandingPageProps {
  onStartDiagnosis: () => void;
}

export default function LandingPage({ onStartDiagnosis }: LandingPageProps) {
  const features = [
    {
      icon: Sparkles,
      title: "AI 기반 브랜드 분석",
      description: "인공지능이 당신만의 강점과 매력을 정밀하게 분석합니다"
    },
    {
      icon: Award,
      title: "프리미엄 리포트",
      description: "전문가 수준의 맞춤형 퍼스널 브랜딩 전략을 제공합니다"
    },
    {
      icon: Users,
      title: "5060 세대 특화",
      description: "풍부한 경험을 가진 시니어를 위한 전문 브랜딩 서비스"
    },
    {
      icon: TrendingUp,
      title: "실전 성장 전략",
      description: "즉시 활용 가능한 구체적인 실행 가이드를 받아보세요"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-32 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full">
            <p className="text-primary text-lg">5060 시니어를 위한 프리미엄 서비스</p>
          </div>

          <h1 className="text-5xl md:text-7xl mb-8 leading-tight tracking-tight">
            경력을 무대로<br />
            <span className="text-primary">변역합니다.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            5060 전문가의 축적된 경험을 브랜드 언어, 강의 자산, B2B 제안 자산으로<br />
            정리해 실제 무대와 수익 기회로 연결합니다.
          </p>

          <button
            onClick={onStartDiagnosis}
            className="group relative inline-flex items-center gap-3 px-12 py-6 bg-primary text-white text-xl rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-2xl hover:shadow-primary/30 hover:scale-105"
          >
            <Sparkles className="w-6 h-6" />
            내 브랜드 진단 시작하기
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></span>
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-24 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-16">
            왜 <span className="text-primary">프리미엄 브랜딩</span>이 필요한가요?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 md:px-12 lg:px-24 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-8">
            단 <span className="text-primary">16개 질문</span>으로<br />
            당신의 브랜드를 완성하세요
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            AI가 당신의 답변을 분석하여 맞춤형 브랜딩 전략을 제공합니다.<br />
            약 10분이면 충분합니다.
          </p>
          <button
            onClick={onStartDiagnosis}
            className="inline-flex items-center gap-3 px-12 py-6 bg-primary text-white text-xl rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-2xl hover:shadow-primary/30 hover:scale-105"
          >
            지금 바로 시작하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-50 text-center">
        <p className="text-gray-500 text-lg">
          © 2026 Premium Personal Brand Management. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
