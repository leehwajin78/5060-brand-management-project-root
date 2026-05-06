import { Sparkles, Target, Users, Zap, Calendar, MessageCircle } from 'lucide-react';

interface CustomerReportProps {
  reportData?: {
    customerName: string;
    brandIdentity: string;
    coreValues: string;
    targetAudience: string;
    differentiators: string;
    contentStrategy: string;
    actionPlan: string;
  };
  isApproved?: boolean;
}

export default function CustomerReport({ reportData, isApproved = false }: CustomerReportProps) {
  if (!isApproved || !reportData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <div className="w-32 h-32 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
            <Sparkles className="w-16 h-16 text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl mb-6">리포트를 준비 중입니다</h1>
          <p className="text-2xl text-gray-600 leading-relaxed mb-8">
            전문가가 귀하의 브랜드 진단 결과를 꼼꼼히 검토하고 있습니다.<br />
            승인이 완료되면 이메일로 안내드리겠습니다.
          </p>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-500">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <p className="text-lg">Personal Brand Diagnosis Report</p>
          </div>
          <h1 className="text-6xl md:text-7xl mb-8 leading-tight">
            {reportData.customerName}님의<br />
            프리미엄 브랜드 전략
          </h1>
          <p className="text-2xl opacity-90 leading-relaxed">
            당신만의 독특한 가치를 세상에 전하는 방법을 발견하세요
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Brand Identity Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl">브랜드 정체성</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 border-2 border-primary/20">
            <p className="text-2xl leading-relaxed text-gray-800">{reportData.brandIdentity}</p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-4xl">핵심 가치</h2>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200">
            <p className="text-2xl leading-relaxed text-gray-800">{reportData.coreValues}</p>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl">타겟 고객</h2>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 border-2 border-green-200">
            <p className="text-2xl leading-relaxed text-gray-800">{reportData.targetAudience}</p>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-4xl">차별화 포인트</h2>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200">
            <p className="text-2xl leading-relaxed text-gray-800 whitespace-pre-line">
              {reportData.differentiators}
            </p>
          </div>
        </div>
      </section>

      {/* Content Strategy Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-orange-600" />
            </div>
            <h2 className="text-4xl">콘텐츠 전략</h2>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-10 border-2 border-orange-200">
            <p className="text-2xl leading-relaxed text-gray-800 whitespace-pre-line">
              {reportData.contentStrategy}
            </p>
          </div>
        </div>
      </section>

      {/* Action Plan Section */}
      <section className="px-6 py-20 md:px-12 lg:px-24 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl">실행 계획</h2>
          </div>
          <div className="bg-white rounded-3xl p-10 shadow-lg border-2 border-primary/30">
            <p className="text-2xl leading-relaxed text-gray-800 whitespace-pre-line">
              {reportData.actionPlan}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 md:px-12 lg:px-24 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl mb-8">
            이제 실행할 차례입니다
          </h2>
          <p className="text-2xl mb-12 opacity-90 leading-relaxed">
            전문가와 함께 1:1 코칭을 받으시면<br />
            더 빠르고 확실하게 브랜드를 구축할 수 있습니다.
          </p>
          <button className="inline-flex items-center gap-3 px-16 py-6 bg-white text-primary text-2xl rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105">
            <MessageCircle className="w-7 h-7" />
            1:1 코칭 신청하기
          </button>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary/20 px-6 py-4 shadow-2xl z-50 md:hidden">
        <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-xl rounded-xl hover:bg-primary/90 transition-all">
          <MessageCircle className="w-6 h-6" />
          1:1 코칭 신청하기
        </button>
      </div>
    </div>
  );
}
