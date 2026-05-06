import { useState } from 'react';
import { CheckCircle2, Loader2, Sparkles } from 'lucide-react';

interface DiagnosisFormProps {
  onComplete: (answers: Record<string, string>) => void;
}

const questions = [
  {
    id: 'q1',
    question: '현재 어떤 분야에서 일하고 계시거나 전문성을 갖고 계신가요?',
    hint: '예: 경영 컨설팅, 교육, 금융, 의료, 제조업 등 구체적으로 작성해주세요.',
  },
  {
    id: 'q2',
    question: '지난 30년간 쌓아온 경험 중 가장 자랑스러운 성과는 무엇인가요?',
    hint: '수치나 구체적인 사례를 포함하면 더 정확한 분석이 가능합니다.',
  },
  {
    id: 'q3',
    question: '주변 사람들이 당신을 어떻게 평가하나요?',
    hint: '동료, 가족, 친구들이 자주 언급하는 당신의 강점을 떠올려보세요.',
  },
  {
    id: 'q4',
    question: '당신만의 독특한 업무 방식이나 철학이 있다면?',
    hint: '다른 사람과 차별화되는 당신만의 접근법을 설명해주세요.',
  },
  {
    id: 'q5',
    question: '현재 가장 열정을 느끼는 일이나 관심사는 무엇인가요?',
    hint: '업무 외적인 활동도 포함해서 자유롭게 작성하세요.',
  },
  {
    id: 'q6',
    question: '향후 5년간 이루고 싶은 목표는 무엇인가요?',
    hint: '커리어, 개인 성장, 사회 공헌 등 다양한 측면에서 생각해보세요.',
  },
  {
    id: 'q7',
    question: '어떤 사람들에게 도움을 주고 싶으신가요?',
    hint: '타겟 고객이나 도움을 주고 싶은 대상을 구체적으로 적어주세요.',
  },
  {
    id: 'q8',
    question: '당신의 핵심 가치관 3가지는 무엇인가요?',
    hint: '예: 정직, 혁신, 배려, 전문성, 도전 등',
  },
  {
    id: 'q9',
    question: '온라인에서 어떤 모습으로 기억되고 싶으신가요?',
    hint: '링크드인, 블로그, SNS 등에서 표현하고 싶은 이미지를 설명하세요.',
  },
  {
    id: 'q10',
    question: '당신이 해결할 수 있는 가장 큰 문제는 무엇인가요?',
    hint: '당신의 전문성으로 해결 가능한 사회적/비즈니스 문제를 적어주세요.',
  },
  {
    id: 'q11',
    question: '자기 PR이 어려운 이유는 무엇인가요?',
    hint: '솔직하게 작성하시면 맞춤형 전략을 제안해드립니다.',
  },
  {
    id: 'q12',
    question: '당신의 커뮤니케이션 스타일은 어떤가요?',
    hint: '예: 논리적, 따뜻한, 직설적, 스토리텔링형 등',
  },
  {
    id: 'q13',
    question: '현재 보유하고 있는 자격증, 학위, 수상 경력이 있다면?',
    hint: '브랜드 신뢰도를 높일 수 있는 요소들을 모두 작성하세요.',
  },
  {
    id: 'q14',
    question: '과거의 실패 경험에서 배운 중요한 교훈은?',
    hint: '진정성 있는 스토리는 강력한 브랜드 자산이 됩니다.',
  },
  {
    id: 'q15',
    question: '당신이 가장 영향을 받은 멘토나 롤모델은 누구인가요?',
    hint: '그분의 어떤 점이 영향을 주었는지 함께 적어주세요.',
  },
  {
    id: 'q16',
    question: '마지막으로, 이 진단을 통해 얻고 싶은 것은 무엇인가요?',
    hint: '명확한 방향성, 실행 계획, 차별화 전략 등 구체적으로 적어주세요.',
  },
];

export default function DiagnosisForm({ onComplete }: DiagnosisFormProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAnswerChange = (id: string, value: string) => {
    const newAnswers = { ...answers, [id]: value };
    setAnswers(newAnswers);

    const filled = Object.keys(newAnswers).filter(key => newAnswers[key].trim().length > 0).length;
    setProgress((filled / questions.length) * 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      alert('개인정보 수집 및 AI 처리 동의가 필요합니다.');
      return;
    }

    const allAnswered = questions.every(q => answers[q.id]?.trim());
    if (!allAnswered) {
      alert('모든 질문에 답변해주세요.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      onComplete(answers);
      setIsSubmitting(false);
    }, 60000);
  };

  if (isSubmitting) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-primary/10 via-white to-primary/5 flex items-center justify-center z-50">
        <div className="text-center px-6">
          <div className="relative mb-12">
            <Loader2 className="w-24 h-24 text-primary animate-spin mx-auto" />
            <Sparkles className="w-12 h-12 text-yellow-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <h2 className="text-4xl mb-6">AI가 당신의 브랜드를 분석하고 있습니다</h2>
          <p className="text-2xl text-gray-600 mb-8">
            16개의 답변을 꼼꼼히 검토하여<br />
            맞춤형 전략을 수립하는 중입니다...
          </p>
          <div className="max-w-md mx-auto bg-gray-200 rounded-full h-3 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-blue-400 animate-pulse" style={{ width: '70%' }}></div>
          </div>
          <p className="text-lg text-gray-500 mt-6">잠시만 기다려주세요 (약 60초 소요)</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl mb-6">브랜드 진단 설문</h1>
          <p className="text-xl text-gray-600">
            16개의 질문에 성실히 답변해주시면<br />
            AI가 당신만의 프리미엄 브랜딩 전략을 제안해드립니다.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 sticky top-0 bg-white/95 backdrop-blur-sm py-6 z-10 border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg text-gray-600">진행률</span>
            <span className="text-lg text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Questions */}
        <form onSubmit={handleSubmit} className="space-y-12">
          {questions.map((q, index) => (
            <div
              key={q.id}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  {answers[q.id]?.trim() ? (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  ) : (
                    <span className="text-primary text-lg">{index + 1}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-3">{q.question}</h3>
                  <p className="text-lg text-gray-500 mb-6">{q.hint}</p>
                  <textarea
                    value={answers[q.id] || ''}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    className="w-full min-h-[160px] p-6 text-lg border-2 border-gray-200 rounded-2xl focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300 resize-none"
                    placeholder="여기에 답변을 자유롭게 작성해주세요..."
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Privacy Agreement */}
          <div className="bg-blue-50 rounded-3xl p-8 border-2 border-primary/20">
            <label className="flex items-start gap-4 cursor-pointer group">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-6 h-6 mt-1 accent-primary cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-xl mb-3">개인정보 수집 및 AI 처리 동의</p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  입력하신 답변은 AI 분석 및 맞춤형 브랜딩 리포트 생성을 위해 사용됩니다.
                  개인정보는 암호화되어 안전하게 보관되며, 서비스 제공 목적 외에는 사용되지 않습니다.
                </p>
              </div>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <button
              type="submit"
              disabled={!agreed || Object.keys(answers).length < questions.length}
              className="inline-flex items-center gap-3 px-16 py-6 bg-primary text-white text-2xl rounded-2xl hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 shadow-2xl hover:shadow-primary/30 hover:scale-105 disabled:scale-100 disabled:shadow-none"
            >
              <Sparkles className="w-7 h-7" />
              AI 분석 시작하기
            </button>
            {!agreed && (
              <p className="text-lg text-gray-500 mt-6">개인정보 동의 후 제출 가능합니다</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
