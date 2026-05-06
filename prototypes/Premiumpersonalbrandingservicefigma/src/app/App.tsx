import { useState } from 'react';
import LandingPage from './components/LandingPage';
import DiagnosisForm from './components/DiagnosisForm';
import AdminDashboard from './components/AdminDashboard';
import CustomerReport from './components/CustomerReport';

type Page = 'landing' | 'diagnosis' | 'admin' | 'report';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, string> | null>(null);

  const handleStartDiagnosis = () => {
    setCurrentPage('diagnosis');
  };

  const handleDiagnosisComplete = (answers: Record<string, string>) => {
    setSubmittedAnswers(answers);
    setCurrentPage('landing');
    alert('진단이 완료되었습니다! 관리자 승인 후 리포트를 받아보실 수 있습니다.');
  };

  const mockReportData = {
    customerName: '김영희',
    brandIdentity: '"중소기업 성장의 동반자" - 30년 경험을 바탕으로 실질적 성과를 만드는 전략 컨설턴트',
    coreValues: '실용주의, 결과 지향, 진정성, 헌신',
    targetAudience: '매출 10억~100억 사이 성장 정체기를 겪는 중소기업 CEO (40~60대)',
    differentiators: '• 200개 기업 성공 사례 보유\n• 이론이 아닌 현장 중심 접근\n• 15개 업계 1위 기업 배출 실적',
    contentStrategy: '• 매주 "중소기업 성장 인사이트" 블로그 발행\n• 분기별 무료 웨비나 개최\n• LinkedIn 활발한 사례 공유',
    actionPlan: '1개월: 웹사이트 리뉴얼 및 사례집 발간\n3개월: 온라인 강의 런칭\n6개월: 유튜브 채널 오픈 및 구독자 1만명 달성',
  };

  return (
    <div className="size-full">
      {/* Navigation Menu */}
      <nav className="fixed top-4 right-4 z-50 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-4">
        <div className="flex gap-3">
          <button
            onClick={() => setCurrentPage('landing')}
            className={`px-5 py-3 rounded-xl text-base transition-all ${
              currentPage === 'landing'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            랜딩
          </button>
          <button
            onClick={() => setCurrentPage('diagnosis')}
            className={`px-5 py-3 rounded-xl text-base transition-all ${
              currentPage === 'diagnosis'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            진단폼
          </button>
          <button
            onClick={() => setCurrentPage('admin')}
            className={`px-5 py-3 rounded-xl text-base transition-all ${
              currentPage === 'admin'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            관리자
          </button>
          <button
            onClick={() => setCurrentPage('report')}
            className={`px-5 py-3 rounded-xl text-base transition-all ${
              currentPage === 'report'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            리포트
          </button>
        </div>
      </nav>

      {/* Page Rendering */}
      {currentPage === 'landing' && <LandingPage onStartDiagnosis={handleStartDiagnosis} />}
      {currentPage === 'diagnosis' && <DiagnosisForm onComplete={handleDiagnosisComplete} />}
      {currentPage === 'admin' && <AdminDashboard />}
      {currentPage === 'report' && (
        <CustomerReport reportData={mockReportData} isApproved={true} />
      )}
    </div>
  );
}