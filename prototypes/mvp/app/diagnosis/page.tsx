"use client";

import { useState } from "react";
import { mockQuestions } from "@/lib/mock-data";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PremiumButton } from "@/components/common/PremiumButton";
import { useRouter } from "next/navigation";

export default function DiagnosisPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const progress = Math.round((Object.keys(answers).length / mockQuestions.length) * 100);

  const handleAnswer = (id: number, value: string) => {
    setAnswers(prev => {
      if (!value.trim()) {
        const newAnswers = { ...prev };
        delete newAnswers[id];
        return newAnswers;
      }
      return { ...prev, [id]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAgreed) {
      alert("개인정보 수집 및 AI 처리에 동의해주세요.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call and AI processing
    setTimeout(() => {
      router.push("/report");
    }, 3000);
  };

  if (isSubmitting) {
    return (
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-8"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
          AI가 당신의 브랜드 자산을 분석 중입니다...
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-md">
          입력하신 소중한 경험을 바탕으로 프리미엄 퍼스널 브랜딩 리포트를 생성하고 있습니다. 잠시만 기다려주세요.
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-muted/30 pb-20">
      {/* Sticky Header & Progress */}
      <div className="sticky top-0 z-40 bg-background border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 max-w-3xl">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-lg font-semibold">브랜드 진단</h1>
            <span className="text-sm font-medium text-primary">{progress}% 완료</span>
          </div>
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl mt-10">
        <SectionHeading 
          title="당신의 이야기를 들려주세요" 
          subtitle="정답은 없습니다. 편안하게 생각나는 대로 적어주시면, AI가 당신만의 특별한 가치를 찾아냅니다."
        />

        <form onSubmit={handleSubmit} className="space-y-8">
          {mockQuestions.map((q, index) => (
            <div key={q.id} className="bg-card border rounded-xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50">
              <div className="flex gap-4 items-start mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <label htmlFor={`q-${q.id}`} className="block text-xl font-medium mb-2 leading-relaxed text-foreground">
                    {q.question}
                  </label>
                  <p className="text-muted-foreground text-base mb-4 bg-muted/50 p-3 rounded-lg border border-border/50">
                    💡 <strong>Tip:</strong> {q.assetHint}
                  </p>
                </div>
              </div>
              <textarea
                id={`q-${q.id}`}
                className="w-full min-h-[120px] p-4 text-lg border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-y"
                placeholder="여기에 자유롭게 작성해주세요..."
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswer(q.id, e.target.value)}
              />
            </div>
          ))}

          <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm mt-12">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
              />
              <span className="text-lg select-none group-hover:text-primary transition-colors">
                개인정보 수집 및 AI 처리에 동의합니다.
              </span>
            </label>
          </div>

          <div className="flex justify-end pt-6">
            <PremiumButton type="submit" size="xl" className="w-full md:w-auto shadow-lg">
              진단 결과 확인하기
            </PremiumButton>
          </div>
        </form>
      </div>
    </main>
  );
}
