"use client";

import { useState } from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { generateBrandDiagnosticReport } from '@/ai/flows/generate-brand-diagnostic-report-flow';
import type { GenerateBrandDiagnosticReportOutput, GenerateBrandDiagnosticReportInput } from '@/ai/flows/generate-brand-diagnostic-report-flow';
import { ReportDisplay } from '@/components/diagnostic/ReportDisplay';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, ArrowRight, ArrowLeft, Plus, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type Step = 1 | 2 | 3;

export default function DiagnosticPage() {
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<GenerateBrandDiagnosticReportOutput | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState<GenerateBrandDiagnosticReportInput>({
    professionalBackground: '',
    skills: [],
    careerGoals: '',
    targetAudience: '',
    currentBrandingChallenges: '',
    values: [],
  });

  const [skillInput, setSkillInput] = useState('');
  const [valueInput, setValueInput] = useState('');

  const handleAddSkill = () => {
    if (skillInput && !formData.skills.includes(skillInput)) {
      setFormData(prev => ({ ...prev, skills: [...prev.skills, skillInput] }));
      setSkillInput('');
    }
  };

  const handleAddValue = () => {
    if (valueInput && !formData.values.includes(valueInput)) {
      setFormData(prev => ({ ...prev, values: [...prev.values, valueInput] }));
      setValueInput('');
    }
  };

  const removeSkill = (s: string) => {
    setFormData(prev => ({ ...prev, skills: prev.skills.filter(i => i !== s) }));
  };

  const removeValue = (v: string) => {
    setFormData(prev => ({ ...prev, values: prev.values.filter(i => i !== v) }));
  };

  const handleSubmit = async () => {
    if (!formData.professionalBackground || formData.skills.length === 0 || !formData.careerGoals) {
      toast({
        variant: 'destructive',
        title: '입력 확인 필요',
        description: '필수 정보를 모두 입력해 주세요.',
      });
      return;
    }

    setLoading(true);
    try {
      const result = await generateBrandDiagnosticReport(formData);
      setReport(result);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: '진단 중 오류 발생',
        description: '나중에 다시 시도해 주세요.',
      });
    } finally {
      setLoading(false);
    }
  };

  if (report) {
    return (
      <div className="min-h-screen bg-background pb-20">
        <Navbar />
        <div className="container mx-auto px-4">
          <ReportDisplay report={report} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      <div className="container mx-auto mt-12 max-w-2xl px-4">
        <div className="mb-10 text-center">
          <h1 className="font-headline text-3xl font-bold tracking-tight text-primary">프리미엄 브랜드 진단</h1>
          <p className="mt-2 text-muted-foreground">당신의 전문성을 분석하여 최적의 브랜딩 전략을 도출합니다.</p>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                  step === s ? 'border-primary bg-primary text-white' : 
                  step > s ? 'border-primary bg-primary/10 text-primary' : 'border-muted text-muted-foreground'
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`h-0.5 w-10 ${step > s ? 'bg-primary' : 'bg-muted'}`} />}
              </div>
            ))}
          </div>
        </div>

        <Card className="border-primary/10 shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline">
              {step === 1 && "커리어 및 핵심 역량"}
              {step === 2 && "가치와 목표"}
              {step === 3 && "타겟 및 도전 과제"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "당신의 전문적인 배경과 보유한 핵심 기술을 입력하세요."}
              {step === 2 && "브랜드가 지향해야 할 핵심 가치와 커리어 목표를 입력하세요."}
              {step === 3 && "귀하의 서비스를 이용할 대상과 현재 브랜딩의 고민을 입력하세요."}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="background">전문적 배경 (경력 및 성과)</Label>
                  <Textarea 
                    id="background"
                    placeholder="예: 25년간의 금융권 리더십 경력, 대규모 프로젝트 매니지먼트 전문가..."
                    className="min-h-[150px] resize-none"
                    value={formData.professionalBackground}
                    onChange={(e) => setFormData({ ...formData, professionalBackground: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>핵심 기술 (최소 1개)</Label>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="예: 전략 기획, 팀 코칭, 글로벌 협상"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                    />
                    <Button type="button" variant="outline" size="icon" onClick={handleAddSkill}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {formData.skills.map(s => (
                      <div key={s} className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {s}
                        <button onClick={() => removeSkill(s)}><X className="h-3 w-3" /></button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="goals">커리어 목표</Label>
                  <Textarea 
                    id="goals"
                    placeholder="예: 독립 컨설턴트로서의 성공적인 데뷔, 강연가로서의 퍼스널 브랜드 구축..."
                    className="min-h-[120px] resize-none"
                    value={formData.careerGoals}
                    onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>추구하는 가치 (최소 1개)</Label>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="예: 신뢰, 혁신, 동반 성장"
                      value={valueInput}
                      onChange={(e) => setValueInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddValue()}
                    />
                    <Button type="button" variant="outline" size="icon" onClick={handleAddValue}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {formData.values.map(v => (
                      <div key={v} className="flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent-foreground">
                        {v}
                        <button onClick={() => removeValue(v)}><X className="h-3 w-3" /></button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="audience">주요 타겟 오디언스</Label>
                  <Textarea 
                    id="audience"
                    placeholder="예: 시니어 커리어를 고민하는 40대 임원, 디지털 전환이 필요한 중소기업 대표..."
                    className="min-h-[100px] resize-none"
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="challenges">현재 브랜딩 고민 (선택 사항)</Label>
                  <Textarea 
                    id="challenges"
                    placeholder="예: 오프라인에서의 명성은 높으나 온라인상의 존재감이 부족함..."
                    className="min-h-[100px] resize-none"
                    value={formData.currentBrandingChallenges}
                    onChange={(e) => setFormData({ ...formData, currentBrandingChallenges: e.target.value })}
                  />
                </div>
              </>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 ? (
                <Button variant="ghost" onClick={() => setStep((step - 1) as Step)}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> 이전으로
                </Button>
              ) : <div />}
              
              {step < 3 ? (
                <Button className="bg-primary shadow-lg" onClick={() => setStep((step + 1) as Step)}>
                  다음 단계 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" 
                  disabled={loading}
                  onClick={handleSubmit}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      AI 분석 중...
                    </>
                  ) : (
                    "진단 결과 확인하기"
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}