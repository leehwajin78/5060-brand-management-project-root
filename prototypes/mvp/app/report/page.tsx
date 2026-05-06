"use client";

import { useState, useEffect } from "react";
import { mockReport } from "@/lib/mock-data";
import { PremiumButton } from "@/components/common/PremiumButton";
import { Award, Lightbulb, TrendingUp, Compass, ArrowRight, Quote } from "lucide-react";

export default function ReportPage() {
  const [isApproved, setIsApproved] = useState(true); // Toggle to test empty state

  // For prototype demonstration purposes, you can change the state manually
  // useEffect(() => {
  //   setTimeout(() => setIsApproved(true), 2000);
  // }, []);

  if (!isApproved) {
    return (
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-card border rounded-2xl p-8 text-center shadow-lg">
          <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4">리포트를 준비 중입니다</h1>
          <p className="text-muted-foreground leading-relaxed text-lg">
            전문가가 AI 분석 결과를 검토하고 있습니다.<br/>
            완성도 높은 브랜드 리포트를 위해 조금만 기다려 주세요.
          </p>
          <div className="mt-8 py-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-primary font-medium">예상 대기 시간: 약 24시간 이내</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-32">
      {/* Magazine Cover Style Header */}
      <header className="bg-primary text-primary-foreground py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center text-center mt-10">
          <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium tracking-widest uppercase mb-8 border border-white/30">
            Personal Brand Report
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            {mockReport.brandTitle}
          </h1>
          <div className="w-24 h-1 bg-white/30 mx-auto my-8"></div>
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl leading-relaxed">
            "{mockReport.brandSummary}"
          </p>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 -mt-10 relative z-20 space-y-8">
        
        {/* Core Strengths */}
        <section className="bg-background rounded-2xl shadow-xl border p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">핵심 경쟁력 (Core Strengths)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockReport.coreStrengths.map((strength, idx) => (
              <div key={idx} className="bg-primary/5 border border-primary/10 rounded-xl p-6 hover:bg-primary/10 transition-colors">
                <div className="text-4xl font-black text-primary/20 mb-4">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-foreground">{strength}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Content Themes */}
        <section className="bg-background rounded-2xl shadow-xl border p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">추천 콘텐츠 테마</h2>
          </div>
          <div className="space-y-4">
            {mockReport.recommendedContentThemes.map((theme, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border bg-muted/20">
                <div className="bg-background p-2 rounded-lg border shadow-sm text-primary">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{theme}</h3>
                  <p className="text-muted-foreground">이 주제를 통해 당신의 경험을 가장 효과적으로 전달할 수 있습니다.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Actions */}
        <section className="bg-primary/90 text-primary-foreground rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Compass className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8" />
              <h2 className="text-2xl md:text-3xl font-bold">다음 실행 목표 (Next Actions)</h2>
            </div>
            <ul className="space-y-6">
              {mockReport.nextActions.map((action, idx) => (
                <li key={idx} className="flex items-center gap-4 text-lg bg-black/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-background/80 backdrop-blur-md border-t p-4 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h4 className="font-bold text-lg">더 깊은 분석과 전략이 필요하신가요?</h4>
            <p className="text-sm text-muted-foreground">전문 코치와 함께 당신의 브랜드를 완성하세요.</p>
          </div>
          <PremiumButton size="xl" className="w-full md:w-auto shadow-xl group">
            1:1 코칭 신청하기
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </PremiumButton>
        </div>
      </div>
    </main>
  );
}
