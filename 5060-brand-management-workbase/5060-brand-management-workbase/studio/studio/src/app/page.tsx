
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/landing/Navbar';
import { Button } from '@/components/ui/button';
import { Clock, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-lifestyle');

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
              <div className="z-10 flex-1 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/10">
                  <Sparkles className="mr-2 h-4 w-4" />
                  AI 기반 퍼스널 브랜딩
                </div>
                <h1 className="font-headline text-4xl font-bold leading-tight tracking-tighter text-foreground sm:text-5xl md:text-6xl">
                  나다운 브랜딩 — <span className="text-primary">5060 프리미엄 브랜드 진단</span>
                </h1>
                <p className="mx-auto max-w-xl text-lg text-muted-foreground sm:text-xl lg:mx-0">
                  5060 고경력 전문가를 위한 AI 기반 브랜드 진단 서비스입니다. 당신의 축적된 경험을 강력한 퍼스널 브랜드로 전환하세요.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <Link href="/diagnostic">
                    <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-lg transition-all hover:scale-105">
                      무료 브랜드 진단 시작하기
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold">
                    서비스 안내 보기
                  </Button>
                </div>
              </div>
              <div className="relative w-full max-w-xl flex-1 lg:max-w-none">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-border sm:aspect-square">
                  <Image
                    src={heroImage?.imageUrl || "https://picsum.photos/seed/prime-bike/800/800"}
                    alt="PrimeBrand Lifestyle"
                    fill
                    priority
                    className="object-cover"
                    data-ai-hint="woman bicycle"
                  />
                </div>
                {/* Floating Badge Card */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-border sm:-bottom-6 sm:left-12 sm:translate-x-0">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-accent/20 p-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-foreground">전문가 검수 완료</p>
                      <p className="text-xs text-muted-foreground">신뢰할 수 있는 데이터 분석</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="bg-secondary/30 py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">왜 PrimeBrand AI인가요?</h2>
              <p className="mt-4 text-muted-foreground">단순한 이력 정리가 아닌, 시장이 원하는 당신만의 가치를 발견합니다.</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm transition-all hover:shadow-md">
                <div className="mb-6 rounded-2xl bg-secondary/50 p-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-headline text-xl font-bold">소요 시간: 15~20분</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  핵심 질문에 답하는 것만으로 충분합니다. 복잡한 절차 없이 빠르게 핵심을 짚어냅니다.
                </p>
              </div>
              
              <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm transition-all hover:shadow-md">
                <div className="mb-6 rounded-2xl bg-secondary/50 p-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-headline text-xl font-bold">맞춤형 리포트 제공</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  AI가 분석한 정밀한 진단 결과와 함께 즉시 실행 가능한 액션 플랜을 리포트로 드립니다.
                </p>
              </div>
              
              <div className="flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm transition-all hover:shadow-md">
                <div className="mb-6 rounded-2xl bg-secondary/50 p-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-headline text-xl font-bold">전략적 브랜드 설계</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  진단 폼 제출 → AI 정밀 분석 → 전문가 검수 → 리포트 수령까지 체계적으로 진행됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Footer Section */}
        <section className="bg-primary py-24 text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">이미 많은 전문가들이 브랜드 진단을 마쳤습니다.</h2>
            <p className="mt-6 text-xl opacity-90">당신의 두 번째 커리어를 위한 가장 스마트한 첫걸음</p>
            <div className="mt-10">
              <Link href="/diagnostic">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-12 text-lg font-bold shadow-xl transition-all hover:scale-105">
                  지금 시작하기
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="font-headline text-xl font-bold text-primary">PrimeBrand AI</div>
            <p className="text-sm text-muted-foreground">© 2024 PrimeBrand AI. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">이용약관</Link>
              <Link href="#" className="hover:text-primary transition-colors">개인정보처리방침</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
