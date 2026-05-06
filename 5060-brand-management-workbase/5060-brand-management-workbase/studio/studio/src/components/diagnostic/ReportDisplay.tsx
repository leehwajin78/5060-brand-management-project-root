import { GenerateBrandDiagnosticReportOutput } from '@/ai/flows/generate-brand-diagnostic-report-flow';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Target, TrendingUp, Lightbulb, MessageSquare, Users, Star } from 'lucide-react';

interface ReportDisplayProps {
  report: GenerateBrandDiagnosticReportOutput;
}

export function ReportDisplay({ report }: ReportDisplayProps) {
  return (
    <div className="mx-auto max-w-4xl space-y-8 py-12">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="px-4 py-1 text-primary">브랜드 진단 완료</Badge>
        <h1 className="font-headline text-4xl font-bold">퍼스널 브랜드 진단 리포트</h1>
        <p className="text-muted-foreground text-lg">PrimeBrand AI가 분석한 당신만의 차별화된 브랜드 전략입니다.</p>
      </div>

      {/* Brand Statement */}
      <Card className="border-primary/20 shadow-lg overflow-hidden">
        <div className="bg-primary px-6 py-4">
          <div className="flex items-center gap-2 text-primary-foreground">
            <Star className="h-5 w-5 fill-accent text-accent" />
            <span className="font-headline font-bold uppercase tracking-wider text-sm">Personal Brand Statement</span>
          </div>
        </div>
        <CardContent className="p-8">
          <p className="text-2xl font-headline italic leading-relaxed text-foreground">
            "{report.brandStatement}"
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Unique Strengths */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              차별화된 강점
            </CardTitle>
            <CardDescription>귀하만이 가진 독보적인 전문성과 역량입니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {report.uniqueStrengths.map((strength, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-lg bg-muted/50 p-3">
                <Badge className="mt-1 shrink-0">{idx + 1}</Badge>
                <span className="text-sm font-medium">{strength}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Market Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              시장 기회 분석
            </CardTitle>
            <CardDescription>현재 역량으로 선점 가능한 커리어 기회입니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {report.marketOpportunities.map((opportunity, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-lg bg-secondary/30 p-3">
                <Target className="mt-1 h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{opportunity}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Actionable Insights */}
      <Card className="shadow-md">
        <CardHeader className="bg-muted/30">
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-accent" />
            실행 가능한 인사이트
          </CardTitle>
          <CardDescription>브랜드 가치를 높이기 위한 구체적인 액션 플랜입니다.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <ul className="space-y-4">
            {report.actionableInsights.map((insight, idx) => (
              <li key={idx} className="flex items-center gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                <p className="text-sm leading-relaxed">{insight}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Tone of Voice */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              추천 톤앤매너
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground bg-muted/50 p-4 rounded-xl italic">
              {report.toneOfVoiceRecommendation}
            </p>
          </CardContent>
        </Card>

        {/* Target Audience Alignment */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              타겟 고객 얼라인먼트
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground bg-muted/50 p-4 rounded-xl italic">
              {report.targetAudienceAlignment}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Improvement Areas */}
      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader>
          <CardTitle className="text-destructive font-headline">보완이 필요한 지점</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            {report.areasForImprovement.map((area, idx) => (
              <li key={idx} className="text-sm text-foreground/80">{area}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="flex justify-center pt-8">
        <button 
          onClick={() => window.print()}
          className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
        >
          리포트 PDF로 저장하기
        </button>
      </div>
    </div>
  );
}