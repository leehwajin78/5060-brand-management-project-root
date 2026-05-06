import { SectionHeading } from "@/components/common/SectionHeading";
import { PremiumButton } from "@/components/common/PremiumButton";
import { ValueCard } from "@/components/common/ValueCard";
import { BookOpen, Compass, Target, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">
              50
            </div>
            <span className="font-semibold text-lg tracking-tight">프리미엄 브랜드 매니지먼트</span>
          </div>
          <Link href="/diagnosis">
            <PremiumButton size="default" variant="outline">
              진단 시작하기
            </PremiumButton>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 max-w-4xl leading-tight">
            당신의 빛나는 경험,<br className="hidden md:block" />
            <span className="text-primary">최고의 퍼스널 브랜드</span>로 만듭니다
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            5060 시니어를 위한 맞춤형 브랜드 진단. 지나온 삶의 궤적을 분석하여 당신만의 고유한 가치를 세상에 선보일 수 있도록 돕습니다.
          </p>
          <Link href="/diagnosis">
            <PremiumButton size="xl" className="group">
              내 브랜드 진단 시작하기
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>
          </Link>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="당신만의 가치를 발굴하는 3가지 약속" 
            subtitle="은퇴가 아닌 새로운 시작, 체계적인 분석으로 당신의 2막을 설계합니다."
            className="text-center items-center mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Compass className="w-8 h-8" />}
              title="경험의 재발견"
              description="단순한 이력서가 아닙니다. 삶의 경험 속에 숨겨진 진짜 당신의 전문성을 찾아냅니다."
            />
            <ValueCard 
              icon={<Target className="w-8 h-8" />}
              title="명확한 포지셔닝"
              description="경쟁력 있는 키워드를 도출하고, 시장에서 돋보이는 나만의 포지션을 설계합니다."
            />
            <ValueCard 
              icon={<BookOpen className="w-8 h-8" />}
              title="실행 가능한 로드맵"
              description="당장 시작할 수 있는 콘텐츠 방향성부터 장기적인 브랜딩 목표까지 구체적인 행동 지침을 제공합니다."
            />
          </div>
        </div>
      </section>

      {/* Trust & Bottom CTA */}
      <section className="py-24 bg-primary/5 border-t">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <ShieldCheck className="w-16 h-16 text-primary mb-6" />
          <h2 className="text-3xl font-bold mb-4">지금 바로 첫 걸음을 내딛으세요</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl">
            16개의 질문에 답하는 것만으로 충분합니다. AI 전문가가 당신의 경험을 분석하여 프리미엄 리포트를 제공합니다.
          </p>
          <Link href="/diagnosis">
            <PremiumButton size="xl" className="shadow-xl group">
              내 브랜드 진단 시작하기
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </PremiumButton>
          </Link>
        </div>
      </section>
      
      <footer className="py-8 text-center text-muted-foreground border-t bg-background">
        <p>© 2026 5060 프리미엄 퍼스널 브랜드 매니지먼트. All rights reserved.</p>
      </footer>
    </main>
  );
}
